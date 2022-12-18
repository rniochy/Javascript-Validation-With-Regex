const useremail = document.getElementById("useremail");
const username = document.getElementById("username");
const submit = document.getElementById("submit");
const userpassword = document.getElementById("userpassword");

const REGEXUSERNAME = /\s/ig;
const REGEXUSEREMAIL = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.[a-z]?$/i;

function removeClass(node, className){
    node.removeAttribute('class');
    node.setAttribute('class', className);
}
function main(){
    useremail.addEventListener("change", (e)=>{
        const uEmail = e.target.value;

        if(`${uEmail}`.match(REGEXUSERNAME)){
                removeClass(useremail ,"invalidInput");
        } else {
            removeClass(useremail ,"validInput");
        }

    })
    username.addEventListener("change", (e)=>{
        const uName = e.target.value;

        if(`${uName}`.match(REGEXUSERNAME)){
                removeClass(username ,"invalidInput");
        } else {
            removeClass(username ,"validInput");
        }
    })
    userpassword.addEventListener("change", (e)=>{
          
    })
        
}

main();