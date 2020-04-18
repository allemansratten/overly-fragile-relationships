const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Sample',
};

export class SampleScene extends Phaser.Scene {
    private square: Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };

    constructor() {
        super(sceneConfig);
    }

    public create() {
        this.square = this.add.rectangle(400, 200, 100, 100, 0xFFFFFF) as any;
        // this.physics.add.existing(this.square);

        let text = this.add.text(10, 10, "Levý sluchat")
    }

    public update() {
        // TODO
    }
}