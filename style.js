
//selection//
// var home=document.querySelector("#home");
//css change
// home.style.color="red";
//html chnage
// home.innerHTML="<i>hey bro</i>"

//text chnage
// home.textContent="<i>hello</i>"

//adding listerners//
// home.addEventListener('mouseenter',function(){
//     home.style.color="red";
// })
// home.addEventListener('mouseleave',function()
// {
//     home.style.color="black";
// })

var arr = [
    { name: "Petals of Sunflower", image: "https://images.unsplash.com/photo-1516757932457-9233f965b8d8?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Animals of Town", image: "https://media.istockphoto.com/id/1485082379/photo/mahout-with-his-giant-elephant-following-an-elephant-carer-in-a-harvested-rice-field-during.jpg?s=2048x2048&w=is&k=20&c=uYWCc3-23JA838p3Y7C6lco20Wmzn813avqG3BdpNzI=" },
    { name: "The Crowd City", image: "https://images.unsplash.com/photo-1494587416117-f102a2ac0a8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "fruits of planet", image: "https://images.unsplash.com/photo-1445628680538-19da88adb5bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "orange peeled", image: "https://images.unsplash.com/photo-1517281749396-564b95a206c3?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "web design", image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "apple juice",image:"https://images.unsplash.com/photo-1534336810865-0beae4c81278?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];


function showTheCards()
{
    var clutter="";
    arr.forEach(function(obj)
    {
        clutter += `<div class="box">
        <img class="cursor-pointer " src="${obj.image}" alt="image"> 
        <div class="caption">Lorem ipsum</div>
    </div>`;
    })

    document.querySelector(".container")
    .innerHTML=clutter;
}

function handleSearchFunctionality()

{
     var input=document.querySelector("#searchinput")  
     
     
    input.addEventListener("focus",function()
    {
       document.querySelector(".overlay").style.display="block";
     })


          
    input.addEventListener("blur",function()
    {
       document.querySelector(".overlay").style.display="none";
     })  



     input.addEventListener("input",function()
     {
       const filteredArray =arr.filter(obj =>obj.name.toLocaleLowerCase().startsWith(input.value));
        var clutter="";
        filteredArray.forEach(function(obj)
        {
           clutter +=` <div class="res flex px-8 py-3">
           <i clss="ri-search-line font-semibold mr-5"></i>
           <h3 class="font-semibold">${obj.name}</h3>
           </div>`
        
     })
     document.querySelector(".searchdata").style.display="block";
     document.querySelector(".searchdata").innerHTML=clutter;

    })


}



handleSearchFunctionality();
showTheCards();