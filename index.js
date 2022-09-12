const express = require('express')
const cors = require('cors')


//  Config DotEnv
require('dotenv').config()

const app = express()

/* Parsing Json Request Body */
app.use(express.json())

/* Allow All Cors */
app.use(cors({ origin: true }));


app.use("/", require("./routers/pushNotification"));

/* Start Server */
const PORT = process.env.PORT || 5555
const server = app.listen(PORT, () => {
    console.log(`Server Start At :${PORT}.`);
    console.log("RUNNING_MODE:", process.env.NODE_ENV);
})