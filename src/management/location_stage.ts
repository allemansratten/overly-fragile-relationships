import { Level } from "../content/level"
import { BoardScene } from "./board"

export class LocationStage {
    private allLocationTexts: Array<Phaser.GameObjects.Text> = []


    constructor(scene: BoardScene, level: Level) {
        for (let i in level.locations) {
            let location = level.locations[i]
            let text = scene.add.text(640, 20 + 60 * Number(i), `${location.name}\nMin: ${location.limit.min}, Max: ${location.limit.max}`, { fill: '#f00' })
                .setInteractive({ useHandCursor: true })
                .on('pointerdown', () => {
                    this.bleachLocation()
                    text.setFill('#0f0')
                    scene.tripSummary.goLocation = location
                })
            this.allLocationTexts.push(text)
        }
    }
    
    public bleachLocation() {
        for (let text of this.allLocationTexts) {
            text.setFill('#f00')
        }
    }
}