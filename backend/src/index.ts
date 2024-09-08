import express from "express"
import dotenv from "dotenv";
import sequelize from "sequelize";

dotenv.config()
const app = express()

const PORT= process.env.PORT || 5000
app.listen(PORT, () =>{
    // sequelize.authenticate()
    console.log("Server is running on port " + PORT)
})