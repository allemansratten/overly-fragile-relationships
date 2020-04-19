export class ModalDialog {
    private preventClick: Phaser.GameObjects.Rectangle
    private blackBoard: Phaser.GameObjects.Rectangle
    private message: Phaser.GameObjects.Text
    private dying: boolean = false

    constructor(private scene: Phaser.Scene, text: string) {
        this.preventClick = scene.add.rectangle(0, 0, 800, 500, 0x000000)
            .setOrigin(0, 0)
            .setAlpha(0)
            .setInteractive()

        this.blackBoard = scene.add.rectangle(400, 250, 600, 300, 0x000000)
            .setInteractive({ useHandCursor: true })
            .setAlpha(0)
            .on('pointerdown', () => this.destroy())

        this.message = scene.add.text(400, 250, text, { fontFamily: 'Roboto', fontSize: '20px' })
            .setAlign('center')
            .setOrigin(0.5, 0.5)
            .setWordWrapWidth(300)
            // .on('pointerdown', () => this.destroy())
            .setAlpha(0)

        scene.add.tween({
            targets: [this.preventClick],
            alpha: { from: 0, to: 0.4 },
            duration: 500
        })
        scene.add.tween({
            targets: [this.blackBoard, this.message],
            alpha: { from: 0, to: 1 },
            duration: 500
        })
    }

    private destroy() {
        if(this.dying)
            return
        this.dying = true

        this.scene.add.tween({
            targets: [this.message, this.blackBoard],
            alpha: { from: 1, to: 0 },
            duration: 500,
            onComplete: () => {
                this.message.destroy()
                this.blackBoard.destroy()
                this.preventClick.destroy()
            }
        })
        this.scene.add.tween({
            targets: [this.preventClick],
            alpha: { from: 0.4, to: 0 },
            duration: 500,
        })
    }
}