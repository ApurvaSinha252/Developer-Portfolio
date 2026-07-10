const bootMessages = [
    "Developer System",
    "",
    "Initializing...",
    "",
    "Loading Candidate Database...",
    "",
    "Verifying Recruiter Credentials...",
    "",
    "Preparing Evaluation Interface...",
    "",
    "Launching Evaluation Interface..."
];

const phases = [

{

number:1,

title:"Verify Candidate Identity",

objective:"Review Candidate Overview",

complete:"✓ Candidate Overview Verified"

},

{

number:2,

title:"Analyze Technical Skills",

objective:"Review Candidate Skill Tree",

complete:"✓ Technical Skills Analyzed"

},

{

number:3,

title:"Inspect Project Archive",

objective:"Evaluate Technical Projects",

complete:"✓ Projects Successfully Evaluated"

},

{

number:4,

title:"Review Achievements",

objective:"Verify Candidate Growth",

complete:"✓ Achievements Verified"

},

{

number:5,

title:"Establish Communication",

objective:"Access Contact Terminal",

complete:"✓ Communication Channel Established"

}

];

let currentPhase = 0;

const bootOutput = document.getElementById("boot-output");

const bootScreen = document.getElementById("boot-screen");

const systemNotice = document.getElementById("system-notice");

const evaluationScreen=document.getElementById("evaluation-screen");

const acceptBtn=document.getElementById("accept-btn");

const missionScreen = document.getElementById("mission-screen");

const phaseScreen = document.getElementById("phase-screen");

const startPhaseBtn = document.getElementById("start-phase-btn");

const overviewScreen = document.getElementById("overview-screen");

const completePhaseBtn = document.getElementById("complete-phase-btn");

const phaseCompleteScreen = document.getElementById("phase-complete-screen");

const phaseNumber = document.getElementById("phase-number");

const phaseHeading = document.getElementById("phase-heading");

const phaseObjective = document.getElementById("phase-objective");

const completeMessage = document.getElementById("complete-message");

const progressText = document.getElementById("progress-text");

let messageIndex = 0;

function typeMessage(message, callback){

    let charIndex = 0;

    const line = document.createElement("div");

    bootOutput.appendChild(line);

    function type(){

        if(charIndex < message.length){

            line.textContent += message.charAt(charIndex);

            charIndex++;

            setTimeout(type,35);

        }

        else{

            callback();

        }

    }

    type();

}

function showMessages(){

    if(messageIndex >= bootMessages.length){

        setTimeout(showSystemNotice,800);

        return;

    }

    typeMessage(bootMessages[messageIndex],()=>{

        messageIndex++;

        setTimeout(showMessages,250);

    });

}

function showSystemNotice(){

    bootScreen.style.opacity="0";

    setTimeout(()=>{

        bootScreen.style.display="none";

        systemNotice.style.display="flex";

        requestAnimationFrame(()=>{

            systemNotice.style.opacity="1";

        });

    },600);

}

function loadPhase(){

    phaseNumber.textContent=
    `EVALUATION PHASE ${phases[currentPhase].number}`;

    phaseHeading.textContent=
    phases[currentPhase].title;

    phaseObjective.textContent=
    `Objective: ${phases[currentPhase].objective}`;

}

window.onload=()=>{

    bootScreen.style.opacity="1";

    systemNotice.style.opacity="0";

    setTimeout(showMessages,800);

};

acceptBtn.addEventListener("click",()=>{

    systemNotice.style.opacity="0";

    setTimeout(()=>{

        systemNotice.style.display="none";

        evaluationScreen.style.display="flex";

        requestAnimationFrame(()=>{

            evaluationScreen.style.opacity="1";

        });

        setTimeout(()=>{

    evaluationScreen.style.opacity="0";

    setTimeout(()=>{

        evaluationScreen.style.display="none";

        missionScreen.style.display="flex";

        requestAnimationFrame(()=>{

            missionScreen.style.opacity="1";

        });

        setTimeout(()=>{

            missionScreen.style.opacity = "0";

setTimeout(() => {

    missionScreen.style.display = "none";

    loadPhase();

phaseScreen.style.display="flex";

    requestAnimationFrame(() => {

        phaseScreen.style.opacity = "1";

    });

}, 500);

        },2000);

    },500);

},1200);

    },500);

});

startPhaseBtn.addEventListener("click",()=>{

    phaseScreen.style.opacity="0";

    setTimeout(()=>{

        phaseScreen.style.display="none";

        overviewScreen.style.display="flex";

        requestAnimationFrame(()=>{

            overviewScreen.style.opacity="1";

        });

    },500);

});

completePhaseBtn.addEventListener("click",()=>{

    overviewScreen.style.opacity="0";

    setTimeout(()=>{

        overviewScreen.style.display="none";

        phaseCompleteScreen.style.display="flex";

        requestAnimationFrame(()=>{

            phaseCompleteScreen.style.opacity="1";

        });

        completeMessage.textContent =
        phases[currentPhase].complete;

        progressText.textContent =
        `Evaluation Progress : ${(currentPhase+1)*20}%`;

        setTimeout(()=>{

    if(currentPhase < phases.length - 1){

    currentPhase++;

    loadPhase();

    phaseCompleteScreen.style.opacity = "0";

    setTimeout(()=>{

        phaseCompleteScreen.style.display = "none";

        phaseScreen.style.display = "flex";

        requestAnimationFrame(()=>{

            phaseScreen.style.opacity = "1";

        });

    },500);

}

else{

    // Final Evaluation Screen goes here

}

    setTimeout(()=>{

        phaseCompleteScreen.style.display = "none";

        phaseScreen.style.display = "flex";

        requestAnimationFrame(()=>{

            phaseScreen.style.opacity = "1";

        });

    },500);

},1200);

    },500);

});