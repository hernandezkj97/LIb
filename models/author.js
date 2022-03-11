//mongoose schema object
const mongoose=requiere('mongoose')
const authorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,

    }
})
