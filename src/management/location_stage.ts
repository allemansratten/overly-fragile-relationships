import { Level } from "../model/level"
import { BoardScene } from "./board"

export class LocationStage {
    private allLocationImage: Array<Phaser.GameObjects.Image> = []

    constructor(scene: BoardScene, level: Level) {
        // scene.add.rectangle(680, 0, 120, 500, 0xcccccc)
        //     .setOrigin(0, 0)
        let text = scene.add.text(700, 20, 'Go to:', { fill: 'black', fontFamily: 'Roboto' })


        for (let i in level.locations) {
            let location = level.locations[i]
            let img = scene.add.image(709, 53 + Number(i) * 120, 'location_thumb')
                .setFrame(i)
                .setInteractive({ useHandCursor: true })
                .setOrigin(0, 0)
                .setDisplaySize(80, 80)
                .on('pointerdown', () => {
                    scene.goOut(location)
                    scene.tripSummary.goLocation = location
                })
            this.allLocationImage.push(img)
            let text = scene.add.text(700, 40 + Number(i) * 120, `${location.name}`, { fill: 'black', fontFamily: 'Roboto' })
        }
    }

    public enable(value: boolean) {
        for (let img of this.allLocationImage) {
            img.input.enabled = value
        }
    }
}