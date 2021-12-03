const {prompt} = require("promptly"); // can import any function in the module by deconstructing?
const axios = require("axios");

const baseUrl = "https://swapi.dev/api/";

prompt("What category of Star Wars entities would you like to view?")
    .then((catResult) => {
        console.log(catResult);
        // add category to url at end
        const newUrl = `${baseUrl}${catResult}`;
        axios.get(newUrl)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err))



// let user = {};

// Can add additional promptly promises inside each then block to keep running items one
// after another.  
// promptly
//     .prompt("What is your first name?")
//         .then((firstName) => {
//             // super easy to create new key value pairs using dot notation for the user object
//             user.firstName = firstName;
//             console.log(`First name equals ${user.firstName}`)
//             // Begin second Promise
//     promptly
//         .prompt("What is your last name?")
//             .then((lastName) => {
//                 user.lastName = lastName;
//                 console.log(`User's name is ${user.firstName} ${user.lastName}`);
//                 // Now for the 3rd promise
//                     promptly.prompt("What is your age?")
//                         .then((age) => {
//                             user.age = age;
//                             console.log(`User's info is \nFirst Name : ${user.firstName} \nLast Name : ${user.lastName} \nage : ${user.age}`);
//                             console.log(user);
//         })
//         .catch((err) => console.log(err));
//         })
//         .catch((err) => console.log(err));
//     })
//     .catch((err) => console.log(err));
    // promptly is asynchronous so these will run before you can type since it's waiting on your input
    // console.log("Gets here")
    // console.log("User obj: ", user);
    
    // promptly.prompt("What is your age?")
    //     .then((age) => {
    //         user.age = age;
    //         console.log(`User's age is ${user.age}`);
    //     })
    //     .catch((err) => console.log(err));
