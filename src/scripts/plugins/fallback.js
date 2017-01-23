'use strict'

import { screen } from './../utils/screen.js'

export function fallback () {
  let styles = require( '/../../styles/plugins/fallback.scss' )
  styles.use()
  screen.lock( true )

  this.destroy = () => {
    styles.unuse()
    screen.lock( false )
  }
}
