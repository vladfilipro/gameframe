'use strict'

import { Frame } from './frame'

const mouseMoveLockEvent = function(e) {
    e.preventDefault();
}
    
export class Screen {

    createElement (type, ...classes) {
        let e = window.document.createElement(type)
        e.classList.add(classes)
        return e
    }

    constructor () {
        this.body = window.document.getElementsByTagName('body')[0];
        this.frame = new Frame();
        this.body.appendChild(this.frame.getElement())
        
        this.prevWidth = window.innerWidth;
        this.prevHeight = window.innerHeight;
        this.prevOrientation = this.getOrientation();
    }

    scrollLock (on) {
        if (on || on === undefined) {
            this.body.removeEventListener('touchmove', mouseMoveLockEvent, true)
            this.body.addEventListener('touchmove', mouseMoveLockEvent, true)
        } else {
            this.body.removeEventListener('touchmove', mouseMoveLockEvent, true)
        }
    }

    getOrientation () {
        return (window.innerWidth > window.innerHeight) ? 'landscape' : 'portrait'
    }

}