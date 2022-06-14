import Post from "./models/post";


export default function createFakeData(){
    const posts = [...Array(40).keys()].map(i => {
        return ( 
            {
                title : `포스트 #${i}`,
                body : `Nulla consectetur excepteur cillum sunt proident elit exercitation do. Do deserunt aliqua consequat minim anim occaecat velit cillum aliquip magna esse. Tempor consequat exercitation tempor nostrud velit duis pariatur.

Magna excepteur anim qui veniam cupidatat irure ut aliqua magna labore exercitation adipisicing Lorem. Nostrud do irure consequat adipisicing in. Labore quis ipsum ex commodo qui in Lorem nostrud quis proident in sint exercitation. Occaecat esse do dolore ullamco duis. Eiusmod consequat nostrud tempor non mollit quis enim Lorem cillum velit cillum esse. Commodo esse ut sint Lorem eu eiusmod elit ex nisi.

Excepteur do sit adipisicing ex velit quis sunt enim sit consectetur duis commodo exercitation. Ipsum do dolor deserunt esse consequat esse exercitation mollit elit Lorem cillum. Quis nisi ipsum in cillum eiusmod consectetur enim consequat do veniam irure id laborum.`,
                tags : ['가짜', '데이터'],
            }
        )
    })

    Post.insertMany(posts, (err, docs) => {
        console.log(docs)
    })
}