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
        } else if (info == "date") {
            await Movie.updateOne(
                { date: oldEntry },
                { date: newEntry }
            );
            return `Updated movie ${entryType} - ${oldEntry} to ${newEntry}`;
        }
    } catch (error) {
        console.log(error);
    }
};
// exports.updateMovie = async (movieObj) => {
//     try{
//         console.log("Movie Updated")
//         let updateList = await updateOne(
//             {title: movieObj.title},
//             {newTitle: movieObj.newTitle}
//         );
//         console.log(updateList)
//     } catch (error) {
//         console.log("updateMovies fail")
//     }
// }




