const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema(
    {
        recipename:{
            type: String,
            required:[true,'Name Your Recipe...'],

        },
        portion:{
            type: Number,
            required:[true,'Tell us portion size...'],

            
        },

        difficulty:{
            type: String,
            

        },

        time:{
            type: String,
            required: [true,'Time is required!']
        },

        ingredients:{
            type: String,
            required:[true,"Must Provide ingredients"],
            minLength:[10,'Min 10 words'],
            autoCapilaize:true,
            
        },
        instruction:{
            type: String,
            required:[true,"Must Provide instructions For the recipe"],
            minLength:[10,'Min 10 words']
            
        },

        utensils:{
            type: String,
            required:[true,"Tell us what tools we need..."],
        },
        type:{
            type: String,
            required:[true, 'Recipe Type required'],
            
        },
        // imageUrl:{
        //     type: String,            
        //     required: [true,'Upload Your Image..']

        // }

},{timestamps:true }
);

const Recipe = mongoose.model('Recipe', RecipeSchema)

module.exports = Recipe;