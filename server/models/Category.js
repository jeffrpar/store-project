// ----------------------------------------------------------------
// Dependencies

const { Schema, model } = require('mongoose');

// ----------------------------------------------------------------
// Category Schema

const categorySchema = new Schema (

    {
        category: {
            type: String,
            required: true
        }
    }

);


// Creates the Category model using the userSchema
const Category = model('Category', categorySchema);

// ----------------------------------------------------------------
module.exports = Category;