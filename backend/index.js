require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("hello")
})
app.use('/api', router);



mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT} and connected to MongoDB`);
    });
}).catch((error) => {
    console.log(error);
});