// call our methods via sdk

import Typicode from "@jowamus/typescript-sdk";

const client = new Typicode({
    apikey: "123",
})

// client.getPosts().then((p) => {
//     console.log(p);
// })
client.getPostById(1).then((p) => {
    console.log(p);
})

// client 
//   .createPost({
//     title: "New Post",
//     body: "This is a new post",
//     userId: 1,
// })
// .then((p) => {
//     console.log(`New Post is created with ${p.id}`)
// })