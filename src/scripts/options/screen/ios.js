'use strict';

import { Screen } from './../screen';

export class Ios extends Screen {
    
    showOverlay (on) {
        if (on || on === undefined) {
            this.overlay.style.display = 'block';
            super.scrollLock(false);
        } else {
            this.overlay.style.display = 'none';
            super.scrollLock(true);
        }
    }

    constructor () {

        this.overlay = super.createElement('section','gameframe-overlay');
        this.body.appendChild(this.overlay)
        
        let parent = super
        let me = this
        
        window.addEventListener('resize', function() {
            
            // If the user scrolls to the point where bars disappear
            if (me.prevOrientation === parent.getOrientation() && me.prevHeight < window.innerHeight) {
                me.showOverlay(false)
            }
            // If the user gives bars visibility
            if (me.prevOrientation === parent.getOrientation() && me.prevHeight > window.innerHeight) {
                me.showOverlay(true)
            }
    
            // Because rotation into portrait will always show bars
            if (me.prevOrientation !== parent.getOrientation() && parent.getOrientation() === 'portrait') {
                me.showOverlay(true)
            }
            // Because rotation into landscape will always hide bars
            if (me.prevOrientation !== parent.getOrientation() && parent.getOrientation() === 'landscape') {
                me.showOverlay(false)
            }
            
            me.prevWidth = window.innerWidth;
            me.prevHeight = window.innerHeight;
            me.prevOrientation = parent.getOrientation();
        })   
        
    }
}