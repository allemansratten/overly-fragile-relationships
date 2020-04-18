import { Level } from "../content/level"
import { BoardScene } from "./board"

export class HumanStage {
    private allPeopleTexts: Array<Phaser.GameObjects.Text> = []

    constructor(scene: BoardScene, level: Level) {
        for (let i in level.humans) {
            let human = level.humans[i]
            let text = scene.add.text(290, 20 + 60 * Number(i), `${human.name}`, { fill: (Number(i) == 0 ? '#0f0' : '#f00'), fontFamily: 'Roboto' })
                .setInteractive({ useHandCursor: true })
                .on('pointerover', () => {
                    scene.phone!.display(human, Number(i))
                })
            if (Number(i) != 0) {
                text.on('pointerdown', () => {
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