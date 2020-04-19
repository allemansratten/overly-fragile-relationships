import { Level } from "../model/level"
import { BoardScene } from "./board"
import { Human } from "../model/human"
import { relationshipTagMap } from "../content/entityTags"
import { DEFAULT_FONDNESS } from "../model/peopleGraph"

export class HumanStage {
    private allPeopleTexts: Array<Phaser.GameObjects.Text> = []
    private allPeopleCircles: Array<Phaser.GameObjects.Ellipse> = []
    private allPeopleLines: Array<Phaser.GameObjects.Group> = []
    private TEXT_ALPHA_OK = 1
    private TEXT_ALPHA_BD = 0.3
    private CIRCLE_ALPHA_OK = 0.1
    private CIRCLE_ALPHA_BD = 0
    private positions: Array<{ x: number, y: number }>
    private positionsInner: Array<{ x: number, y: number }>

    constructor(private scene: BoardScene, level: Level) {
        const centerX = 450
        const centerY = 200
        const radius = 150
        const radiusInner = 100

        this.positions = level.humans.map((_, i: number) => {
            const angle = 2 * Math.PI * (i + 0.5) / level.humans.length
            return {
                x: centerX + Math.cos(angle) * radius,
                y: centerY + Math.sin(angle) * radius,
            }
        })

        this.positionsInner = level.humans.map((_, i: number) => {
            const angle = 2 * Math.PI * (i + 0.5) / level.humans.length
            return {
                x: centerX + Math.cos(angle) * radiusInner,
                y: centerY + Math.sin(angle) * radiusInner * 0.9,
            }
        })

        for (let i in level.humans) {
            let human = level.humans[i]
            const position = this.positions[i]

            let image = scene.add.image(0, 0, 'portrait_small', i)
                .setOrigin(0.5, -0.2)
                .setInteractive({ useHandCursor: true })
                .on('pointerover', () => {
                    this.display(human, Number(i))
                })

            let circle = scene.add.ellipse(0, 0, 80, 80, 0xcccccc)
                .setOrigin(0.5, 0.5)
                .setAlpha((Number(i) == 0 ? this.CIRCLE_ALPHA_OK : this.CIRCLE_ALPHA_BD))
                .setInteractive({ useHandCursor: true })
                .on('pointerover', () => {
                    this.display(human, Number(i))
                })

            let text = scene.add.text(0, 0, `${human.name}`, {
                fill: '#e0e0e0',
                fontFamily: 'Roboto',
                fontSize: '18px',
            })
                .setOrigin(0.5, 0.5)
                .setInteractive({ useHandCursor: true })
                .setAlpha(Number(i) == 0 ? this.TEXT_ALPHA_OK : this.TEXT_ALPHA_BD)
                .on('pointerover', () => {
                    this.display(human, Number(i))
                })

            scene.add.group([image, text, circle]).setXY(position.x, position.y)

            // TBH I have no idea why this is not relative to the group, but whatevs
            text.setPosition(position.x, position.y + 100)
            circle.setPosition(position.x, position.y + 45)

            if (Number(i) != 0) {
                const onClick = () => {
                    if (scene.tripSummary.flipGoPeople(human)) {
                        scene.tweens.add({
                            targets: text,
                            alpha: { from: this.TEXT_ALPHA_BD, to: this.TEXT_ALPHA_OK },
                            duration: 500,
                        })
                        scene.tweens.add({
                            targets: circle,
                            alpha: { from: this.CIRCLE_ALPHA_BD, to: this.CIRCLE_ALPHA_OK },
                            duration: 500,
                        })
                    } else {
                        scene.tweens.add({
                            targets: text,
                            alpha: { from: this.TEXT_ALPHA_OK, to: this.TEXT_ALPHA_BD },
                            duration: 500,
                        })
                        scene.tweens.add({
                            targets: circle,
                            alpha: { from: this.CIRCLE_ALPHA_OK, to: this.CIRCLE_ALPHA_BD },
                            duration: 500,
                        })
                    }
                }

                text.on('pointerdown', onClick)
                circle.on('pointerdown', onClick)
                image.on('pointerdown', onClick)
            }

            this.allPeopleTexts.push(text)
            this.allPeopleCircles.push(circle)
        }

        this.redrawLines(level)
    }

    public bleachPeople() {
        for (let i in this.allPeopleTexts) {
            if (Number(i) != 0) {
                this.allPeopleTexts[i].setAlpha(this.TEXT_ALPHA_BD)
                this.allPeopleCircles[i].setAlpha(this.CIRCLE_ALPHA_BD)
            }
        }
    }

    public display(human: Human, index: number) {
        console.log(human)
        for (let i in this.allPeopleLines) {
            // I very much admit that this is super slow and unoptimized
            // BUT WTF IS NOT GROUP ALPHA EXPOSED PUBLICLY
            if (Number(i) == index) {
                for (let child of this.allPeopleLines[i].children.getArray()) {
                    this.scene.tweens.add({
                        targets: child,
                        alpha: { from: (child as Phaser.GameObjects.Line).alpha, to: 1 },
                        duration: 300,
                    })
                }
            } else {
                for (let child of this.allPeopleLines[i].children.getArray()) {
                    this.scene.tweens.add({
                        targets: child,
                        alpha: { from: (child as Phaser.GameObjects.Line).alpha, to: 0 },
                        duration: 300,
                    })
                }
            }
        }
        this.scene.phone!.display(human, Number(index))
    }

    private linearScaleBlack(level: number): number {
        // level is 0 to 1
        // return Math.round(level*255*255*255) + Math.round(level*255) + Math.round(level*255)

        // level is 0 to 10
        if (level <= 2) {
            return 0xde0000
        } else if (level <= 4) {
            return 0xd46c6c
        } else if (level <= 6) {
            return 0xa3a3a3
        } else if (level <= 8) {
            return 0x70cc78
        } else {
            return 0x00de13
        }
    }

    public redrawLines(level: Level) {
        for (let g of this.allPeopleLines) {
            g.destroy(true)
        }
        this.allPeopleLines = []

        let peopleGraph = level.friendshipManager.peopleGraph
        for (let hi1 in level.humans) {
            let human1 = level.humans[hi1]
            let group = this.scene.add.group()
                .setXY(0, 50)
            for (let hi2 in level.humans) {
                let human2 = level.humans[hi2]
                if (hi1 == hi2)
                    continue

                // change fw
                let youChange = human1.name == 'You'
                if (youChange) {
                    let tmp = human2
                    human2 = human1
                    human1 = tmp
                }

                let tags = Array
                    .from(peopleGraph.getRelTags([human1.name, human2.name]))
                    .filter((x) => relationshipTagMap.has(x))
                let fondness = peopleGraph.getFondness([human1.name, human2.name])

                if (fondness != DEFAULT_FONDNESS || tags.length != 0) {
                    let line = this.scene.add.line(0, 0,
                        this.positionsInner[hi1].x - 5, this.positionsInner[hi1].y + 60,
                        this.positionsInner[hi2].x - 5, this.positionsInner[hi2].y + 60,
                        this.linearScaleBlack(fondness), 0.3)
                    line.setOrigin(0, 0)
                        .setLineWidth(2)
                    group.add(line)
                }

                for (let i in tags) {
                    let tag = tags[i]
                    let avgX = (this.positionsInner[hi1].x + this.positionsInner[hi2].x) / 2
                    let avgY = (this.positionsInner[hi1].y + this.positionsInner[hi2].y) / 2 + 60
                    let symbol = this.scene.add.image(avgX + (Number(i) - tags.length / 2 + 0.4) * 27, avgY, 'rel_tags')
                        .setFrame(tag)
                        .setDisplaySize(25, 25)
                    group.add(symbol)
                }

                // change back 
                if (youChange) {
                    let tmp = human2
                    human2 = human1
                    human1 = tmp
                }
            }
            group.setAlpha(0)
            this.allPeopleLines.push(group)
        }
    }
}
