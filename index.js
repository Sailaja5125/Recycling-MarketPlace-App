import app from "./app.js";
import { connect } from "./database/db.js";
import dotenv from "dotenv";

dotenv.config({
    path: "./.env"
})

connect().then(()=>{
 try {
       const port=process.env.PORT||8800
       app.listen(port,()=>{
           console.log(`http://localhost:${port}`)
       })
 } catch (error) {
    console.log("Somthing wrong with the database connection",error)
 }
}
)