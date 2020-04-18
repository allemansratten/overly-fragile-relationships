import * as Phaser from 'phaser'
import { ManagementScene } from './scenes/management'

const gameConfig: Phaser.Types.Core.GameConfig = {
  title: 'Sustainable Friendship',
 
  type: Phaser.AUTO,
 
  scale: {
    width: 800,
    height: 500,
  },
 
  parent: 'content',
  backgroundColor: '#888',

  scene:  ManagementScene,
};
 
export const game = new Phaser.Game(gameConfig);