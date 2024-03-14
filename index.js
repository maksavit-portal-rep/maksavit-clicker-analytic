
import setButtonNameSchema from "./setButtonNameSchema.js"
import cors from 'cors'
import mongoose from 'mongoose'
import express from 'express'
import 'dotenv/config';

const app = express()

             

app.use(express.json())
app.use(cors({origin: '*'}))

const PORT = process.env.PORT  // Добавленная строка


app.post('/setButtonName', async (req, res) => {
    try {
        const {buttonName} = req.body
        const post = await setButtonNameSchema.create({buttonName})
        res.json(post)
    }

    catch (e) {
            res.status(500).json(e)
    }
    
})



async function startApp() {
    try {
        // Подключение к базе данных
        await mongoose.connect(process.env.DB_URL);


        app.listen(PORT, () => console.log(`'SERVER STARTED ON PORT '  ${PORT}`))

    } catch (e) {
        console.log('Ошибка:', e);
    } 
}

startApp()
