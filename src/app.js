//npm init -y (to initialise npm liabry)
//npm i mongoose (too install mongoose)
/*npm i --save-dev nodemon (not done on this project but is basically
    doing the same thing as- await mongoose.disconnect()) -but it saves you from writing this in the code
    you need to add this too your package json aswell though*/

require('./db/connection');
const { default: mongoose } = require('mongoose');
const yargs = require('yargs');
const {addMovie, listMovie, deleteMovie, updateMovie, findTitle, findActor} = require ('./movie/methods')

const app = async (yargsObj) => {
    try{
        if (yargsObj.add) {
            //add movie function that takes yargsObj terminal input
            await addMovie({title: yargsObj.title, actor: yargsObj.actor});
            console.log(`Successfully added ${yargsObj.title}`)

        }else if (yargsObj.list) {
            console.log(await listMovie());

        }else if (yargsObj.update) {
            console.log(await updateMovie(yargsObj.oldEntry, yargsObj.newEntry, yargsObj.entryType));;
        }else if (yargsObj.find) {
            console.log (await findTitle({title: yargsObj.title}))
            console.log(await findActor({actor: yargsObj.actor}))

        }else if (yargsObj.delete) {
            await deleteMovie({title: yargsObj.title})
        }else {
            console.log('incorrect command')
        }
        await mongoose.disconnect()
    }catch (error) {
        console.log(error);
        
        await mongoose.disconnect() //this ensures that terminal is refreshed after every entry, can put this after all console logs or returns
    }

};

app(yargs.argv);

//node src/app.js --add --title='The Titanic' --actor='Leonardo Decaprio' WORKING
//node src/app.js --list WORKING
//node src/app.js --delete --title='Mrs Doubtfire' --actor='Robin Williams' WORKING 
//node src/app.js --update --entryType="title" --oldEntry="Spiderm" --newEntry="Spiderman" WORKING
//node src/app.js --find --title='The Titanic' WORKING
