'use strict';

export function Ios ( screen ) {

    screen.locked = screen.createElement( 'section', ['gameframe-locked'] );
    screen.locked.appendChild( screen.createElement('img', ['gameframe-locked-landscape'], {'src':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACthJREFUeNrs3T92E0ccwPEhcABzA3EC5BNY7tLhnAC5TGXoSEU4geEEFl1S2ZzAoqNDnIAt02G6pHJmnoZA+JMYeVczu/v5vDeP5OUF+f301vPV7koKAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK+7YQT0yDSunbhmRkFllnFdxLUyCgQAtLPhH8S1Z9OnZzHwMq4zQYAAgKubxHWUN/6JcdBzTQ6BZ/mfAfhMeoV/GtelZQ10nQZnsgD+9Yr/3OZgjWidO7tFDW4aAYWkm/ke5VdFfhkytuh9ENaXYNM9An8aCSW4B4AS0s19J/lPGLMUAIfBzYIIAEZgnjd/4KMUAQtjQAAwVCc5AIAvLXIIwFa4BwCbP9QhXRKbxPXCKBAA2PxBBIAAwOYPIgAEAPVLb3V6ZAywUQS8j+uVUdAVNwHSlVlYf+AJsLn9sP5uARAA9EL6kJ+3+U9gc01cu2H9TYPQqh+MgA4c2/yhFZN8PIEzAFRvFpz6h7a5FIAAoHqvg4/4hbaljwreNQba5BIAbZrb/KET0+DttDgDQMXSjX8TY4BONHHdMQacAaA2M5s/dGqSjzMQAFTlyAjAcUZ/uARAG9Jb/t4ZA2zF7eBzAXAGgEocGAE43hAAjM89IwDHG/3iEgBtSKf/ffIfbEc6/X/bGHAGgNKmNn/Yqp3g8zYQAFRgYgTguEMAMM4zAIDjDgHAyNw1AnDcIQAYH9f/wXGHAAAABAAAIAAAAAEAAAgAAEAAAACduWUE0EvLin4WHwcNAgDo2Cqun+JqKvqZ0uZ/HNfc0wP94RIA9Efa9Pcr2/yT9O10h3GdeYpAAADte5I321o99BSBAAC6OQPg5wMEAAAgAGDo7lf+8809RSAAgG422Fo32fRWwGNPEfSHtwFCv5zkMwHPQx3X3NNbAO959Q8CAOjeLC+AjbkEAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAEAAAgAAAAAQAACAAAQAAAAD1yywio0NIIGJiZESAA4P/tGwEDc2kE1MYlAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAABfumUEVOhXIwAQAIzPYyMA6JZLAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAoF2+DAiGr4lrGdebuFaf/beduKZx7cU1MyoQAED/LeJ6njf//3L2SQzM4zqKa2J8MGwuAcDwpA3/TlyHV9j8P3UR19P8/z7M/w4IAKAH0sa9H9an/a8jhcBu+PKSASAAgIpc5I3/aYt/Z5P/zoXxggAA6pQ26mVHYZEuJZwZMQgAoC5pg14N4DEAAQBcUXplvtjC43w4EwAIAKCwbW/K6QzAE2MHAQCU9Sxs/616T4O3B4IAAIpaFHjMi+BdASAAgGLStf+m0GM/N34QAEAZLws+9iq4DAACACi2CZe09BSAAADGtwG/8RSAAAAABAAAIAAAAAEAAAgAYDOzwo9/11MAAgDYvunIAwQQADBKe4XjY8dTAAIA2L6DgpvwfeMHAQA+EracBwUeM0XH3OgddwgA8Ilw5RwVOAvwIDj977hDAEAo/5n0Y5Y24pMtPl669v/Y2B13CABIGiMoKt0LMB9gbOC4o2M3jIAWvAtOC5e22/GrwpPg2n8t0vX/28aAMwDUYGkExZ2H7j4bwObveEMAwFe9MILi0hmY16HddwZM8t9p83e8AXxz87m0qlnnefO+jhQS78yyyuVyG1CVU7+Yq1vp1P33XBb48B7/t2ZX7Tr1q4a2uAmQtszyK0/q08R1FtbvHW++8dylL/c5MKrq7Qf3ACAAqFB65TgxBugs5O4YA21xEyBtemIE4PjCGQDGKd01PjUGaFX6jIddY8AZAGr20AjAcUX9bhoBLWvC+j4AZwGgHYu4nhkDbXMJgC58+FCaiVHAtYM6nfr39b+0ziUAupB+WR0aA1zboc2frrgEQJevXN7H9aNRwEbSdf/fjAEBQB+9Cu4HgE0s4vrFGBAA9NkLEQDfvfm7hIYAQASAzR8EACIAbP7QAm8DZNvmYf0tdcBHhzkAQAAwaNPw/V9VC0O0ypv/yijYNpcAKOGPuH6P66+w/ipaGKP05T4/h69/RTPA4E3iOo/r0rJGss6DT8kE+Ec6E3Bqc7AGvE6d8aIm7gGgxjMCR3EdeJXEADRxnYX1l/k0xoEAgKuZ5hDY88qJHlnG9TJv/G7uQwBAS0GwIwaodNO/sOEDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAD9LcAAk6xDWF7Ts78AAAAASUVORK5CYII='}) )
    screen.locked.appendChild( screen.createElement('img', ['gameframe-locked-portrait'], {'src':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACthJREFUeNrs3T92E0ccwPEhcABzA3EC5BNY7tLhnAC5TGXoSEU4geEEFl1S2ZzAoqNDnIAt02G6pHJmnoZA+JMYeVczu/v5vDeP5OUF+f301vPV7koKAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgK+7YQT0yDSunbhmRkFllnFdxLUyCgQAtLPhH8S1Z9OnZzHwMq4zQYAAgKubxHWUN/6JcdBzTQ6BZ/mfAfhMeoV/GtelZQ10nQZnsgD+9Yr/3OZgjWidO7tFDW4aAYWkm/ke5VdFfhkytuh9ENaXYNM9An8aCSW4B4AS0s19J/lPGLMUAIfBzYIIAEZgnjd/4KMUAQtjQAAwVCc5AIAvLXIIwFa4BwCbP9QhXRKbxPXCKBAA2PxBBIAAwOYPIgAEAPVLb3V6ZAywUQS8j+uVUdAVNwHSlVlYf+AJsLn9sP5uARAA9EL6kJ+3+U9gc01cu2H9TYPQqh+MgA4c2/yhFZN8PIEzAFRvFpz6h7a5FIAAoHqvg4/4hbaljwreNQba5BIAbZrb/KET0+DttDgDQMXSjX8TY4BONHHdMQacAaA2M5s/dGqSjzMQAFTlyAjAcUZ/uARAG9Jb/t4ZA2zF7eBzAXAGgEocGAE43hAAjM89IwDHG/3iEgBtSKf/ffIfbEc6/X/bGHAGgNKmNn/Yqp3g8zYQAFRgYgTguEMAMM4zAIDjDgHAyNw1AnDcIQAYH9f/wXGHAAAABAAAIAAAAAEAAAgAAEAAAACduWUE0EvLin4WHwcNAgDo2Cqun+JqKvqZ0uZ/HNfc0wP94RIA9Efa9Pcr2/yT9O10h3GdeYpAAADte5I321o99BSBAAC6OQPg5wMEAAAgAGDo7lf+8809RSAAgG422Fo32fRWwGNPEfSHtwFCv5zkMwHPQx3X3NNbAO959Q8CAOjeLC+AjbkEAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAEAAAgAAAAAQAACAAAQAAAAD1yywio0NIIGJiZESAA4P/tGwEDc2kE1MYlAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAABAAAAAAgAAEAAAgAAAAAQAACAAAAABAAAIAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAAACAAAQAACAAAAABAAAIAAAAAEAAAgAAEAAAABfumUEVOhXIwAQAIzPYyMA6JZLAAAgAAAAAQAACAAAQAAAAAIAABAAAIAAAAAEAAAgAAAAAQAACAAAoF2+DAiGr4lrGdebuFaf/beduKZx7cU1MyoQAED/LeJ6njf//3L2SQzM4zqKa2J8MGwuAcDwpA3/TlyHV9j8P3UR19P8/z7M/w4IAKAH0sa9H9an/a8jhcBu+PKSASAAgIpc5I3/aYt/Z5P/zoXxggAA6pQ26mVHYZEuJZwZMQgAoC5pg14N4DEAAQBcUXplvtjC43w4EwAIAKCwbW/K6QzAE2MHAQCU9Sxs/616T4O3B4IAAIpaFHjMi+BdASAAgGLStf+m0GM/N34QAEAZLws+9iq4DAACACi2CZe09BSAAADGtwG/8RSAAAAABAAAIAAAAAEAAAgAYDOzwo9/11MAAgDYvunIAwQQADBKe4XjY8dTAAIA2L6DgpvwfeMHAQA+EracBwUeM0XH3OgddwgA8Ilw5RwVOAvwIDj977hDAEAo/5n0Y5Y24pMtPl669v/Y2B13CABIGiMoKt0LMB9gbOC4o2M3jIAWvAtOC5e22/GrwpPg2n8t0vX/28aAMwDUYGkExZ2H7j4bwObveEMAwFe9MILi0hmY16HddwZM8t9p83e8AXxz87m0qlnnefO+jhQS78yyyuVyG1CVU7+Yq1vp1P33XBb48B7/t2ZX7Tr1q4a2uAmQtszyK0/q08R1FtbvHW++8dylL/c5MKrq7Qf3ACAAqFB65TgxBugs5O4YA21xEyBtemIE4PjCGQDGKd01PjUGaFX6jIddY8AZAGr20AjAcUX9bhoBLWvC+j4AZwGgHYu4nhkDbXMJgC58+FCaiVHAtYM6nfr39b+0ziUAupB+WR0aA1zboc2frrgEQJevXN7H9aNRwEbSdf/fjAEBQB+9Cu4HgE0s4vrFGBAA9NkLEQDfvfm7hIYAQASAzR8EACIAbP7QAm8DZNvmYf0tdcBHhzkAQAAwaNPw/V9VC0O0ypv/yijYNpcAKOGPuH6P66+w/ipaGKP05T4/h69/RTPA4E3iOo/r0rJGss6DT8kE+Ec6E3Bqc7AGvE6d8aIm7gGgxjMCR3EdeJXEADRxnYX1l/k0xoEAgKuZ5hDY88qJHlnG9TJv/G7uQwBAS0GwIwaodNO/sOEDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAD9LcAAk6xDWF7Ts78AAAAASUVORK5CYII='}) )
    screen.body.appendChild( screen.locked )

    screen.overlay = screen.createElement( 'section', ['gameframe-overlay'] );
    screen.body.appendChild( screen.overlay )
        
    screen.showOverlay = function (on) {
        if (on || on === undefined) {
            screen.overlay.style.display = 'block';
            screen.scrollLock(false);
        } else {
            screen.overlay.style.display = 'none';
            screen.scrollLock(true);
        }
    }

    window.addEventListener('resize', function() {

        // If the user scrolls to the point where bars disappear
        if (screen.prevOrientation === screen.getOrientation() && screen.prevHeight < window.innerHeight) {
            screen.showOverlay(false)
        }
        // If the user gives bars visibility
        if (screen.prevOrientation === screen.getOrientation() && screen.prevHeight > window.innerHeight) {
            screen.showOverlay(true)
        }

        // Because rotation into portrait will always show bars
        if (screen.prevOrientation !== screen.getOrientation() && screen.getOrientation() === 'portrait') {
            screen.showOverlay(true)
        }
        // Because rotation into landscape will always hide bars
        if (screen.prevOrientation !== screen.getOrientation() && screen.getOrientation() === 'landscape') {
            screen.showOverlay(false)
        }
        
        if (!screen.configuration.allowLandscape && screen.getOrientation() === 'landscape') {
            screen.showOverlay(false)
        }
        if (!screen.configuration.allowPortrait && screen.getOrientation() === 'portrait') {
            screen.showOverlay(false)
        }
        
        screen.prevWidth = window.innerWidth;
        screen.prevHeight = window.innerHeight;
        screen.prevOrientation = screen.getOrientation();
    })
    
    return screen;
    
}