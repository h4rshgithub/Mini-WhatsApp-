const mongoose = require("mongoose");
const Chat = require("./models/chat.js");


main()
.then(() => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}
let allChats  = [ 
  {
    from : "Harsh",
    to : "Manish",
    msg : "send me your sheet",
    created_at : new Date()
   },
   {
    from : "Manish",
    to : "mayank",
    msg : "send me your class routine",
    created_at : new Date()
   },
   {
    from : "krish",
    to : "harshul",
    msg : "Hello bro !",
    created_at : new Date()
   },
   {
    from : "Hemant ",
    to : "Kalasuar",
    msg : "WhatsUp brother",
    created_at : new Date()
   },
]
Chat.insertMany(allChats);
