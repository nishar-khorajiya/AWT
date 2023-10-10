console.log("welcome to callback concept")

function loginuser(email,password,callback){
    setTimeout(()=>{
        console.log("data from login user");
        // return {userEmail:email}
        callback({userEmail:email})
    },5000)
}

const user1=loginuser("tes@example.com",123456,user1=>{
    console.log(user1)
})

// const user1=loginuser("test@example.com",123456)
// console.log(user1)