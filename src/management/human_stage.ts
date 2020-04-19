import { Level } from "../content/level"
import { BoardScene } from "./board"

export class HumanStage {
    private allPeopleTexts: Array<Phaser.GameObjects.Text> = []
    private allPeopleCircles: Array<Phaser.GameObjects.Ellipse> = []
    private COLOR_OK = '#58bf54'
    private COLOR_BAD = '#bf5458'

    constructor(scene: BoardScene, level: Level) {
        const centerX = 450
        const centerY = 200
        const radius = 150

        const positions = level.humans.map((_, i: number) => {
            const angle = 2 * Math.PI * (i + 0.5) / level.humans.length
            return {
                x: centerX + Math.cos(angle) * radius,
                y: centerY + Math.sin(angle) * radius,
            }
        })

        for (let i in level.humans) {
            let human = level.humans[i]
            const position = positions[i]

            let image = scene.add.image(0, 0, 'portrait_big', i)
                .setOrigin(0.5, -0.2)
                .setScale(0.3)
                .setInteractive({ useHandCursor: true })
                .on('pointerover', () => {
                    scene.phone!.display(human, Number(i))
                })

            let circle = scene.add.ellipse(0, 0, 80, 80, 0xcccccc)
                .setOrigin(0.5, 0.5)
                .setAlpha((Number(i) == 0 ? 0.1 : 0))
                .setInteractive({ useHandCursor: true })
                .on('pointerover', () => {
                    scene.phone!.display(human, Number(i))
                })

            let text = scene.add.text(0, 0, `${human.name}`, {
                fill: (Number(i) == 0 ? this.COLOR_OK : this.COLOR_BAD),
                fontFamily: 'Roboto',
                fontSize: '18px'
            })
                .setOrigin(0.5, 0.5)
                .setInteractive({ useHandCursor: true })
                .on('pointerover', () => {
                    scene.phone!.display(human, Number(i))
                })

            scene.add.group([image, text, circle]).setXY(position.x, position.y)

            // TBH I have no idea why this is not relative to the group, but whatevs
            text.setPosition(position.x, position.y + 100)
            circle.setPosition(position.x, position.y + 45)

            if (Number(i) != 0) {
                const onClick = () => {
                    if (scene.tripSummary.flipGoPeople(human)) {
                        text.setFill(this.COLOR_OK)
                        circle.setAlpha(0.1)
                    } else {
                        text.setFill(this.COLOR_BAD)
                        circle.setAlpha(0)
                    }
                }
                
                text.on('pointerdown', onClick)
                circle.on('pointerdown', onClick)
                image.on('pointerdown', onClick)
            }
            
            this.allPeopleTexts.push(text)
            this.allPeopleCircles.push(circle)
        }
    }

    public bleachPeople() {
        for (let i in this.allPeopleTexts) {
            if (Number(i) != 0) {
                this.allPeopleTexts[i].setFill(this.COLOR_BAD)
                this.allPeopleCircles[i].setAlpha(0)
                console.log('setting alpha to 0')
            }
        }
    }
}
