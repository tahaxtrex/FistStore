import express from "express";
const app = express();
import cors from "cors";
import "./mongo.js";
import router from "./routes/productRoutes.js";


app.use(express.json());
app.use(cors()); 
app.use("/products", router)

app.get('/' , (req,res)=>{
  res.send("serevr is ready")
})



app.listen(8001, ()=>{
  console.log("serever started at http://localhost:8001")
})