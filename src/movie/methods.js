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

exports.updateMovie = async (movieObj) => {
    try{
        console.log("Movie Updated")
        let updateList = await updateOne(
            {title: movieObj.title},
            {newTitle: movieObj.newTitle}
        );
        console.log(updateList)
    } catch (error) {
        console.log("updateMovies fail")
    }
}

//const res = await Person.updateOne({ name: 'Jean-Luc Picard' }, { ship: 'USS Enterprise' });


