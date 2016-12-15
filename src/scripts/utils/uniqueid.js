'use strict'

export let uId = () => {
  return ( new Date() ).getTime() + '' + Math.floor( Math.random() * 10000000 )
}
