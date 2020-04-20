import { levels } from '../content/levels'
import { TripSummary } from '../model/tripSummary'
import { PhoneStage } from './phone_stage'
import { HumanStage } from './human_stage'
import { LocationStage } from './location_stage'
import { LocationName } from '../content/locations'
import { Level } from "../model/level"
import { ModalDialog } from '../utils/modal'
import { Utils } from '../utils/utils'

export class BoardScene extends Phaser.Scene {
    private tripFader?: Phaser.GameObjects.Rectangle
    private transitionFader?: Phaser.GameObjects.Rectangle
    private infoText?: Phaser.GameObjects.Text
    private levelsText?: Phaser.GameObjects.Text
    private levelCount: number = 0
    private level: Level

    public tripSummary: TripSummary
    public phone?: PhoneStage
    private humanStage?: HumanStage
    private locationStage?: LocationStage
    tempPeoplePortraits?: Phaser.GameObjects.Group

    constructor() {
        super({
            key: 'management',
        });
        this.level = levels[0]
        this.tripSummary = new TripSummary(this.level.humans[0])
    }

    public preload() {
        this.transitionFader = this.add.rectangle(0, 0, 800, 500, 0x0)
            .setOrigin(0, 0)
            .setDepth(2001)

        let music = this.sound.add('main_music', {
            volume: 0.5,
            loop: true,
        }).play()
    }

    public create() {

        this.add.image(0, 0, 'board_background')
            .setOrigin(0, 0)

        this.tripFader = this.add.rectangle(0, 0, 800, 500, 0x0)
            .setOrigin(0, 0)
            .setDepth(1001)
            .setAlpha(0)
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => this.goBack())
        this.infoText = this.add.text(400, 110, '', { fill: '#fff', fontFamily: 'Roboto', fontSize: '20px' })
            .setDepth(1001)
            .setAlpha(0)
            .setAlign('center')
            .setWordWrapWidth(560)
            .setOrigin(0.5, 0)

        this.levelsText = this.add.text(270, 20, 'week: 1', { fill: '#000', fontFamily: 'Roboto', fontSize: '20px' })
            .setDepth(1001)

        this.locationStage = new LocationStage(this, this.level)
        this.humanStage = new HumanStage(this, this.level)
        this.phone = new PhoneStage(this)

        this.add.tween({
            targets: this.transitionFader,
            alpha: { from: 1, to: 0 },
            duration: 500,
        })
    }

    public goOut(location: LocationName) {
        if (this.tripSummary.goPeople.length <= 1) {
            let tutorial = 'Select some of your friends to join you.'
            if (location == 'Hiking') {
                new ModalDialog(this, `You can't go hiking alone.\n${tutorial}`)
            } else if (location == 'Bowling') {
                new ModalDialog(this, `You can't go bowling alone.\n${tutorial}`)
            } else if (location == 'Drinking') {
                new ModalDialog(this, `You can't go drinking alone.\n${tutorial}`)
            }
            return
        }

        this.tripSummary.prepare(location)
        let message = this.level.goOut(this, this.tripSummary)
        this.tripFader!.input.enabled = false
        this.locationStage!.enable(false)
        this.infoText!.setText(message)
        this.tempPeoplePortraits = Utils.drawPortraits(this.tripSummary.goPeople, this)
        for(let child of this.tempPeoplePortraits.children.getArray()) {
            this.add.tween({
                targets: child,
                alpha: { from: 0, to: 1 },
                duration: 500,
            })
        }
        this.add.tween({
            targets: [this.infoText, this.tripFader],
            alpha: { from: 0, to: 1 },
            duration: 500,
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
            duration: 500,
            onComplete: () => {
                this.tripFader!.input.enabled = true
                // check if message queue has something
                if(this.messageQueue) {
                    new ModalDialog(this, this.messageQueue[0], this.messageQueue[1])
                }
            }
        })

        for(let child of this.tempPeoplePortraits!.children.getArray()) {
            this.add.tween({
                targets: child,
                alpha: { from: 1, to: 0 },
                duration: 500,
                onComplete: () => {
                    child.destroy()
                    this.tempPeoplePortraits!.destroy(false)
                }
            })
        }
    }

    private refresh() {
        this.tripSummary = new TripSummary(this.level.humans[0])
        this.phone?.display(this.level.humans[0], 0)
        this.humanStage?.redrawLines(this.level)
        this.humanStage?.display(this.level.humans[0], 0)

        this.levelCount += 1
        this.levelsText?.setText(`week: ${this.levelCount}`)
    }

    private messageQueue?: [string, () => void] = undefined
    public fail(message: string) {
        // +1 because turns are 0-based, weeks aren't
        this.messageQueue = [message + `\nYou kept the friendship network alive for ${1 + this.levelCount} weeks`, () => { window.location.reload() }]
    }
}