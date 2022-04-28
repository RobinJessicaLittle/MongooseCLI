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

exports.updateMovie = async (title, newTitle) => {
    try{
        let updateList = await collection.updateOne(title, {$set : {title: newTitle}} )
        console.log(updateList)
    } catch (error) {
        console.log("update Movie fail")
    }
}




