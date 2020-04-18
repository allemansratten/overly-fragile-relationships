import { Location } from '../content/location'
import { Human } from '../content/human'
import { Level } from '../content/level'
import { TripSummary } from './tripsummary'
import { Phone } from './phone'

export class BoardScene extends Phaser.Scene {
    private goButton: Phaser.GameObjects.Text
    private allLocationTexts: Array<Phaser.GameObjects.Text> = []
    private allPeopleTexts: Array<Phaser.GameObjects.Text> = []
    private fader: Phaser.GameObjects.Rectangle
    private infoText: Phaser.GameObjects.Text
    private level: Level
    private tripSummary: TripSummary
    private phone: Phone

    constructor() {
        super({
            key: 'management',
        });
        this.level = new Level("foo")
        this.tripSummary = new TripSummary()
    }

    public preload() {
        console.log('preloading')
        this.load.setBaseURL('assets/')
        this.load.spritesheet('portrait_big', 'portrait_big.png', { frameWidth: 200, frameHeight: 200 })
    }

    public create() {
        // locations 
        this.add.rectangle(630, 10, 160, 200, 0xcccccc)
            .setOrigin(0, 0)

        this.fader = this.add.rectangle(0, 0, 800, 500, 0x0)
            .setOrigin(0, 0)
            .setDepth(1001)
            .setAlpha(0)
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => this.goBack())
        this.infoText = this.add.text(100, 100, '', { fill: '#fff' })
            .setDepth(1001)
            .setAlpha(0)

        this.add.rectangle(640, 440, 100, 30, 0xcccccc)
            .setOrigin(0, 0)

        this.goButton = this.add.text(650, 450, "Let's go", { fill: '#0f0' })
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => this.goOut())

        for (let i in this.level.locations) {
            let location = this.level.locations[i]
            let text = this.add.text(640, 20 + 60 * Number(i), `${location.name}\nMin: ${location.limit.min}, Max: ${location.limit.max}`, { fill: '#f00' })
                .setInteractive({ useHandCursor: true })
                .on('pointerdown', () => {
                    this.bleachLocation()
                    text.setFill('#0f0')
                    this.tripSummary.goLocation = location
                })
            this.allLocationTexts.push(text)
        }

        for (let i in this.level.humans) {
            let human = this.level.humans[i]
            let text = this.add.text(290, 20 + 60 * Number(i), `${human.name} (${human.love})`, { fill: '#f00' })
                .setInteractive({ useHandCursor: true })
                .on('pointerdown', () => {
                    if (this.tripSummary.flipGoPeople(human)) {
                        text.setFill('#0f0')
                    } else {
                        text.setFill('#f00')
                    }
                })
                .on('pointerover', () => {
                    this.phone.display(human, Number(i))
                })
            this.allPeopleTexts.push(text)
        }

        this.phone = new Phone(this)
    }

    private bleachLocation() {
        for (let text of this.allLocationTexts) {
            text.setFill('#f00')
        }
    }

    private bleachPeople() {
        for (let text of this.allPeopleTexts) {
            text.setFill('#f00')
        }
    }

    private goOut() {
        if (!this.tripSummary.isValid())
            return
        let message = this.level.goOut(this.tripSummary)
        this.fader.input.enabled = false
        this.goButton.input.enabled = false
        this.infoText.setText(message)
        this.add.tween({
            targets: [this.infoText, this.fader],
            alpha: { from: 0, to: 1 },
            duration: 1000,
            onComplete: () => {
                this.fader.input.enabled = true
                this.goButton.input.enabled = true
            }
        })
        this.refresh()
    }

    private goBack() {
        this.bleachLocation()
        this.bleachPeople()
        this.fader.input.enabled = false
        this.add.tween({
            targets: [this.infoText, this.fader],
            alpha: { from: 1, to: 0 },
            duration: 1000,
            onComplete: () => this.fader.input.enabled = true
        })
    }

    private refresh() {
        this.tripSummary = new TripSummary()
    }
}