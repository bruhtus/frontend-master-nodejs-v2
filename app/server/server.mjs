import express from 'express'
import bp from 'body-parser'
import morgan from 'morgan'

const app = express()

// if someone parses some data on a query string, it's gonna parse that for us
// and it basically just make sure that we can parse the query string
// and whatever is in the URL pretty easily
app.use(bp.urlencoded({extended: true}))
app.use(bp.json())
app.use(morgan('dev'))

const db = []

app.post('/todo', (request, response) => {
  const newTodo = {
    id: Date.now(),
    text: request.body.text
  }

  db.push(newTodo)
  response.json(newTodo)
})

app.get('/todo', (request, response) => {
  response.json(db)
})

app.listen(process.env.PORT, () => {
  console.log('Server on https://localhost:8000')
})
