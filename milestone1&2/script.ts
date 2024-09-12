const toggleBtn = document.getElementById("show-skills-btn") as HTMLElement ;

const skills = document.getElementById("skills") as HTMLElement;

toggleBtn.addEventListener("click", ()=>{
   if(skills.style.display === "none"){
    skills.style.display = "block"; 
   }else{
    skills.style.display = "none"
   }
})