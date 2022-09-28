 
 // add image to html page
 var image=document.createElement("img");
image.src="../img/Koala.jpg";
image.width=250;
image.height=250;

var src=document.getElementById("content");
src.appendChild(this.image); 


// the Homework

//1- create nested object
 let tourist=
{
name:"Ban Abdulredha",
hoppy:"traveling",
cities_visited:
{
    inside_country:
    {
        city1:"Kut",
        city2:"kirkuk",
        city3:"Arbil"
    },
    outside_country:
    {
        Asia_content:
        {
            city1:"Turkey",
            city2:"Iran",
            city3:"syria"
        },
        Europe_content:
        {
            city1:"spain",
            city2:"Melan",
            city3:"Roma",
            city4:"Canda",
            city5:"USA"

        }

    }

}

}

// 2- print the output

 console.log("My name is: "+tourist.name +" and l love "+tourist.hoppy+" so much" +'\n');
console.log("I live in Iraq and one of its cities are \n"+"* "+tourist.cities_visited.inside_country.city1,"\n*",tourist.cities_visited.inside_country.city2,"\n*",tourist.cities_visited.inside_country.city3);

console.log("******************"); 

 if(tourist.cities_visited.outside_country.Asia_content.city1===tourist.cities_visited.outside_country.Asia_content.city1)
{
    var x=tourist.cities_visited.outside_country.Asia_content.city1;
    if(tourist.cities_visited.outside_country.Europe_content.city3=== tourist.cities_visited.outside_country.Europe_content.city3)
    {
        var y=tourist.cities_visited.outside_country.Europe_content.city3;
        
    }
    else
    {
        var y=tourist.cities_visited.outside_country.Europe_content.city2;  
        
    }
}
else
{
    
    var x=tourist.cities_visited.outside_country.Asia_content.city3;
   
} 
console.log("The countries that I was visited which outside of my country are \n"+"* "+x+"\n* "+y);


 // 3- these functions to print the other result
  function OtherResult()
 {
    var z=[
        tourist.cities_visited.outside_country.Asia_content.city1,
        tourist.cities_visited.outside_country.Asia_content.city2
    ];
    console.log("The countries that I wasnot visited which outside of my country are \n\n"+"* "+"In Asia content \n");
    for(var i in z)
    {
        console.log("- "+z[i]);
        
    }
 }
 console.log(OtherResult());
 console.log("************************");
 console.log("\n* In Europe content ");
 
 
        var k={
        result:[
        {one:tourist.cities_visited.outside_country.Europe_content.city2},
        {one:tourist.cities_visited.outside_country.Europe_content.city3},
        {two:tourist.cities_visited.outside_country.Europe_content.city4},
        {two:tourist.cities_visited.outside_country.Europe_content.city5},
        
    ],
    display:function()
{
    return(console.table(k.result));
},
percent:function()
{
    var x=Object.keys(k.result).length;
    var p= (x /100);
    return("The percent of Outside countries that you visited is :"+p)
}

};
console.log(k.display());
console.log(k.percent());
