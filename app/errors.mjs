import { readFile } from 'fs'

readFile(new URL('app.mj', import.meta.url), 'utf-8', (err, data) => {
  if (err) {
    // console.error(err)
    // exit with a code of 1
    throw err
  } else {
    // do whatever you want with the data
  }
})
