const useremail = document.getElementById("useremail");
const username = document.getElementById("username");
const submit = document.getElementById("submit");
const userpassword = document.getElementById("userpassword");

function main(){
    useremail.addEventListener("change", (e)=>{
        const uName = e.target.value;

        if(uName.match(/\s/ig)) alert();
    })
    username.addEventListener("change", (e)=>{
          console.log(e.target.value)
    })
    userpassword.addEventListener("change", (e)=>{
          console.log(e.target.value)
    })
        
}

main();