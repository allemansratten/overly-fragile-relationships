import { locations } from '../content/location'
import { humans } from '../content/human'

export class ManagementScene extends Phaser.Scene {
    private goButton: Phaser.GameObjects.Text

    constructor() {
        super({
            key: 'management',
        });
    }

    public create() {
        // phone
        this.add.rectangle(10, 10, 200, 380, 0xFF0000)
            .setOrigin(0, 0)

        // locations 
        this.add.rectangle(590, 10, 200, 250, 0xFF0000)
            .setOrigin(0, 0)

        this.add.rectangle(640, 440, 100, 30, 0x0000FF)
            .setOrigin(0, 0)
        
        this.goButton =
            this.add.text(650, 450, "Let's go", { fill: '#ff0' })
            .setInteractive({ useHandCursor: true })

        for(let i in locations) {
            let location = locations[i]
            this.add.text(600, 20 + 60*Number(i), `Location ${location.name}\nMin: ${location.limit.min}, Max: ${location.limit.max}`, { fill: '#ff0' })
            .setInteractive({ useHandCursor: true })
        }


        for(let i in humans) {
            let human = humans[i]
            this.add.text(290, 20 + 60*Number(i), `${human.name} (${human.love})`, { fill: '#ff0' })
            .setInteractive({ useHandCursor: true })
        }
        // this.goButton.on('pointerover', () => this.goButton.setFill('#ff0'))
        // this.goButton.on('pointerout', () => this.goButton.setFill('#f00'))
    }

    public update() {
        // TODO
    }
}