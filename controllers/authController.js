import { User } from '../models/User.js'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

export const register = async (req, res) => {
    const { name, email, password, confirmpassword } = req.body

    !name || !email || !password && res.status(400).json({ msg: 'Missing information' })
    password !== confirmpassword && res.status(400).json({ msg: `Passwords don't match` })

    const userExists = await User.findOne({ email: email })
    userExists && res.status(400).json({ msg: 'E-mail already exists' })

    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)

    const user = new User({ name, email, password: passwordHash })

    try {
        await user.save()
        res.status(201).json({ msg: 'User created successfully' })
    } catch (error) {
        res.status(400).json({ msg: 'Something went wrong. User not created.' })        
    }

}