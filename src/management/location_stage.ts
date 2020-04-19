import { Level } from "../model/level"
import { BoardScene } from "./board"

export class LocationStage {
    private allLocationImage: Array<Phaser.GameObjects.Image> = []

    constructor(scene: BoardScene, level: Level) {
        // scene.add.rectangle(680, 0, 120, 500, 0xcccccc)
        //     .setOrigin(0, 0)
        let text = scene.add.text(689, 25, 'Activity', { fill: 'black', fontFamily: 'Roboto', fontSize: '20px' })

        for (let i in level.locations) {
            let location = level.locations[i]
            let img = scene.add.image(682, 70 + Number(i) * 135, 'location_thumb')
                .setFrame(i)
                .setInteractive({ useHandCursor: true })
                .setOrigin(0, 0)
                .setDisplaySize(90, 90)
                .on('pointerdown', () => {
                    scene.goOut(location)
                    scene.tripSummary.goLocation = location
                })
            this.allLocationImage.push(img)
            let text = scene.add.text(725, 85 + Number(i) * 135 + 90, `${location}`, { fill: 'black', fontFamily: 'Roboto' })
                .setAlign('center')
                .setWordWrapWidth(120)
                .setOrigin(0.5, 0.5)
        }
    }

    public enable(value: boolean) {
        for (let img of this.allLocationImage) {
            img.input.enabled = value
        }
    }
}