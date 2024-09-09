import express from "express"
import dotenv from "dotenv"

import { sequelize } from "./models"

const app = express()
const PORT = process.env.PORT || 5000


sequelize.sync().then(()=>{
    app.listen(PORT, () =>{
        console.log(`Server is running in port ${PORT}. `);
    })
})