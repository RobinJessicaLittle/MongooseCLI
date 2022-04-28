const Movie = require('./model');

exports.addMovie = async (movieObj) => {
    try{
        await Movie.create(movieObj);
    }catch (error){
        console.log(error);
    }
}

exports.listMovie = async () => {
    try {
        return await Movie.find({});
    } catch (error) {
        console.log(error);
    }
}

exports.deleteMovie = async (movieObj) => {
    console.log(movieObj);
    try {
        await Movie.deleteOne({movieObj});
        // keyname: parameter
        console.log("Successfully deleted");
    } catch (error) {
        console.log(error)
    }
}

