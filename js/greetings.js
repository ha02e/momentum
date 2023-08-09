const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const link = document.querySelector("a");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
    
    /* //유효성검사
    if(username === ""){ //입력하지 않았을 경우
        alert("이름을 입력해주세요.");
    }else if(username.length > 15){ //username이 15글자를 초과한다면
        alert("이름이 너무 깁니다. 확인해주세요.");
    }
    */
    //console.log(loginInput.value);
}

function paintGreetings(username){
    greeting.innerText = `안녕하세요. ${username}님`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    //form 보여줌
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit); //이벤트가 발생했을 때만 onLoginsubmit을 호출한다.
}else{
    //greeting 보여줌(form 사라짐)
    paintGreetings(savedUsername);
}