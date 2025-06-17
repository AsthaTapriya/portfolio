const urlParams = new URLSearchParams(window.location.search) ;


const projectName = urlParams.get('project');

if(projectName)
{
    const projectDiv = document.getElementById('project-' + projectName);
    if(projectDiv)
    {
        projectDiv.style.display = 'block';
    }
}

// window.onload = function()  {
//     showSkills('coding');
// };
// function codeItems(){
//         let  code_skll= document.querySelector('.skill_details');
//         let innerhtml = 
//                     ` <div class="hml">
//                                     <div class="skill_line">
//                                        <p class="skill_head">HTML</p>
//                                        <span>95% </span>
//                                     </div>
//                                     <div class="blank_box"></div>
//                          </div>
//                          <div class="dbms">
//                                     <div class="skill_line">
//                                        <p class="skill_head">DBMS</p>
//                                        <span>50%</span>
//                                     </div>
//                                     <div class="blank_box"></div>
//                                  </div> 

//                                  <div class="css">
//                                     <div class="skill_line">
//                                        <p class="skill_head">CSS</p>
//                                        <span>80%</span>
//                                     </div>
//                                     <div class="blank_box"></div>
//                                  </div>

//                                 <div class="jscript">
//                                     <div class="skill_line">
//                                        <p class="skill_head">JavaScript</p>
//                                        <span>82%</span>
//                                     </div>
//                                     <div class="blank_box"></div>
//                                  </div>

//                                  <div class="c">
//                                     <div class="skill_line">
//                                        <p class="skill_head">C++</p>
//                                        <span>70%<span>
//                                     </div>
//                                     <div class="blank_box"></div>
//                                  </div>

//                                  <div class="dsa">
//                                      <div class="skill_line">
//                                        <p class="skill_head">DSA</p>
//                                        <span>60%</span>
//                                     </div>
//                                     <div class="blank_box"></div>
//                                  </div>
//                         `;
//         code_skll.innerHTML = innerhtml;
// }

// function inter_skll(){
//         let  inter_skl = document.querySelector('.interpersonal_skills');
//         let innerhtml = 
//                     `  <div class="tmwrk">
//                                     <div class="skill_line">
//                                        <p class="skill_head">Teamwork</p>
//                                        <span>91%</span>
//                                     </div>
//                                     <div class="blank_b"></div>
//                                  </div>
//                                   <div class="mngment">
//                                     <div class="skill_line">
//                                        <p class="skill_head">Time Management</p>
//                                        <span>90%</span>
//                                     </div>
//                                     <div class="blank_b"></div>
//                                  </div> 
//                                  <div class="adapt">
//                                     <div class="skill_line">
//                                        <p class="skill_head">Adaptability</p>
//                                        <span>100%</span>
//                                     </div>
//                                     <div class="blank_b"></div>
//                                  </div>
//                     `;
//         inter_skl.innerHTML = innerhtml;
// }

// function tools(){
//     let tool_tech = document.querySelector('.techno');
//     let innerhtml = 
//                         `<div class="excl">
//                                     <div class="skill_line">
//                                        <p class="skill_head">MS Excel</p>
//                                        <span>30%</span>
//                                     </div>
//                                     <div class="blank_bo"></div>
//                             </div>
//                                <div class="vscde">
//                                     <div class="skill_line">
//                                        <p class="skill_head">VS Code</p>
//                                        <span>85%</span>
//                                     </div>
//                                     <div class="blank_bo"></div>
//                                  </div> 

//                                    <div class="git">
//                                     <div class="skill_line">
//                                        <p class="skill_head">GitHub</p>
//                                        <span>90%</span>
//                                     </div>
//                                     <div class="blank_bo"></div>
//                                  </div> 
//         `;
//         tool_tech.innerHTML = innerhtml;
// }

// function showSkills(type)
// {
//     // document.querySelector('.skill_details').style.display = 'none';
//     //  document.querySelector('.interpersonal_skills').style.display = 'none';
//     //   document.querySelector('.techno').style.display = 'none';

//     //   if(type == 'coding')
//     //   {
//     //         document.querySelector('.skill_details').style.display = 'block';
//     //         codeItems();
//     //   }
//     //   else if(type == 'interpersonal')
//     //   {
//     //         document.querySelector('.interpersonal_skills').style.display = 'block';
//     //         inter_skll();
//     //   }
//     //   else if(type == 'tools')
//     //   {
//     //         document.querySelector('.techno').style.display = 'block';
//     //       tools();
//     //   }

//     //   document.querySelectorAll('.skill_name div').forEach(btn => btn.classList.remove('active'));
//     //   if(type == 'coding')
//     //   {
//     //         document.getElementById('skill1').classList.add('active');
//     //   }
//     //   if(type == 'interpersonal')
//     //   {
//     //         document.getElementById('skill2').classList.add('active');
//     //   }
//     //   if(type == 'tools')
//     //   {
//     //         document.getElementById('techno').classList.add('active');
//     //   }
//     // Hide all skill sections
//     document.querySelector('.skill_details').style.display = 'none';
//     document.querySelector('.interpersonal_skills').style.display = 'none';
//     document.querySelector('.techno').style.display = 'none';

//     // Remove active class from all tabs
//     document.querySelectorAll('.skill_name div').forEach(btn => btn.classList.remove('active'));

//     // Show selected section and add active class
//     if (type === 'coding') {
//         // document.querySelector('.skill_details').style.display = 'block';
//         document.getElementById('skill1').classList.add('active');
//         codeItems();
//     } else if (type === 'interpersonal') {
//         document.querySelector('.interpersonal_skills').style.display = 'block';
//         document.getElementById('skill2').classList.add('active');
//         inter_skll();
//     } else if (type === 'tools') {
//         document.querySelector('.techno').style.display = 'block';
//         document.getElementById('skill3').classList.add('active');
//         tools();
//     }
//     if(type === 'coding')
//     {
//             const skillBox = document.querySelector('.skill_details');
//             skillBox.style.display = 'grid';
//             skillBox.style.gridTemplateColumns = 'repeat(2,  1fr)';
//             skillBox.style.gap = '20px';
//     }

//    else if(type === 'interpersonal')
//     {
//             const inter = document.querySelector('.interpersonal_skills');
//              inter.style.display = 'flex';
//             skillBox.style.flexDirection = 'column';
//             // inter.style.gap = '12px';
//     }  
    
//     else if(type === 'tools')
//     {
//             const tech = document.querySelector('.techno');
//              tech.style.display = 'flex';
//             tech.style.flexDirection = 'column';
//             tech.style.gap = '20px';
//     }
// }

//   document.querySelectorAll('.blank_box').forEach(box => {
//     const percent = box.getAttribute('data-percent') + '%';
//     box.style.setProperty('--percent', percent);
//   });

// setTimeout(() => {
//   document.querySelectorAll('.blank_box').forEach(box => {
//     const percent = box.getAttribute('data-percent') + '%';
//     box.style.backgroundSize = percent + ' 100%';
//   });
// }, 200); // Delay to trigger transition


// // const urlParams = new URLSearchParams(window.location.search);
// // window.location.search: This is the part of the current page URL after the ? — for example, if your URL is project-details.html?project=1, then window.location.search is "?project=1".

// // new URLSearchParams(...): This creates an object that helps you easily read parameters from the URL query string.

// // const projectNumber = urlParams.get('project'); // e.g. "1", "2", etc.
// // .get('project'): This extracts the value of the parameter named "project" from the URL.

// // For example, if URL is ...?project=1, then projectNumber will be the string "1".

// // This variable now holds the number (or ID) of the project you want to display.

// // if (projectNumber) {
// // This checks if the projectNumber exists (i.e., it’s not null or empty).

// // Only if a project number is present, it continues to show the project content.

// // const projectDiv = document.getElementById('project-' + projectNumber);
// // It looks for the HTML element whose id equals "project-" + projectNumber.

// // For example, if projectNumber is "1", it looks for element with id="project-1".

// // This assumes your HTML has divs like <div id="project-1">...</div>, <div id="project-2">...</div>, etc.

// // if (projectDiv) {
// //   projectDiv.style.display = 'block';
// // }
// // Checks if the element exists in the page.

// // If yes, it sets the CSS property display to 'block' to make the project visible.

// // This means your div is probably hidden by default (display: none in CSS), and you make the selected one appear.

// // Summary:
// // This script reads the URL parameter project.

// // Finds the corresponding project div by matching the id.

// // Shows only that div by changing its display style to block.

// // You said:
// // website.html?project=tributePage I write like this

// // ChatGPT said:
// // Yes! Writing the URL like this:

// // website.html?project=tributePage
// // is perfectly correct if:

// // Your HTML file is named website.html

// // Your JavaScript is looking for the URL parameter named project

// // You have a <div> with id="project-tributePage" in your HTML

// // What this means:
// // The ?project=tributePage part is the query string.

// // Your JS will read project=tributePage and look for the element with id project-tributePage.

// // Then it will show only that project’s content.

// // Example:
// // Your link can be:

// // <a href="website.html?project=tributePage">See Tribute Page details</a>
// // And in your website.html file, you have:

// // <div id="project-tributePage" class="main hidden">
// //   <!-- Tribute Page project details here -->
// // </div>
// // The JavaScript will pick it up and show that div.
const hamburger = document.getElementById("hamburger");
const menus = document.getElementById("menus");

hamburger.addEventListener("click", () => {
  menus.classList.toggle("show");
});

const codingSkills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "C++", level: 90 },
  { name: "DBMS", level: 50 },
    { name: "DSA", level: 60 },
];

const interpersonalSkills = [
  { name: "Time Management", level: 90 },
  { name: "Teamwork", level: 91 },
  { name: "Adaptability", level: 100 },
];

const tools = [
  { name: "GitHub", level: 90 },
  { name: "VS Code", level: 85 },
  { name: "MS Excel", level: 30 },
];

function renderSkills(skills, containerClass) {
  const container = document.querySelector(`.${containerClass}`);
  container.innerHTML = skills
    .map(
      (skill) => `
        <div>
          <div class="skill_line">
            <p class="skill_head">${skill.name}</p>
            <span>${skill.level}%</span>
          </div>
          <div class="blank_box" style="--percent: ${skill.level}%"></div>
        </div>
      `
    )
    .join("");
}

function showSkills(type) {
  document.querySelector(".skill_details").style.display = "none";
  document.querySelector(".interpersonal_skills").style.display = "none";
  document.querySelector(".techno").style.display = "none";

  document.querySelectorAll(".skill_name div").forEach((el) =>
    el.classList.remove("active")
  );

  if (type === "coding") {
    renderSkills(codingSkills, "skill_details");
    document.querySelector(".skill_details").style.display = "grid";
    document.getElementById("skill1").classList.add("active");
  } else if (type === "interpersonal") {
    renderSkills(interpersonalSkills, "interpersonal_skills");
    document.querySelector(".interpersonal_skills").style.display = "flex";
    document.getElementById("skill2").classList.add("active");
  } else if (type === "tools") {
    renderSkills(tools, "techno");
    document.querySelector(".techno").style.display = "flex";
    document.getElementById("skill3").classList.add("active");
  }
}

window.onload = () => showSkills("coding");
