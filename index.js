import 'dotenv/config'
import express from 'express'
import './database/conn.js'
import authRoute from './routes/authRoute.js'

const app = express()

app.get('/', (req, res) => {
    res.status(200).json({ msg: 'Welcome To My API' })
})

app.use(express.json())
app.use('/auth', authRoute)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running on http://localhost:${PORT}`))