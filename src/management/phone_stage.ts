import { Human } from '../model/human'
import { humanTagMap, relationshipTagMap } from '../content/entityTags'
import { HumanName } from '../content/humans'

export class PhoneStage {
    private portrait : Phaser.GameObjects.Image
    private text: Phaser.GameObjects.Text

    constructor(private scene: Phaser.Scene) {
        // scene.add.rectangle(0, 0, 240, 500, 0xaaaaaa)
        //     .setOrigin(0, 0)

        this.portrait = scene.add.image(20, 20, 'portrait_big')
            .setOrigin(0, 0)

        this.text = scene.add.text(20, 250, '', { fill: 'black', fontFamily: 'Roboto' })
            .setWordWrapWidth(230)
    }

    public display(human: Human, index: number) {
        this.portrait.setFrame(index)
        let humString = Array.from(human.tags)
            .filter(x => humanTagMap.has(x))
            .map((x) => humanTagMap.get(x))
            .join(', ')

        // This could be perhaps done in a functional way, but this seems more readable
        let relString = []
        for(let relationship of human.relationships) {
            let relStringIndividual : Array<string> = []
            relationship.tags.forEach((x) => {
                if(relationshipTagMap.has(x)) {
                    relStringIndividual.push(relationshipTagMap.get(x) as string)
                }
            })
            if(relStringIndividual.length != 0) {
                relString.push(`${relationship.people[1]}: ${relStringIndividual.join(', ')}`)
            }
        }
        this.text.setText(`${HumanName[human.name]}\n${humString}\n\n${relString.join('\n\n')}`)
    }
}