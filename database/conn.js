import mongoose from 'mongoose'

try {
    mongoose.connect(process.env.DB_URL)
    console.log('Connected to Database!')
} catch (error) {
    console.log(`Error connecting to Database | Error: ${error}`)
}