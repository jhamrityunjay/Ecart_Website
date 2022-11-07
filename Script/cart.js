
  let imgdiv= document.querySelector("#imgshowing")

  let cartData=JSON.parse(localStorage.getItem("addcart")) || [];
  display(cartData);
  function display(res){
   res.forEach(function(el,i){
    let cart=document.createElement("div")

    let img=document.createElement("img")
    img.src=el.image_url;

    let name=document.createElement("p");
    name.innerText=el.name;

    let or_price=document.createElement("s");
    or_price.innerText="Price: "+el.strikedoffprice;
    
    let price=document.createElement("p");
    price.innerText="Price: "+el.price;

    let button=document.createElement("button");
    button.innerHTML="Remove";
    button.addEventListener("click",function(){
        mybutton(el,i);
    })

    cart.append(img,name,or_price,price,button);
    imgdiv.append(cart);
   })
    
   function mybutton(el,i){
    let tempdata=cartData;
    tempdata.splice(i,1)
    localStorage.setItem("addcart",JSON.stringify(tempdata));
    window.location.reload();
   }
   
}