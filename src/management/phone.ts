import { Human } from '../content/human'

export class Phone {
    private portrait : Phaser.GameObjects.Image
    private text: Phaser.GameObjects.Text

    constructor(private scene: Phaser.Scene) {
        // super(scene)

        // phone
        scene.add.rectangle(0, 0, 200, 500, 0xcccccc)
            .setOrigin(0, 0)

        this.portrait = scene.add.image(0, 0, 'portrait_big')
            .setOrigin(0, 0)

        this.text = scene.add.text(10, 250, '')
    }

    public display(human: Human, index: number) {
        this.portrait.setFrame(index)
        this.text.setText(human.name)
    }
}