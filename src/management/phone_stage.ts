import { Human } from '../content/human'
import { HumanTagMap } from '../content/entityTags'

export class PhoneStage {
    private portrait : Phaser.GameObjects.Image
    private text: Phaser.GameObjects.Text

    constructor(private scene: Phaser.Scene) {
        scene.add.rectangle(0, 0, 240, 500, 0xcccccc)
            .setOrigin(0, 0)

        this.portrait = scene.add.image(20, 20, 'portrait_big')
            .setOrigin(0, 0)

        this.text = scene.add.text(10, 250, '', { fill: 'black', fontFamily: 'Roboto' })
    }

    public display(human: Human, index: number) {
        this.portrait.setFrame(index)
        let tagString = Array.from(human.tags).map((x) => HumanTagMap[x]).join(', ')
        let relString = human.relationships.join('\n')
        this.text.setText(`${human.name}\n${tagString}\n${relString}`)
    }
}