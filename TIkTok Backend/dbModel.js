import mongoose from 'mongoose'

const tiktokSchema=mongoose.Schema({
    url:String,
    channel:String,
    song: String,
    likes: Number,
    messages: String,
    description: String,
    shares: String,
})

export default mongoose.model('posts',tiktokSchema)