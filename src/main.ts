import * as Phaser from 'phaser'
import { BoardScene } from './management/board'
import { LoadingScene } from './utils/loading'

const gameConfig: Phaser.Types.Core.GameConfig = {
  title: 'Overly Fragile Relationships',
 
  type: Phaser.AUTO,
 
  scale: {
    width: 800,
    height: 500,
  },
 
  parent: 'content',
  backgroundColor: '#888',

  scene:  [LoadingScene, BoardScene],
};
 
export const game = new Phaser.Game(gameConfig);