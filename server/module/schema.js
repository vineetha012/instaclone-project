const mongoose= require("mongoose")

// mongoose.connect("")
mongoose.connect("mongodb+srv://vineetha:pin6VifgBDyoKGed@cluster0.9kn9ayx.mongodb.net/main/?retryWrites=true&w=majority")
.then(()=>{
    console.log("Sucessfully connected with Database")
})
.catch((error)=>{
    console.log(error)
})

const schema = mongoose.Schema
const userSchema= new schema({
    image:{type:String},
    name:{type:String,required:true},
    location:{type:String,required:true},
    description:{type:String}
})
let InstaUser=mongoose.model("instaUser",userSchema)

module.exports=InstaUser
//mongodb+srv://lakhichan007:12345@cluster0.9vdu0wz.mongodb.net/?retryWrites=true&w=majority