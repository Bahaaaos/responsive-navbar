let barIcon=document.querySelector("i.toggle"),
listItem=document.querySelectorAll(".list-item"),
list=document.querySelector("ul.list");
barIcon.onclick=function() {   
   list.classList.toggle("hidden");
}
listItem.forEach(el=>{  //add class active on clicked list-item
   el.onclick=function(){
      listItem.forEach(el=>{
      el.classList.remove("active");
      })
      this.classList.add("active");
   }
}) 

