import path from 'path'

/**
 * tDiary paragraph location converter
 */
class TdParagraphConverter {
  /**
   * @return {RegExp}
   */
  get PARAGRAPH_RE () {
    return /^#p[0-9]{2}$/
  }

  /**
   * @private
   * @param {Location} location
   * @return {string}
   */
  filename (location) {
    const pathname = location.pathname
    const paragprah = this.PARAGRAPH_RE.test(location.hash)
      ? location.hash
      : null

    const p = paragprah.replace(/[^0-9]/g, '')

    return path.join(path.basename(pathname, path.extname(pathname)), p) + '/'
  }

  /**
   * @param {Location} location
   * @return {string}
   */
  convert (location) {
    return this.PARAGRAPH_RE.test(location.hash)
      ? [
        location.origin,
        path.dirname(location.pathname),
        '/' + this.filename(location)
      ].join('')
      : location.toString()
  }
}

export { TdParagraphConverter }
