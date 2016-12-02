'use strict'

import { Frame } from './frame'

import { Desktop } from './screen/desktop'
import { Ios } from './screen/ios'

let Screen = function (config) {
    config = config || {}
    this.configuration = {
        device: config.device || 'desktop',
        allowLandscape: !!config.allowLandscape,
        allowPortrait: !!config.allowPortrait
    }

    this.body = window.document.getElementsByTagName('body')[0];
    this.body.classList.add(this.configuration.device)
    if (this.configuration.allowLandscape) {
        this.body.classList.add('allow-landscape');
    }
    if (this.configuration.allowPortrait) {
        this.body.classList.add('allow-portrait');
    }
    
    this.frame = new Frame();
    this.body.appendChild(this.frame.getElement())
    
    this.prevWidth = window.innerWidth;
    this.prevHeight = window.innerHeight;
    this.prevOrientation = this.getOrientation();
    
    switch (this.configuration.device) {
        case 'desktop':
            Desktop( this )
        case 'ios':
            Ios( this )
        break;
    }

}

Screen.prototype.createElement = function (type, classes, attrs) {
    let e = window.document.createElement(type)
    if (Array.isArray(classes)) {
        classes.forEach(function(value) {
            e.classList.add(value)
        })
    }
    if (typeof attrs === 'object') {
        Object.keys(attrs).forEach(function(value) {
            e.setAttribute(value, attrs[ value ])
        })
    }
    return e
}

const mouseMoveLockEvent = function(e) {
    e.preventDefault();
}

Screen.prototype.scrollLock = function (on) {
    if (on || on === undefined) {
        this.body.removeEventListener('touchmove', mouseMoveLockEvent, true)
        this.body.addEventListener('touchmove', mouseMoveLockEvent, true)
    } else {
        this.body.removeEventListener('touchmove', mouseMoveLockEvent, true)
    }
}

Screen.prototype.getOrientation = function () {
    return (window.innerWidth > window.innerHeight) ? 'landscape' : 'portrait'
}

export { Screen };