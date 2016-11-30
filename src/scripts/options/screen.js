'use strict'

module.exports = function() {
    const body = window.document.getElementsByTagName('body')[0]
    const extension = window.document.createElement('section')
    extension.classList.add('gameframe-extension')
    let overlay = window.document.createElement('section')
    overlay.classList.add('gameframe-overlay')
    body.appendChild(overlay)

    let timeout;
    window.document.addEventListener('scroll', function() {
        if ( timeout ) {
            clearTimeout(timeout);
        }
        overlay.style.display = 'block'
        timeout = setTimeout(() => {
            if (window.scrollY >= 50) {
                overlay.style.display = 'none'
            }
        }, 200);
    } )

    this.addExtension = () => {
        body.appendChild(extension)
    }
    this.removeExtension = () => {
        body.removeChild(extension)
    }
    this.addOverlay = (element) => {
        body.removeChild(overlay)
        overlay = element
        body.appendChild(overlay);
    }
}