import { Human } from '../model/human'
import { humanTagMap, relationshipTagMap, humanTagDisplay } from '../content/entityTags'
import { HumanName, HumanBio } from '../content/humans'

export class PhoneStage {
    private portrait: Phaser.GameObjects.Image
    private infoText: Phaser.GameObjects.Text
    private nameText: Phaser.GameObjects.Text

    constructor(private scene: Phaser.Scene) {
        // scene.add.rectangle(0, 0, 240, 500, 0xaaaaaa)
        //     .setOrigin(0, 0)

        this.portrait = scene.add.image(20, 20, 'portrait_big')
            .setOrigin(0, 0)

        this.nameText = scene.add.text(115, 255, '', { fill: 'black', fontFamily: 'Roboto', fontSize: '20px' })
            .setWordWrapWidth(190)
            .setAlign('center')
            .setOrigin(0.5, 0.5)
        this.infoText = scene.add.text(25, 270, '', { fill: 'black', fontFamily: 'Roboto', fontSize: '14px' })
            .setWordWrapWidth(190)
    }

    public display(human: Human, index: number) {
        this.portrait.setFrame(index)
        let humString = Array.from(human.tags)
            .filter(x => humanTagMap.has(x) && humanTagDisplay.has(x))
            .map((x) => humanTagMap.get(x))
            .join(', ')

        // This could be perhaps done in a functional way, but this seems more readable
        let relString = []
        for (let relationship of human.relationships) {
            let relStringIndividual: Array<string> = []
            relationship.tags.forEach((x) => {
                if (relationshipTagMap.has(x)) {
                    relStringIndividual.push(relationshipTagMap.get(x) as string)
                }
            })
            if (relStringIndividual.length != 0) {
                relString.push(`${relationship.people[1]}: ${relStringIndividual.join(', ')}`)
            }
        }
        
        let bioString = HumanBio[index]

        this.nameText.setText(HumanName[human.name])
        this.infoText.setText(`${humString}\n\n${bioString}\n\n${relString.join('\n')}`.replace(/^\n\n/, ''))
    }
}