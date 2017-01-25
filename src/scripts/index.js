'use strict'

let styles = require( './../styles/index.scss' )

import { GameFrameClass } from './GameFrameClass.js'

styles.use()
let instance = new GameFrameClass()
export { instance as GameFrame }
