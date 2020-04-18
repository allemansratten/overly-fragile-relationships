import * as Phaser from 'phaser'
import { SampleScene } from './scenes/sample'

const gameConfig: Phaser.Types.Core.GameConfig = {
  title: 'Sample',
 
  type: Phaser.AUTO,
 
  scale: {
    width: 800,
    height: 400,
  },
 
  parent: 'content',
  backgroundColor: '#333',

  scene:  SampleScene,
};
 
export const game = new Phaser.Game(gameConfig);