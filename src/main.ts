import * as Phaser from 'phaser'
import { BoardScene } from './management/board'

const gameConfig: Phaser.Types.Core.GameConfig = {
  title: 'Sustainable Friendship',
 
  type: Phaser.AUTO,
 
  scale: {
    width: 800,
    height: 500,
  },
 
  parent: 'content',
  backgroundColor: '#888',

  scene:  BoardScene,
};
 
export const game = new Phaser.Game(gameConfig);