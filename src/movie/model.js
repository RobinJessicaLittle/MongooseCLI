//The scheme basically just defines what your data will look like

const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        Capitalisation:true, 
    },
    newTitle: {
        type: String,
        type: String,
        default: 'Not specified',
        Capitalisation: true, 
    },
    actor: {
        type: String,
        default: 'Not specified',
        Capitalisation: true, 
    },
    // rating: {
    //     type: Number,
    // }
    //Below adds a new object of series
    // series: mongoose.SchemaTypes.ObjectID,
    // name: { 
    //     type: String,
    //     required: true,
    //     unique: true,},
    // actor: {
    //     type: String,
    //     default: 'Not specified'
    // },
    

    
});

//this is a function that takes the data base data and passes it into the scheme
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;