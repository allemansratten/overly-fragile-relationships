export class LoadingScene extends Phaser.Scene {
    private fader?: Phaser.GameObjects.Rectangle
    private mockText?: Phaser.GameObjects.Text

    constructor() {
        super({
            key: 'loading',
        })
    }

    public preload() {
        this.load.setBaseURL('assets/')
        this.load.image('board_background', 'board_background.png')
        this.load.spritesheet('rel_tags', 'rel_tags.png', { frameWidth: 30, frameHeight: 30 })
        this.load.spritesheet('portrait_big', 'portrait_big.png', { frameWidth: 200, frameHeight: 200 })
        this.load.spritesheet('portrait_small', 'portrait_small.png', { frameWidth: 60, frameHeight: 60 })
        this.load.spritesheet('location_thumb', 'location_thumb.png', { frameWidth: 90, frameHeight: 90 })
        this.load.audio('main_music', 'montuno.mp3')

        this.fader = this.add.rectangle(0, 0, 800, 500, 0x0)
            .setOrigin(0, 0)
            .setDepth(1001)
            .setAlpha(1)
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => {
                this.scene.start('management')
            })
        this.mockText = this.add.text(100, 100, '', { fill: '#fff', fontFamily: 'Roboto' })
            .setDepth(1001)
            .setAlpha(0)

    }

    public create() {
        let title = this.add.text(100, 100, 'Overly Fragile Relationships', {
            fill: '#fff',
            fontFamily: 'Roboto',
            fontSize: '30px',
        })
            .setDepth(1002)
        let help = this.add.text(100, 200,
            'Pick one or more friends to join you on nights out.\n'
            + 'Try to keep your friendship network alive.\n'
            + 'You lose if one of your friends begins to hate somebody.\n'
            + 'People get upset if you don\'t go out with them for a longer time\n'
            + 'or when they have to spend time with someone they don\'t like\n'
            + 'or when they have a generally bad time.\n'
            + '\n'
            + 'It\'s complex.',
            { fill: '#fff', fontFamily: 'Roboto', fontSize: '18px' })
            .setDepth(1002)
    }
}