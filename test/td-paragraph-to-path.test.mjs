/* global describe, it, beforeEach */

import { TdParagraphConverter } from '../src/index.mjs'

import assert from 'power-assert'
import { JSDOM } from 'jsdom'

describe('TdParagraphConverter', () => {
  let dom

  describe ('given http://example.com/diary/2021/0621/#p01', () => {
    beforeEach('', () => {
      dom = new JSDOM('', {
        url: 'http://example.com/diary/2021/0621/#p01'
      })
    })
    it('http://example.com/diary/2021/0621/01/', () => {
      assert.equal(
        (new TdParagraphConverter().convert(dom.window.location)),
        'http://example.com/diary/2021/0621/01/'
      )
    })
  })

  describe('given http://example.com/about/', () => {
    beforeEach('', () => {
      dom = new JSDOM('', {
        url: 'http://example.com/about/'
      })
    })
    it('thru', () => {
      assert.equal(
        (new TdParagraphConverter().convert(dom.window.location)),
        'http://example.com/about/'
      )
    })
  })
})
