'use strict'

export function fallback () {
  let styles = require( './../../styles/plugins/fallback.scss' )
  styles.use()

  this.destroy = () => {
    styles.unuse()
  }
}
