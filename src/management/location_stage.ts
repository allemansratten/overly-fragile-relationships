import { Level } from "../content/level"
import { BoardScene } from "./board"

export class LocationStage {
    private allLocationImage : Array<Phaser.GameObjects.Image> = []

    constructor(scene: BoardScene, level: Level) {
        for (let i in level.locations) {
            let location = level.locations[i]
            let img = scene.add.image(685, 20 + Number(i)*110, 'location_thumb')
                .setFrame(i)
                .setInteractive({ useHandCursor: true })
                .setOrigin(0, 0)
                .setDisplaySize(110, 110)
                .on('pointerdown', () => {
                    scene.goOut(location)
                    scene.tripSummary.goLocation = location
                })
            this.allLocationImage.push(img)
            let text = scene.add.text(690, 20 + Number(i)*110, `${location.name}`, { fill: '#fff' })
        }
    }

    public enable(value: boolean) {
        for(let img of this.allLocationImage) {
            img.input.enabled = value
        }
    }
}