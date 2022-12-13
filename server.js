const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;

const Recipe = require('./models/recipe.model');
const multer = require('multer');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const signupRoutes = require('./routes/user.routes')
const loginRoutes = require('./routes/auth.routes')
const connectDB = require('./config/mongoose.config');
// Connect to Database
//Connect to the database before listening
let server = connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    })
})


app.use(cookieParser())


app.use(cors({
    origin: 'http://localhost:3000',
    // methods: "GET,POST,PUT,DELETE",
    credentials: true

}))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use('/uploads',express.static('uploads'))
app.use('/api/signup', signupRoutes)
app.use('/api/login', loginRoutes)
// app.use('/api/:id',loginRoutes)





require('./config/mongoose.config')

require('./routes/recipe.routes') (app)

require('dotenv').config()
const path = require('path')
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});






