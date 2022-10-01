 // the Homework
let FoodsType=
{
Fruit: // first object
{
    //1- set values to this object directly
    Type1:"apple",
    Type2:"orange",
    Type3:"kawi"
},
Vegetables: // second object
{
    //2- set values to this object outside

}
,
Vetamins: //Third object
{
  //3- set values to this object by functions with parameters  
Vetamin1:"",
Vetamin2:"",
},

// functions to get values to vetamins element
set vet(vet1)
{
this.Vetamins.Vetamin1=vet1;

},
set vets(vet2)
{
    this.Vetamins.Vetamin2=vet2;
},
display:function()
{
    return("\t \t\t The Foods Types are:\n\n"+"- The Fruits are :\n"+"* "+FoodsType.Fruit.Type1+"\n* "+FoodsType.Fruit.Type2+"\n* "+FoodsType.Fruit.Type3+"\n\n- The Vegetables are :\n"+"* "+FoodsType.Vegetables.Type1+"\n* "+FoodsType.Vegetables.Type2+"\n* "+FoodsType.Vegetables.Type3+"\n\n- The vetamins are \n"+"* "+FoodsType.Vetamins.Vetamin1+"\n* "+FoodsType.Vetamins.Vetamin2);


}
} ;
// set values to vegetables object
FoodsType.Vegetables.Type1="onion";
FoodsType.Vegetables.Type2="tomato";
FoodsType.Vegetables.Type3="patatos";

// get values to vetamins objects
FoodsType.vet="E,C,K";
FoodsType.vets="B,Fe,Omiga3";

//print the result
console.log(FoodsType.display());