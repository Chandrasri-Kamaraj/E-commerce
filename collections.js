var container=document.getElementById("products")
var search=document.getElementById("search")
var productList=container.querySelectorAll("div")
search.addEventListener("keyup",function(event){
    var EnterVal=event.target.value.toUpperCase()
     for(i=0;i<productList.length;i++)
     {
        var productname=productList[i].querySelector("h2").textContent
        if(productname.toUpperCase().indexOf(EnterVal)<0)
        {
            productList[i].style.display="none"
        }
        else{
            productList[i].style.display="block"
        }
     }
})