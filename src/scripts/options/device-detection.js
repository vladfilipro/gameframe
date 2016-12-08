/**
 * Determine the mobile operating system.
 * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
 *
 * @returns {String}
 */
export function getDevice () {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera

      // Windows Phone must come first because its UA also contains 'Android'
  if ( /windows phone/i.test( userAgent ) ) {
    return 'wp'
  }

  if ( /android/i.test( userAgent ) ) {
    return 'android'
  }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if ( /iPad|iPhone|iPod/.test( userAgent ) && !window.MSStream ) {
    return 'ios'
  }

  return 'desktop'
}
