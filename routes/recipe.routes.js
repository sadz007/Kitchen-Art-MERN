const express = require('express')
const router = express.Router()
const Recipe = require('../models/recipe.model')
const multer = require('multer');
// const Upload = multer({ dest:'uploads/' })



// const ImageController = require('../controllers/image.controller');
const RecipeController = require('../controllers/recipe.controller')



    module.exports = (app)=>{
        app.post('/api/recipe',RecipeController.create)

        app.get('/api/recipe',RecipeController.getAll)
        // app.post('/api/recipe/add',RecipeController.create)
        app.get('/api/recipe/:id',RecipeController.getOne)

        app.put('/api/recipe/:id',RecipeController.update)

        app.delete('/api/recipe/:id',RecipeController.delete)

    }
