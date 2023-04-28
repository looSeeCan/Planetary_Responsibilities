

let balanceImg = document.getElementById("balance");
let empathize = document.querySelector(".empathizeImg");

let nurture = document.querySelector(".nurtureImg");
let serve = document.querySelector(".serveImg");
let influence = document.querySelector(".influenceImg");

// balanceImg.addEventListener("click", () => console.log("hello"));
let i = 0;
const clickOrder = () => {
    if (i === 0) {
        empathize.style.visibility= "visible";
        // console.log(i);    
    }
    if (i === 1) {
        nurture.style.visibility = "visible";
    }
    if (i === 2) {
        serve.style.visibility = "visible";
    }
    if (i === 3) {
        influence.style.visibility = "visible";
    }
    i++;
    // console.log(i);
}
balanceImg.addEventListener("click", clickOrder);

const orderedList = (item, item2) => {//ordered list
    let careerJobsContainer = document.querySelector(".careerJobs");
    let listView = document.createElement("ol");
    let listViewItem = document.createElement("li");
    let listViewItem2 = document.createElement("li");
    
    listViewItem.appendChild(item);
    listViewItem2.appendChild(item2);
    
    listView.appendChild(listViewItem);
    listView.appendChild(listViewItem2);
    
    careerJobsContainer.appendChild(listView);
    listView.classList.add("paragraphContainer")
};

const appendToParagraphContainter = (item) => {//explains the education requirements
    let paragraph = document.querySelector(".p1")
    p.innerText = item;
    console.log(paragraph);
    paragraphContainer.appendChild(paragraph);
};

const careerJobs = (link, link2, career, career2) => {//make this the ordered list for the 2 career jobs
    const turnTolink = document.createElement("a");
    const turnTolink2 = document.createElement("a");
    turnTolink.href = link;
    turnTolink2.href = link2;
    turnTolink.innerText = career;
    turnTolink2.innerText = career2;
    orderedList(turnTolink, turnTolink2);
    // appendToParagraphContainter(empathizeP);//this has to be moved
};

//create a function // if the gift is pushed once call career jobs, else log to the console
//TODO: this does not work how it should. I want it to append somewhere on the body and also it shouldnt execute all at once.
const if1 = (link, link2, career, career2, txt) => {
    for (let k = 0; k < 2; k++) {
        if (k ===0) {
            careerJobs(link, link2, career, career2); 
        } else {
            fetch(txt)
            .then(response => response.text())
            .then(data => {
                // Do something with your data
                console.log(data); 
            });
        }
        
    }
};



empathize.addEventListener("click", () => {
    const link = "https://www.counselingdegreeguide.org/degrees/substance-abuse-counseling/";
    const link2 = "https://www.teachercertificationdegrees.com/careers/esl-teacher/";
    const career = "Substance Abusse Councelor";
    const career2 = "ESL Teacher";
    const txt = "empathy.txt"
    if1(link, link2, career, career2, txt);
});
nurture.addEventListener("click", () => {
    const link = "https://work.chron.com/become-cattle-farmer-19736.html";
    const link2 = "https://bestaccreditedcolleges.org/articles/marijuana-master-grower-salary-job-description.html";
    const career = "Cattle Rancher";
    const career2 = "Marijauna Master Grower";
    const txt = "nurture.txt"
    if1(link, link2, career, career2, txt);
});
influence.addEventListener("click", () => {
    const link = "https://work.chron.com/education-need-want-president-30956.html";
    const link2 = "https://work.chron.com/requirements-necessary-become-journalist-12514.html";
    const career = "President";
    const career2 = "Journalist";
    const txt = "influence.txt"
    if1(link, link2, career, career2, txt);
});
serve.addEventListener("click", () => {
    const link = "https://www.primermagazine.com/2010/learn/7-requirements-for-being-a-good-father";
    const link2 = "https://www.goarmy.com/learn/army-requirements-and-qualifications.html#:~:text=Be%20between%2017%2D35%20years,high%20school%20graduate%20or%20equivalent";
    const career = "Father";
    const career2 = "Soldier";
    const txt = "serve.txt"
    if1(link, link2, career, career2, txt);
});

// const txt = fetch("planet.txt");
// console.log(txt);


