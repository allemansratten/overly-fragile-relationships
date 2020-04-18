import { Level } from '../content/level'
import { TripSummary } from './tripsummary'
import { Phone } from './phone'
import { HumanStage } from './human_stage'
import { LocationStage } from './location_stage'

export class BoardScene extends Phaser.Scene {
    private goButton: Phaser.GameObjects.Text
    private fader: Phaser.GameObjects.Rectangle
    private infoText: Phaser.GameObjects.Text
    private level: Level
    
    public tripSummary: TripSummary
    public phone: Phone
    private humanStage: HumanStage
    private locationStage: LocationStage

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


        this.locationStage = new LocationStage(this, this.level)
        this.humanStage = new HumanStage(this, this.level)

        this.phone = new Phone(this)
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
        this.locationStage.bleachLocation()
        this.humanStage.bleachPeople()
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