console.log("Hello")
const GITHUB_URL= "https://api.github.com/users/shubham225411"

const user= fetch(GITHUB_URL);// fetch will return a promise object

user.then(function(data){
    console.log(data.body);
})