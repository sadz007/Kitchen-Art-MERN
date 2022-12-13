const Recipe = require('../models/recipe.model');
// const multer = require('multer');
// const User = require('../models/user.model');




// const storage = multer.diskStorage({
//     destination:(request, file, cb)=> {
//         cb(null, "/client/public/uploads")
//     },
//     filename:(request,file,cb)=>{
//         cb(null, file.originalname)
//     }

// })

// const Upload = multer({storage : storage})

const RecipeController = {
    

    create:(request, response)=>{
        // const imageUrl = request.file.path
        
        // const recipename = request.body.recipename
        // const portion = request.body.portion
        // const difficulty = request.body.difficulty
        // const ingredients = request.body.ingredients
        // const time = request.body.time
        // const instruction = request.body.instruction
        // const utensils = request.body.utensils
        // const type = request.body.type
        // console.log(request.body,request.file)
        Recipe.create(request.body)

            .then((addRecipe)=>{
                response.status(201).json(addRecipe)
                
            })

            .catch((error)=>{
                response.status(400).json(error)
            
            })
    },




    getAll:(request, response)=>{
        console.log(request.body)
        Recipe.find({})
            .then((allRecipes)=>{
                response.status(201).json(allRecipes)
            })
            .catch((error)=>{
                response.status(400).json(error)
            })
    },



    getOne:(request, response)=>{
        Recipe.findOne({_id: request.params.id})
            .then((oneRecipe)=>{
                response.status(201).json(oneRecipe)
            })
            .catch((error)=>{
                response.status(400).json(error)
            })
    },


    update:(request, response)=>{
        // const imageUrl = request.file.path
        // const recipename = request.body.recipename
        // const portion = request.body.portion
        // const difficulty = request.body.difficulty
        // const ingredients = request.body.ingredients
        // const time = request.body.time
        // const instruction = request.body.instruction
        // const utensils = request.body.utensils
        // const type = request.body.type
        Recipe.findOneAndUpdate({_id: request.params.id},
            request.body,
            {
            new:true,
            runValidators: true
            })
            .then((editRecipe)=>{
                response.status(201).json(editRecipe)
                
            })
            
            .catch((error)=>{
                response.status(400).json(error)
            })
    },



    delete:(request, response)=>{
        Recipe.deleteOne({_id:request.params.id})
            .then((deleteRecipe)=>{
                response.status(201).json(deleteRecipe)
            })
            .catch((error)=>{
                response.status(400).json(error)
            })
    },

}

module.exports  = RecipeController

