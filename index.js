const userName = document.getElementById("input")
const submitBtn = document.getElementById("submit")
function sayHello(name) {
    const yourName = name.replace(/ /g , "_")
    return(`hello dear ${yourName.toLocaleUpperCase()}!`)
}
submitBtn.addEventListener("click", () =>{
    const greetingTag = document.createElement("h2")
    greetingTag.innerHTML=sayHello(userName.value)
    greetingTag.style.color = "orange"
    document.body.appendChild(greetingTag)
})