const palindromeChecker = require("./palindrome-checker")
const { assert } = require("chai")

describe("palindrome-checker", () => {
  it('"eye" should return a boolean.', () => {
    assert.isBoolean(palindromeChecker("eye"))
  })

  it('"eye" should return true.', () => {
    assert.isTrue(palindromeChecker("eye"))
  })

  it('"_eye" should return true.', () => {
    assert.isTrue(palindromeChecker("_eye"))
  })

  it('"race car" should return true.', () => {
    assert.isTrue(palindromeChecker("race car"))
  })

  it('"not a palindrome" should return false.', () => {
    assert.isFalse(palindromeChecker("not a palindrome"))
  })

  it('"A man, a plan, a canal. Panama" should return true.', () => {
    assert.isTrue(palindromeChecker("A man, a plan, a canal. Panama"))
  })

  it('"never odd or even" should return true.', () => {
    assert.isTrue(palindromeChecker("never odd or even"))
  })

  it('"nope" should return false.', () => {
    assert.isFalse(palindromeChecker("nope"))
  })

  it('"almostomla" should return false.', () => {
    assert.isFalse(palindromeChecker("almostomla"))
  })

  it('"My age is 0, 0 si ega ym." should return true.', () => {
    assert.isTrue(palindromeChecker("My age is 0, 0 si ega ym."))
  })

  it('"1 eye for of 1 eye." should return false.', () => {
    assert.isFalse(palindromeChecker("1 eye for of 1 eye."))
  })

  it('"0_0 (: /-\ : 0-0" should return true.', () => {
    assert.isTrue(palindromeChecker("0_0 (: /-\ : 0-0"))
  })

  it('"five|\_/|four" should return false.', () => {
    assert.isFalse(palindromeChecker("five|\_/|four"))
  })

})