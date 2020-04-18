import { Level } from "../content/level"
import { BoardScene } from "./board"

export class HumanStage {
    private allPeopleTexts: Array<Phaser.GameObjects.Text> = []

    constructor(scene: BoardScene, level: Level) {
        const nHumans = level.humans
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
                .setInteractive({useHandCursor: true})
                .on('pointerover', () => {
                    scene.phone!.display(human, Number(i))
                })

            let text = scene.add.text(0, 0, `${human.name}`, {
                fill: (Number(i) == 0 ? '#0f0' : '#f00'),
                fontFamily: 'Roboto',
            })
                .setOrigin(0.5, 0.5)
                .setInteractive({useHandCursor: true})
                .on('pointerover', () => {
                    scene.phone!.display(human, Number(i))
                })

            scene.add.group([image, text]).setXY(position.x, position.y)

            if (Number(i) != 0) {
                const onClick = () => {
                    if (scene.tripSummary.flipGoPeople(human)) {
                        text.setFill('#0f0')
                    } else {
                        text.setFill('#f00')
                    }
                }

                text.on('pointerdown', onClick)
                image.on('pointerdown', onClick)
            }
            this.allPeopleTexts.push(text)
        }
    }

    public bleachPeople() {
        for (let i in this.allPeopleTexts) {
            if(Number(i) != 0) {
                this.allPeopleTexts[i].setFill('#f00')
            }
        }
    }
}
