import {levels } from '../content/levels'
import { TripSummary } from './tripsummary'
import { PhoneStage } from './phone_stage'
import { HumanStage } from './human_stage'
import { LocationStage } from './location_stage'
import { Location } from '../content/location'
import {Level} from "../content/level"

export class BoardScene extends Phaser.Scene {
    private tripFader?: Phaser.GameObjects.Rectangle
    private transitionFader?: Phaser.GameObjects.Rectangle
    private infoText?: Phaser.GameObjects.Text
    private level: Level
    
    public tripSummary: TripSummary
    public phone?: PhoneStage
    private humanStage?: HumanStage
    private locationStage?: LocationStage

    constructor() {
        super({
            key: 'management',
        });
        this.level = levels[0]
        this.tripSummary = new TripSummary()
        this.tripSummary.goPeople.push(this.level.humans[0])
    }

    public preload() {
        console.log('preloading')
        this.load.setBaseURL('assets/')
        this.load.spritesheet('portrait_big', 'portrait_big.png', { frameWidth: 200, frameHeight: 200 })
        this.load.spritesheet('location_thumb', 'location_thumb.png', { frameWidth: 200, frameHeight: 200 })

        this.transitionFader = this.add.rectangle(0, 0, 800, 500, 0x0)
            .setOrigin(0, 0)
            .setDepth(2001)
    }

    public create() {
        this.tripFader = this.add.rectangle(0, 0, 800, 500, 0x0)
            .setOrigin(0, 0)
            .setDepth(1001)
            .setAlpha(0)
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => this.goBack())
        this.infoText = this.add.text(100, 100, '', { fill: '#fff' })
            .setDepth(1001)
            .setAlpha(0)

        this.locationStage = new LocationStage(this, this.level)
        this.humanStage = new HumanStage(this, this.level)
        this.phone = new PhoneStage(this)

        this.add.tween({
            targets: this.transitionFader,
            alpha: { from: 1, to: 0 },
            duration: 500,
        })
    }

    public goOut(location: Location) {
        if (!this.tripSummary.prepare(location))
            return
        let message = this.level.goOut(this.tripSummary)
        this.tripFader!.input.enabled = false
        this.locationStage!.enable(false)
        this.infoText!.setText(message)
        this.add.tween({
            targets: [this.infoText, this.tripFader],
            alpha: { from: 0, to: 1 },
            duration: 1000,
            onComplete: () => {
                this.tripFader!.input.enabled = true
                this.locationStage!.enable(true)
                this.refresh()
            }
        })
    }

    private goBack() {
        this.humanStage!.bleachPeople()
        this.tripFader!.input.enabled = false
        this.add.tween({
            targets: [this.infoText, this.tripFader],
            alpha: { from: 1, to: 0 },
            duration: 1000,
            onComplete: () => this.tripFader!.input.enabled = true
        })
    }

    private refresh() {
        this.tripSummary = new TripSummary()
        this.phone?.display(this.level.humans[0], 0)
    }
}