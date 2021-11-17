const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
const users = [{
  email: 'goku@test.com',
  id: 1,
  name: 'Goku',
  verified: false
}]

const getNewUser = async id => {
  await delay(100)
  const user = users.find(u => u.id === id)

  if (!user) throw new Error('User does not exist')
  return user
}

const mapObjectToArray = (object, callback) => {
  const results = []

  for (const [key, value] of Object.entries(object)) {
    results.push(callback(key, value, object))
  }

  return results
}

module.exports = { getNewUser, mapObjectToArray }
