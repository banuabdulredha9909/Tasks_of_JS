// add image to the page
var image=document.createElement("img");
image.src="../img/Koala.jpg";
image.width=250;
image.height=250;

var src=document.getElementById("content");
src.appendChild(this.image);




let member={
    name:"ahmed",
    age:20,
    country:"Iraq",
    fulldetail:function()
    {
        return("The our new member is "+member.name+" and he was "+member.age+" years old "+" and he was from "+member.country );
    }


}
console.log(member.name + '\n' + member.age + '\n' +member.country+'\n'+member.fulldetail());

