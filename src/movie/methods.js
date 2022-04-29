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
        console.log("Successfully deleted");
    } catch (error) {
        console.log(error)
    }
}
exports.updateMovie = async ( oldEntry, newEntry, entryType ) => {
    try {
        if (entryType == "title") {
            await Movie.updateOne(
                { title: oldEntry },
                { title: newEntry }
            );
            return `The ${entryType} of ${oldEntry} updated to ${newEntry}`;
        } else if (entryType == "actor") {
            await Movie.updateOne(
                { actor: oldEntry },
                { actor: newEntry }
            );
            return `The ${entryType} of ${oldEntry} updated to ${newEntry}`;
        }
    } catch (error) {
        console.log(error);
    }
};

//NOT WORKING

exports.findTitle = async (movieObj) => {
    try{
        return await Movie.find({title:movieObj.title})
    } catch (error) {
        console.log(error)
    }
}

exports.findActor = async (movieObj) => {
    try{
        return await Movie.find({actor:movieObj.actor})
    } catch (error) {
        console.log(error)
    }
}
