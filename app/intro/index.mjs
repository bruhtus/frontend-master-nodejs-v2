import { readFile, writeFile } from 'fs/promises'

// console.log(import.meta.url)

// wait until this function finish
let template = await readFile(new URL('template.html', import.meta.url), 'utf-8')

const data = {
  title: 'learn node.js',
  body: 'this is the final html'
}

for (const [key, value] of Object.entries(data)) {
  template = template.replace(`{${key}}`, value)
}

// wait until this function finish
await writeFile(new URL('index.html', import.meta.url), template)
