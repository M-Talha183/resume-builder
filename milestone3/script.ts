const form = document.getElementById("resume") as HTMLFormElement;

const displayElement = document.getElementById("resume-display") as HTMLDivElement

form.addEventListener("submit",(event : Event)=>{
     event.preventDefault();

     // collect ionput values
      const name =( document.getElementById("name") as HTMLInputElement ).value
      const email =( document.getElementById("email") as HTMLInputElement ).value
      const phone =( document.getElementById("phone") as HTMLInputElement ).value
      const education =( document.getElementById("education") as HTMLInputElement ).value
      const experience =( document.getElementById("experience") as HTMLInputElement ).value
      const skills =( document.getElementById("skills") as HTMLInputElement ).value
    

    //   generate the resume dynamically
   const resumeHtml = `
   <h2><strong>Resume</strong><h2>
   <h3>Personal Informationh</h3> 
   <p><b>Name : </b> ${name}</p>
   <p><b>Email : </b> ${email}</p>
   <p><b>Phone: </b> ${phone}</p>

   <h3>Education</h3>
   <p><b>Education : </b> ${education}</p>
   
     <h3>Experience</h3>
   <p><b>Experience : </b> ${experience}</p>

     <h3>Skills</h3>
   <p><b>Skills: </b> ${skills}</p>
   `
    // display generated resume 
    if(displayElement){
        displayElement.innerHTML = resumeHtml;

    }else{
        console.error("The Resume Display Element is Missing.");
        
    }
})

