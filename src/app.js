require('./db/connection');
const { default: mongoose } = require('mongoose');
const yargs = require('yargs');
const {addMovie} = require ('./movie/methods')

const app = async (yargsObj) => {
    try{
        if (yargsObj.add) {
            //add movie function that takes yargsObj terminal input
            await addMovie({title: yargsObj.title, actor: yargsObj.actor});
            console.log('successfully added')
        }else if (yargsObj.list) {
            //list movies from database
        }else if (yargsObj.update) {
            //update movies with filterObj and updateObj
        }else if (yargsObj.delete) {
            //delete movie with filterOBj
        }else {
            console.log('incorrect command')
        }
        await mongoose.disconnect()
    }catch (error) {
        console.log(error);
        //this ensures that terminal is refreshed after every entry, can put this after all console logs or returns
        await mongoose.disconnect()
    }

};

app(yargs.argv);