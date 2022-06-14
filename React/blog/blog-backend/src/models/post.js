import mongoose from "mongoose";

const {Schema} = mongoose;

const PostSchema = new Schema({
    title : String,
    body : String,
    tags : [String],
    publishedDate : {
        type : Date,
        default : Date.now
    }

})


const Post = mongoose.model('Post', PostSchema);  // 모델 만들어주는 함수. 스키마 이름과 객체


export default Post;