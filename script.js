let show = true;/**menu grande mostrando */

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {
  document.body.style.overflow = show ? "hidden" : "initial";
  menuSection.classList.toggle("on",show)
  
  
  show = !show;
})

const links = document.querySelectorAll(".menu ul li a")
  for(link of links){
    link.addEventListener("click",(e) => {
      console.log(e.target)
      show = !show
      if(show){
        menuSection.classList.remove("on",show)
        document.body.style.overflow = "initial"
      }else{
        menuSection.classList.add("on",show)
      }
      
      
    
    })
  }  


