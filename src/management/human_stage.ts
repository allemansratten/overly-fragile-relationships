import { Level } from "../content/level"
import { BoardScene } from "./board"

export class HumanStage {
    private allPeopleTexts: Array<Phaser.GameObjects.Text> = []

    constructor(scene: BoardScene, level: Level) {
        const nHumans = level.humans
        const centerX = 450
        const centerY = 250
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

            let image = scene.add.image(position.x, position.y, 'portrait_big', i)
                .setOrigin(0.5, 0.5)
                .setScale(0.3)
                .setInteractive({useHandCursor: true})
                .on('pointerover', () => {
                    scene.phone!.display(human, Number(i))
                })

            let text = scene.add.text(position.x, position.y, `${human.name}`, {
                fill: (Number(i) == 0 ? '#0f0' : '#f00'),
                fontFamily: 'Roboto',
            })
                .setInteractive({useHandCursor: true})
                .on('pointerover', () => {
                    scene.phone!.display(human, Number(i))
                })

            if (Number(i) != 0) {
                image.on('pointerdown', () => {
                    if (scene.tripSummary.flipGoPeople(human)) {
                        text.setFill('#0f0')
                    } else {
                        text.setFill('#f00')
                    }
                })
            }
            this.allPeopleTexts.push(text)
        }
    }

    public bleachPeople() {
        for (let text of this.allPeopleTexts) {
            text.setFill('#f00')
        }
    }
}
