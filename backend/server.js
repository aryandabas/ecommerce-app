import express from "express"
import cors from "cors"
import 'dotenv/config'
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/user.route.js";
import productRouter from "../backend/routes/product.route.js"


//App config 
const app = express();

const Port = process.env.PORT || 4000 ; 
connectDB();
connectCloudinary();


//middlewares
app.use(express.json());
app.use(cors());

//api end points 
// app.get('/' , (req, res)=>{
//     res.send("API working")
// });

app.use('/api/user' , userRouter);
app.use('/api/product' , productRouter); 


app.listen(Port , ()=>
    console.log('server started on port : ' + Port )
)
