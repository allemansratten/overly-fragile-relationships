import { Location } from '../content/location'
import { Human } from '../content/human'
import { Level } from '../content/level'

export class ManagementScene extends Phaser.Scene {
    private goButton: Phaser.GameObjects.Text
    private goPeople: Array<Human> = new Array<Human>()
    private goLocation?: Location = null
    private allLocationTexts: Array<Phaser.GameObjects.Text> = []
    private allPeopleTexts: Array<Phaser.GameObjects.Text> = []
    private fader: Phaser.GameObjects.Rectangle
    private infoText: Phaser.GameObjects.Text
    private level: Level


    constructor() {
        super({
            key: 'management',
        });
        this.level = new Level("foo")
    }

    public create() {
        // phone
        this.add.rectangle(10, 10, 200, 380, 0xcccccc)
            .setOrigin(0, 0)

        // locations 
        this.add.rectangle(590, 10, 200, 250, 0xcccccc)
            .setOrigin(0, 0)

        this.fader = this.add.rectangle(0, 0, 800, 500, 0x0)
            .setOrigin(0, 0)
            .setDepth(1001)
            .setAlpha(0)
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => this.goBack())
        this.infoText = this.add.text(100, 100, '', { fill: '#fff'})
            .setDepth(1001)
            .setAlpha(0)

        this.add.rectangle(640, 440, 100, 30, 0xcccccc)
            .setOrigin(0, 0)

        this.goButton = this.add.text(650, 450, "Let's go", { fill: '#0f0' })
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => this.goOut())

        for (let i in this.level.locations) {
            let location = this.level.locations[i]
            let text = this.add.text(600, 20 + 60 * Number(i), `Location ${location.name}\nMin: ${location.limit.min}, Max: ${location.limit.max}`, { fill: '#f00' })
                .setInteractive({ useHandCursor: true })
                .on('pointerdown', () => {
                    this.bleachLocation()
                    text.setFill('#0f0')
                    this.goLocation = location
                })
            this.allLocationTexts.push(text)
        }

        for (let i in this.level.humans) {
            let human = this.level.humans[i]
            let text = this.add.text(290, 20 + 60 * Number(i), `${human.name} (${human.love})`, { fill: '#f00' })
                .setInteractive({ useHandCursor: true })
                .on('pointerdown', () => {
                    if(this.flipGoPeople(human)) {
                        text.setFill('#0f0')
                    } else {
                        text.setFill('#f00')
                    }
                })
            this.allPeopleTexts.push(text)
        }
        // this.goButton.on('pointerover', () => this.goButton.setFill('#ff0'))
        // this.goButton.on('pointerout', () => this.goButton.setFill('#f00'))
    }

    private bleachLocation() {
        for(let text of this.allLocationTexts) {
            text.setFill('#f00')
        }
    }

    private bleachPeople() {
        for(let text of this.allPeopleTexts) {
            text.setFill('#f00')
        }
    }

    private removeGoPeople(human: Human): boolean {
        for (let i in this.goPeople) {
            if (this.goPeople[i].name == human.name) {
                delete this.goPeople[i]
                return true
            }
        }
        return false
    }

    private flipGoPeople(human: Human) : boolean {
        if (this.removeGoPeople(human)) {
            // deleted
            return false
        } else {
            // not deleted, so add
            this.goPeople.push(human)
            return true
        }
    }

    private goOut() {
        let friendlist: string = this.goPeople.map((human: Human)=>human.name).join(', ')
        this.infoText.setText(`You went to ${this.goLocation.name} with ${friendlist}`)
        this.add.tween({
            targets: [this.infoText, this.fader],
            alpha: {from: 0, to: 1},
            duration: 1000
        })
    }

    private goBack() {
        this.bleachLocation()
        this.bleachPeople()
        this.add.tween({
            targets: [this.infoText, this.fader],
            alpha: {from: 1, to: 0},
            duration: 1000
        })
    }

    public update() {
        // TODO
    }
}