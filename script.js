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

const phase2Screen = document.getElementById("phase2-screen");

const startPhase2Btn = document.getElementById("start-phase2-btn");

const skillsScreen = document.getElementById("skills-screen");

const completePhase2Btn = document.getElementById("complete-phase2-btn");

const phase2CompleteScreen = document.getElementById("phase2-complete-screen");

const phase3Screen = document.getElementById("phase3-screen");

const startPhase3Btn = document.getElementById("start-phase3-btn");

const projectsScreen = document.getElementById("projects-screen");

const completePhase3Btn = document.getElementById("complete-phase3-btn");

const phase3CompleteScreen = document.getElementById("phase3-complete-screen");

const phase4Screen = document.getElementById("phase4-screen");

const startPhase4Btn = document.getElementById("start-phase4-btn");

const achievementsScreen = document.getElementById("achievements-screen");

const completePhase4Btn = document.getElementById("complete-phase4-btn");

const phase4CompleteScreen = document.getElementById("phase4-complete-screen");

const phase5Screen = document.getElementById("phase5-screen");

const startPhase5Btn = document.getElementById("start-phase5-btn");

const contactScreen = document.getElementById("contact-screen");

const completePhase5Btn = document.getElementById("complete-phase5-btn");

const missionCompleteScreen = document.getElementById("mission-complete-screen");

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

        setTimeout(()=>{

            phaseCompleteScreen.style.opacity="0";

            setTimeout(()=>{

                phaseCompleteScreen.style.display="none";

phase2Screen.style.display="flex";

requestAnimationFrame(()=>{

    phase2Screen.style.opacity="1";

});

            },500);

        },1200);

    },500);

});

startPhase2Btn.addEventListener("click",()=>{

    phase2Screen.style.opacity="0";

    setTimeout(()=>{

        phase2Screen.style.display="none";

        skillsScreen.style.display="flex";

        requestAnimationFrame(()=>{

            skillsScreen.style.opacity="1";

        });

    },500);

});

completePhase2Btn.addEventListener("click",()=>{

    skillsScreen.style.opacity="0";

    setTimeout(()=>{

        skillsScreen.style.display="none";

        phase2CompleteScreen.style.display="flex";

        requestAnimationFrame(()=>{

            phase2CompleteScreen.style.opacity="1";

        });

        setTimeout(()=>{

            phase2CompleteScreen.style.opacity="0";

            setTimeout(()=>{

                phase2CompleteScreen.style.display="none";

phase3Screen.style.display="flex";

requestAnimationFrame(()=>{

    phase3Screen.style.opacity="1";

});

            },500);

        },1200);

    },500);

});

startPhase3Btn.addEventListener("click",()=>{

    phase3Screen.style.opacity="0";

    setTimeout(()=>{

        phase3Screen.style.display="none";

        projectsScreen.style.display="flex";

        requestAnimationFrame(()=>{

            projectsScreen.style.opacity="1";

        });

    },500);

});

completePhase3Btn.addEventListener("click",()=>{

    projectsScreen.style.opacity="0";

    setTimeout(()=>{

        projectsScreen.style.display="none";

        phase3CompleteScreen.style.display="flex";

        requestAnimationFrame(()=>{

            phase3CompleteScreen.style.opacity="1";

        });

        setTimeout(()=>{

            phase3CompleteScreen.style.opacity="0";

            setTimeout(()=>{

                phase3CompleteScreen.style.display="none";

phase4Screen.style.display="flex";

requestAnimationFrame(()=>{

    phase4Screen.style.opacity="1";

});

            },500);

        },1200);

    },500);

});

startPhase4Btn.addEventListener("click",()=>{

    phase4Screen.style.opacity="0";

    setTimeout(()=>{

        phase4Screen.style.display="none";

        achievementsScreen.style.display="flex";

        requestAnimationFrame(()=>{

            achievementsScreen.style.opacity="1";

        });

    },500);

});

completePhase4Btn.addEventListener("click",()=>{

    achievementsScreen.style.opacity="0";

    setTimeout(()=>{

        achievementsScreen.style.display="none";

        phase4CompleteScreen.style.display="flex";

        requestAnimationFrame(()=>{

            phase4CompleteScreen.style.opacity="1";

        });

        setTimeout(()=>{

            phase4CompleteScreen.style.opacity="0";

            setTimeout(()=>{

                phase4CompleteScreen.style.display="none";

                phase5Screen.style.display="flex";

                requestAnimationFrame(()=>{

                    phase5Screen.style.opacity="1";

                });

            },500);

        },1200);

    },500);

});

startPhase5Btn.addEventListener("click",()=>{

    phase5Screen.style.opacity="0";

    setTimeout(()=>{

        phase5Screen.style.display="none";

        contactScreen.style.display="flex";

        requestAnimationFrame(()=>{

            contactScreen.style.opacity="1";

        });

    },500);

});

completePhase5Btn.addEventListener("click",()=>{

    contactScreen.style.opacity="0";

    setTimeout(()=>{

        contactScreen.style.display="none";

        missionCompleteScreen.style.display="flex";

        requestAnimationFrame(()=>{

            missionCompleteScreen.style.opacity="1";

        });

    },500);

});