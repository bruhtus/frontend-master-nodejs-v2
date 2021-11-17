const { getNewUser, mapObjectToArray } = require('./utils')

describe('mapObjectToArray()', () => {
  test('map values to array using callback', () => {
    const result = mapObjectToArray(
      { age: 30, height: 69 }, (key, value) => {
        return value + 10
      })

      expect(result).toEqual([40, 79])
  })

  test('check callback get called', () => {
    const mockCallback = jest.fn()
    const result = mapObjectToArray({ age: 30, height: 69 }, mockCallback)

    expect(mockCallback.mock.calls.length).toBe(2)
  })
})

// asynchronous test
describe('getNewUser()', () => {
  test('it gets user', async () => {
    const user = await getNewUser(1)
    expect(user).toBeTruthy()
    expect(user.id).toBe(1)
  })

  test('no user found', async () => {
    // expected to error out
    // if there's no error, then test will failed
    expect.assertions(1)

    try {
      const user = await getNewUser(69)
    } catch (e) {
      expect(e).toBeTruthy()
    }
  })
})
