require('dotenv').config()
const PORT = 3000
const express = require('express')
const recipeRouter = require('./routes/recipeRouter')
const userRouter = require('./routes/userRouter')

const connectDatabase = require('./db/connect')

const app = express()

app.use(express.json())

connectDatabase()

//Router for recipes
app.use('/api/recipe', recipeRouter)

//Router for users
app.use('/api/user', userRouter)


app.listen(PORT, () => {
    console.log(`Servidor ejecutandose en http://localhost:${PORT}`)
})