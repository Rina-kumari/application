const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require("cors");

app.get("/", (req, res) => {
    res.send("hello from node")
})

// db connect
mongoose.connect('mongodb://localhost/assignmentPortfolio',
 {useNewUrlParser: true,
  useUnifiedTopology: true }
 )
 .then(()=>console.log('DB connected'))

 app.use(express.json());
 app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        next();
   // if (req.method === 'OPTIONS') {
     //   res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
       // return res.status(200).json({});
   // }
})


const ProfileRoute = require("./Route/ProfileRoute");
const ContactFormRoute = require("./Route/ContactFormRoute");

app.use("/", ProfileRoute);
app.use("/",ContactFormRoute);


const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})