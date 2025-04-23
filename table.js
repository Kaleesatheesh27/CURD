var userForm=document.getElementById("userForm")
userForm.addEventListener("submit",function(e){
e.preventDefault();
var form=new FormData(userForm)
var user={
    name:form.get("username"),
    email:form.get("email"),
    age:form.get("age"),
    dep:form.getAll("department"),
    gender:form.get("gen")

}
// console.log(user.gender)
const second=document.querySelector("#second");
const row=second.insertRow();
row.innerHTML=`
<td>${user.name}</td>
<td>${user.email}</td>
<td>${user.age}</td>
<td>${user.dep}</td>
<td>${user.gender}</td>
<td>
<button onclick="btn(this)">delete</button></td>`;

userForm.reset()

 

})
function btn(button){
    button.parentNode.parentNode.remove()
}


