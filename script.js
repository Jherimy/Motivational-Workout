
const sexContainer = document.getElementById("sexContainer");
const infoContainer = document.getElementById("infoContainer");
const disclaimerContainer = document.getElementById("disclaimerContainer");
const startContainer = document.getElementById("startContainer");
const intensityContainer = document.getElementById("intensityContainer");
const listContainer = document.getElementById("listContainer");
const exerciseContainer = document.getElementById("exerciseContainer");
const popUpContainer = document.getElementById("popUpContainer");
const doneContainer = document.getElementById("doneContainer");


const loseWeightContainer = document.getElementById("loseWeightContainer");
const keepTonedContainer = document.getElementById("keepTonedContainer");
const buildMuscleContainer = document.getElementById("buildMuscleContainer");

const choicesContainer = document.getElementById("choicesContainer");

const exerciseHeaderContainer = document.querySelector(".exerciseHeaderContainer");
const resetContainer = document.querySelector(".resetContainer");
const listHeaderContainer = document.querySelector(".listHeaderContainer");
const exerciseDivContainer = document.querySelector(".exerciseDivContainer");
const daysContainer = document.querySelector(".daysContainer")
const exerciseDoneContainer = document.querySelector(".exerciseDoneContainer")

let sex = "";
let program = "";
let day = "";

let dayProgram = "";

let done = 1;

function startNextButton () {
    disclaimerContainer.style.display = "flex";
    startContainer.style.display = "none";
};

function disclaimerDeclineButton () {
    disclaimerContainer.style.display = "none";
    startContainer.style.display = "flex";
};

function disclaimerAgreeButton () {
    disclaimerContainer.style.display = "none";
    infoContainer.style.display = "flex";
};

function infoBackButton () {
    infoContainer.style.display = "none";
    startContainer.style.display = "flex";
};

function infoNextButton () {
    infoContainer.style.display = "none";
    sexContainer.style.display = "flex";
};

function sexBackButton () {
    infoContainer.style.display = "flex";
    sexContainer.style.display = "none";
};

function sexChoiceButton (clickedSex) {
    sexContainer.style.display = "none";
    intensityContainer.style.display = "flex";

    const sexChoice = clickedSex.querySelector("h1");
    const loseWeight = document.createElement("img");
    const keepToned = document.createElement("img");
    const buildMuscle = document.createElement("img");

    if (sexChoice.textContent === "MALE") {
        loseWeight.src = "./images/male-LW.png";
        keepToned.src = "./images/male-KT.png";
        buildMuscle.src = "./images/male-BM.png";
        sex = "male";
    }

    else if (sexChoice.textContent === "FEMALE") {
        loseWeight.src = "./images/female-LW.png";
        keepToned.src = "./images/female-KT.png";
        buildMuscle.src = "./images/female-BM.png";
        sex = "female";
    }

    loseWeightContainer.appendChild(loseWeight);
    keepTonedContainer.appendChild(keepToned);
    buildMuscleContainer.appendChild(buildMuscle);
};

function intensityBackButton () {
    sexContainer.style.display = "flex";
    intensityContainer.style.display = "none";

    const images = choicesContainer.querySelectorAll("img");
    images.forEach(img => img.remove());
};

function intensityChoiceButton (clickedIntensity) {
    listContainer.style.display = "flex";
    intensityContainer.style.display = "none";

    const intensityh1Element = clickedIntensity.querySelector("h1");    

    listHeaderContainer.innerHTML = "";
    const listh2Element = document.createElement("h2");

    if (intensityh1Element.textContent === "LOSEWEIGHT") {
        listh2Element.textContent = "LOSE WEIGHT";
        dayProgram = "LOSE WEIGHT";
        program = "LW";
    }

    else if (intensityh1Element.textContent === "KEEPTONED") {
        listh2Element.textContent = "KEEP TONED";
        dayProgram = "KEEP TONED";
        program = "KT";
    }

    else if (intensityh1Element.textContent === "BUILDMUSCLE") {
        listh2Element.textContent = "BUILD MUSCLE";
        dayProgram = "BUILD MUSCLE";
        program = "BM";
    }

    listHeaderContainer.appendChild(listh2Element);
};

function listResetButton () {
    resetContainer.style.display = 'flex';
    setTimeout ( () => {
        resetContainer.style.transform = 'translateY(0%)';
    }, 50);
};

function closeResetButton () {
    resetContainer.style.transform = 'translateY(-100%)';
    setTimeout(() => {
        resetContainer.style.display = 'none';
    }, 500);
};

function resetButton () {
    location.reload();
};

/// MAKING THE LIST ///

const exercises = {

    /// Male Lose Weight ///

   maleLW1: {
        exercise1: {"MOUNTAIN CLIMBER": "00:30"},
        exercise2: {"SQUAT": "x16"},
        exercise3: {"HIGH STEPPING": "00:30"},
        exercise4: {"PUSH-UP": "x10"},
        exercise5: {"REVERSE CRUNCH": "x16"},
        exercise6: {"PLANK": "00:30"},
        exercise7: {"SQUAT": "x16"},
        exercise8: {"HIGH STEPPING": "00:30"},
        exercise9: {"PUSH-UP": "x10"},
        exercise10: {"REVERSE CRUNCH": "x16"},
        exercise11: {"PLANK": "00:30"},
        exercise12: {"COBRA STRETCH": "00:30"},
    },
    maleLW2: {
        exercise1: {"MOUNTAIN CLIMBER": "00:30"},
        exercise2: {"TRICEP DIP": "x16"},
        exercise3: {"JUMPING JACK": "00:30"},
        exercise4: {"LONG ARM CRUNCH": "x16"},
        exercise5: {"BICYCLE CRUNCH": "x16"},
        exercise6: {"PLANK": "00:30"},
        exercise7: {"TRICEP DIP": "x16"},
        exercise8: {"JUMPING JACK": "00:30"},
        exercise9: {"LONG ARM CRUNCH": "x16"},
        exercise10: {"BICYCLE CRUNCH": "x16"},
        exercise11: {"PLANK": "00:30"},
        exercise12: {"COBRA STRETCH": "00:30"},
    },
    maleLW3: {
        exercise1: {"MOUNTAIN CLIMBER": "00:30"},
        exercise2: {"JUMPING JACK": "00:30"},
        exercise3: {"ABDOMINAL CRUNCH": "x16"},
        exercise4: {"HEEL TOUCH": "x16"},
        exercise5: {"FLUTTER KICK": "00:30"},
        exercise6: {"PLANK": "00:30"},
        exercise7: {"JUMPING JACK": "00:30"},
        exercise8: {"ABDOMINAL CRUNCH": "x16"},
        exercise9: {"HEEL TOUCH": "x16"},
        exercise10: {"FLUTTER KICK": "00:30"},
        exercise11: {"PLANK": "00:30"},
        exercise12: {"COBRA STRETCH": "00:30"},
    },
    maleLW5: {
        exercise1: {"SKIPPING WITHOUT ROPE": "00:30"},
        exercise2: {"LUNGE": "x16"},
        exercise3: {"PUSH-UP": "x10"},
        exercise4: {"REVERSE CRUNCH": "x16"},
        exercise5: {"HEEL TOUCH": "x16"},
        exercise6: {"PLANK": "00:30"},
        exercise7: {"LUNGE": "x16"},
        exercise8: {"PUSH-UP": "x10"},
        exercise9: {"REVERSE CRUNCH": "x16"},
        exercise10: {"HEEL TOUCH": "x16"},
        exercise11: {"PLANK": "00:30"},
        exercise12: {"COBRA STRETCH": "00:30"},
    },
    maleLW6: {
        exercise1: {"SKIPPING WITHOUT ROPE": "00:30"},
        exercise2: {"TRICEP DIP": "x16"},
        exercise3: {"HIGH STEPPING": "00:30"},
        exercise4: {"SQUAT PULSE": "00:30"},
        exercise5: {"BICYCLE CRUNCH": "x16"},
        exercise6: {"PLANK": "00:30"},
        exercise7: {"TRICEP DIP": "x16"},
        exercise8: {"HIGH STEPPING": "00:30"},
        exercise9: {"SQUAT PULSE": "00:30"},
        exercise10: {"BICYCLE CRUNCH": "x16"},
        exercise11: {"PLANK": "00:30"},
        exercise12: {"COBRA STRETCH": "00:30"},
    },
    maleLW7: {
        exercise1: {"SKIPPING WITHOUT ROPE": "00:30"},
        exercise2: {"TRICEP DIP": "x16"},
        exercise3: {"LUNGE": "x16"},
        exercise4: {"LONG ARM CRUNCH": "x16"},
        exercise5: {"REVERSE CRUNCH": "x16"},
        exercise6: {"PLANK": "00:30"},
        exercise7: {"TRICEP DIP": "x16"},
        exercise8: {"LUNGE": "x16"},
        exercise9: {"LONG ARM CRUNCH": "x16"},
        exercise10: {"REVERSE CRUNCH": "x16"},
        exercise11: {"PLANK": "00:30"},
        exercise12: {"COBRA STRETCH": "00:30"},
    },

     /// Female Lose Weight ///

    femaleLW1: {
        exercise1 : {"CLOCKWISE ARM SWING": "00:20"},
        exercise2 : {"JUMPING JACK": "00:20"},
        exercise3 : {"SIDE STEP JACK": "00:30"},
        exercise4 : {"SQUAT": "00:30"},
        exercise5 : {"DONKEY KICK LEFT": "00:20"},
        exercise6 : {"DONKEY KICK RIGHT": "00:20"},
        exercise7 : {"BUTT BRIDGE": "00:30"},
        exercise8 : {"CAT COW POSE": "00:30"},
    },
    femaleLW2: {
        exercise1 : {"STANDING BICYCLE CRUNCH": "00:20"},
        exercise2 : {"BULGARIAN SPLIT SQUAT LEFT": "00:20"},
        exercise3 : {"BULGARIAN SPLIT SQUAT RIGHT": "00:20"},
        exercise4 : {"PUNCH": "00:20"},
        exercise5 : {"PLANK LEG UP": "00:20"},
        exercise6 : {"COBRA": "00:30"},
    },
    femaleLW3: {
        exercise1 : {"JUMPING JACK": "00:20"},
        exercise2 : {"SQUAT": "00:30"},
        exercise3 : {"CAT COW POSE": "00:30"},
        exercise4 : {"PLANK LEG UP": "00:30"},
        exercise5 : {"BICYCLE CRUNCH": "00:20"},
        exercise6 : {"COBRA": "00:30"},
    },
    femaleLW4: {
        exercise1 : {"SIDE STEP JACK": "00:30"},
        exercise2 : {"PUNCH" : "00:20"},
        exercise3 : {"CAT COW POSE": "00:30"},
        exercise4 : {"COBRA": "00:30"},
    },
    femaleLW5: {
        exercise1 : {"STANDING OBLIQUE CRUNCH RIGHT": "00:20"},
        exercise2 : {"STANDING OBLIQUE CRUNCH LEFT": "00:20"},
        exercise3 : {"CAT COW POSE": "00:30"},
        exercise4 : {"PLANK LEG UP": "00:30"},
        exercise5 : {"REVERSE CRUNCH": "00:20"},
        exercise6 : {"BOX PUSH-UP": "00:20"},
        exercise7 : {"FIRE HYDRANT LEFT" : "00:20"},
        exercise8 : {"FIRE HYDRANT RIGHT" : "00:20"},
    },
    femaleLW6: {
        exercise1 : {"STANDING BICYCLE CRUNCH": "00:20"},
        exercise2 : {"SIDE STEP JACK": "00:30"},
        exercise3 : {"PLANK LEG UP": "00:30"},
        exercise4 : {"SIDE LYING LEG LIFT LEFT": "00:20"},
        exercise5 : {"SIDE LYING LEG LIFT RIGHT": "00:20"},
        exercise6 : {"COBRA": "00:30"},
    },
    femaleLW7: {
        exercise1 : {"JUMPING JACK": "00:20"},
        exercise2 : {"BULGARIAN SPLIT SQUAT LEFT": "00:20"},
        exercise3 : {"BULGARIAN SPLIT SQUAT RIGHT": "00:20"},
        exercise4 : {"CAT COW POSE": "00:30"},
        exercise5 : {"PLANK LEG UP": "00:30"},
        exercise6 : {"FIRE HYDRANT LEFT" : "00:20"},
        exercise7 : {"FIRE HYDRANT RIGHT" : "00:20"},
        exercise8 : {"BUTT BRIDGE": "00:30"},
    },

    /// Male Keep Toned ///

    maleKT1: {
        exercise1 : {"JUMPING JACK": "00:20"},
        exercise2 : {"INCLINED PUSH-UP" : "x6"},
        exercise3 : {"KNEE PUSH-UP" : "x4"},
        exercise4 : {"PUSH-UP" : "x4"},
        exercise5 : {"WIDE ARM PUSH-UP": "x4"},
        exercise6 : {"INCLINED PUSH-UP" : "x6"},
        exercise7 : {"KNEE PUSH-UP" : "x4"},
        exercise8 : {"PUSH-UP" : "x4"},
        exercise9 : {"WIDE ARM PUSH-UP": "x4"},
        exercise10 : {"COBRA STRETCH" : "00:20"},
        exercise11 : {"CHEST STRETCH" : "00:20"},
    },
    maleKT2: {
        exercise1 : {"ABDOMINAL CRUNCH": "x10"},
        exercise2 : {"RUSSIAN TWIST" : "x12"},
        exercise3 : {"MOUNTAIN CLIMBER" : "x12"},
        exercise4 : {"HEEL TOUCH" : "x16"},
        exercise5 : {"LEG RAISE" : "x12"},
        exercise6 : {"PLANK" : "00:30"},
        exercise7 : {"ABDOMINAL CRUNCH": "x10"},
        exercise8 : {"RUSSIAN TWIST" : "x12"},
        exercise9 : {"MOUNTAIN CLIMBER" : "x12"},
        exercise10 : {"HEEL TOUCH" : "x16"},
        exercise11 : {"LEG RAISE" : "x12"},
        exercise12 : {"PLANK" : "00:30"},
        exercise13 : {"COBRA STRETCH" : "00:30"},
        exercise14 : {"SPINE LUMBAR TWIST STRETCH LEFT" : "00:30"},
        exercise15 : {"SPINE LUMBAR TWIST STRETCH RIGHT" : "00:30"},
    },
    maleKT3: {
        exercise1 : {"ARM RAISE": "x16"},
        exercise2 : {"RHOMBOID PULL" : "x14"},
        exercise3 : {"SIDE ARM RAISE" : "x16"},
        exercise4 : {"KNEE PUSH-UP" : "x14"},
        exercise5 : {"INCHWORM" : "x10"},
        exercise6 : {"SIDE LYING FLOOR STRETCH LEFT" : "00:30"},
        exercise7 : {"SIDE LYING FLOOR STRETCH RIGHT" : "00:30"},
        exercise8 : {"ARM SCISSOR" : "x30"},
        exercise9 : {"RHOMBOID PULL" : "x14"},
        exercise10 : {"SIDE ARM RAISE" : "x16"},
        exercise11 : {"KNEE PUSH-UP" : "x14"},
        exercise12 : {"CAT COW POSE" : "00:30"},
        exercise13 : {"PRONE TRICEP PUSH-UP" : "x14"},
        exercise14 : {"RECLINED RHOMBOID SQUEEZE" : "x14"},
        exercise15 : {"CHILD'S POSE" : "00:30"},
    },
    maleKT4: {
        exercise1 : {"JUMPING JACK": "00:30"},
        exercise2 : {"PUSH-UP" : "x4"},
        exercise3 : {"WIDE ARM PUSH-UP" : "x4"},
        exercise4 : {"PUSH-UP AND ROTATION" : "x4"},
        exercise5 : {"STAGGERED PUSH-UP": "x4"},
        exercise6 : {"PUSH-UP" : "x4"},
        exercise7 : {"WIDE ARM PUSH-UP" : "x4"},
        exercise8 : {"PUSH-UP AND ROTATION" : "x4"},
        exercise9 : {"DECLINED PUSH-UP" : "x4"},
        exercise10 : {"COBRA STRETCH" : "00:30"},
        exercise11 : {"CHEST STRETCH" : "00:30"},
    },
    maleKT5: {
        exercise1 : {"RUSSIAN TWIST": "x14"},
        exercise2 : {"LEG RAISE": "x14"},
        exercise3 : {"BUTT BRIDGE": "x10"},
        exercise4 : {"SIDE BRIDGE LEFT" : "x10"},
        exercise5 : {"SIDE BRIDGE RIGHT" : "x10"},
        exercise6 : {"ABDOMINAL CRUNCH" : "x12"},
        exercise7 : {"RUSSIAN TWIST" : "x14"},
        exercise8 : {"LEG RAISE": "x14"},
        exercise9 : {"BUTT BRIDGE": "x10"},
        exercise10 : {"SIDE BRIDGE LEFT" : "x8"},
        exercise11 : {"SIDE BRIDGE RIGHT" : "x8"},
        exercise12 : {"V-UP": "x10"},
        exercise13 : {"PUSH-UP AND ROTATION" : "x10"},
        exercise14 : {"COBRA STRETCH" : "00:30"},
        exercise15 : {"SPINE LUMBAR TWIST STRETCH RIGHT" : "00:30"},
        exercise16 : {"SPINE LUMBAR TWIST STRETCH LEFT" : "00:30"},
    },
    maleKT6: {
        exercise1 : {"ARM SCISSOR": "x30"},
        exercise2 : {"RHOMBOID PULL": "x14"},
        exercise3 : {"TRICEP KICKBACK" : "x6"},
        exercise4 : {"INCLINED PUSH-UP": "x6"},
        exercise5 : {"SIDE LYING FLOOR STRETCH LEFT": "00:30"},
        exercise6 : {"SIDE LYING FLOOR STRETCH RIGHT": "00:30"},
        exercise7 : {"ARM RAISE": "x16"},
        exercise8 : {"RHOMBOID PULL": "x12"},
        exercise9 : {"INCHWORM": "x10"},
        exercise10 : {"TRICEP KICKBACK": "x6"},
        exercise11 : {"INCLINED PUSH-UP": "x6"},
        exercise12 : {"CAT COW POSE": "00:30"},
        exercise13 : {"CHILD'S POSE": "00:30"},
        exercise14 : {"RECLINED RHOMBOID SQUEEZE": "x12"},
        exercise15 : {"PRONE TRICEP PUSH-UP": "x14"},
        exercise16 : {"RECLINED RHOMBOID SQUEEZE": "x12"},
    },
    maleKT7: {
        exercise1 : {"JUMPING JACK": "00:30"},
        exercise2 : {"INCLINED PUSH-UP": "x8"},
        exercise3 : {"WIDE ARM PUSH-UP": "x6"},
        exercise4 : {"PUSH-UP AND ROTATION" : "x4"},
        exercise5 : {"STAGGERED PUSH-UP": "x4"},
        exercise6 : {"DECLINED PUSH-UP": "x4"},
        exercise7 : {"WIDE ARM PUSH-UP": "x6"},
        exercise8 : {"PUSH-UP AND ROTATION" : "x4"},
        exercise9 : {"STAGGERED PUSH-UP": "x4"},
        exercise10 : {"DECLINED PUSH-UP": "x6"},
        exercise11 : {"COBRA STRETCH" : "00:30"},
        exercise12 : {"CHEST STRETCH" : "00:30"},
    },
    
    /// Female Keep Toned ///

    femaleKT1: {
        exercise1 : {"JUMPING JACK": "00:20"},
        exercise2 : {"INCLINED PUSH-UP": "x6"},
        exercise3 : {"PLIE SQUAT": "x6"},
        exercise4 : {"PUSH-UP": "x4"},
        exercise5 : {"HEEL TOUCH": "x8"},
        exercise6 : {"BOX PUSH-UP": "x8"},
        exercise7 : {"PLIE SQUAT": "x6"},
        exercise8 : {"KNEE PUSH-UP": "x4"},
        exercise9 : {"BACKWARD LUNGE": "x6"},
        exercise10 : {"PUSH-UP": "x4"},
        exercise11 : {"INCLINED PUSH-UP": "x6"},
        exercise12 : {"COBRA STRETCH": "00:20"},
        exercise13 : {"CHEST STRETCH": "00:20"},
    },
    femaleKT2: {
        exercise1 : {"JUMPING JACK": "00:30"},
        exercise2 : {"ABDOMINAL CRUNCH": "x8"},
        exercise3 : {"RUSSIAN TWIST": "x10"},
        exercise4 : {"MOUNTAIN CLIMBER": "x10"},
        exercise5 : {"HEEL TOUCH": "x12"},
        exercise6 : {"LEG RAISE": "x10"},
        exercise7 : {"PLANK": "00:20"},
        exercise8 : {"ABDOMINAL CRUNCH": "x8"},
        exercise9 : {"RUSSIAN TWIST": "x10"},
        exercise10 : {"MOUNTAIN CLIMBER": "x10"},
        exercise11 : {"HEEL TOUCH": "x12"},
        exercise12 : {"LEG RAISE": "x8"},
        exercise13 : {"FLUTTER KICK": "00:20"},
        exercise14 : {"COBRA STRETCH": "00:30"},
        exercise15 : {"SPINE LUMBAR TWIST STRETCH LEFT" : "00:30"},
        exercise16 : {"SPINE LUMBAR TWIST STRETCH RIGHT" : "00:30"},
    },
    femaleKT3: {
        exercise1 : {"JUMPING JACK": "00:30"},
        exercise2 : {"ARM SCISSOR": "x14"},
        exercise3 : {"RHOMBOID PULL" : "x12"},
        exercise4 : {"SIDE ARM RAISE" : "x12"},
        exercise5 : {"KNEE PUSH-UP" : "x8"},
        exercise6 : {"INCH WORMS" : "x10"},
        exercise7 : {"SIDE LYING FLOOR STRETCH LEFT" : "00:30"},
        exercise8 : {"SIDE LYING FLOOR STRETCH RIGHT" : "00:30"},
        exercise9 : {"ARM SCISSOR" : "x26"},
        exercise10 : {"RHOMBOID PULL" : "x10"},
        exercise11 : {"SIDE ARM RAISE" : "x8"},
        exercise12 : {"SHOULDER GATOS" : "x10"},
        exercise13 : {"CAT COW POSE" : "00:30"},
        exercise14 : {"PRONE TRICEP PUSH-UP" : "x12"},
        exercise15 : {"RECLINED RHOMBOID SQUEEZE": "x10"},
        exercise16 : {"CHILD'S POSE" : "00:30"},
    },
    femaleKT4: {
        exercise1 : {"JUMPING JACK": "00:30"},
        exercise2 : {"INCLINED PUSH-UP": "x8"},
        exercise3 : {"PUSH-UP": "x4"},
        exercise4 : {"BACKWARD LUNGE": "x6"},
        exercise5 : {"PUSH-UP": "x4"},
        exercise6 : {"PLIE SQUAT": "x6"},
        exercise7 : {"KNEE PUSH-UP" : "x4"},
        exercise8 : {"HEEL TOUCH" : "x6"},
        exercise9 : {"PUSH-UP": "x4"},
        exercise10 : {"INCLINED PUSH-UP": "x6"},
        exercise11 : {"COBRA STRETCH": "00:30"},
        exercise12 : {"CHEST STRETCH": "00:30"},
    },
    femaleKT5: {
        exercise1 : {"JUMPING JACK": "00:30"},
        exercise2 : {"RUSSIAN TWIST": "x12"},
        exercise3 : {"LEG RAISE": "x12"},
        exercise4 : {"BUTT BRIDGE": "x8"},
        exercise5 : {"BENT KNEE SIDE HIP RAISE LEFT": "x8"},
        exercise6 : {"BENT KNEE SIDE HIP RAISE RIGHT": "x8"},
        exercise7 : {"ABDOMINAL CRUNCH": "x10"},
        exercise8 : {"RUSSIAN TWIST": "x12"},
        exercise9 : {"LEG RAISE": "x12"},
        exercise10 : {"BUTT BRIDGE": "x8"},
        exercise11 : {"STANDING OBLIQUE CRUNCH LEFT": "x6"},
        exercise12 : {"STANDING OBLIQUE CRUNCH RIGHT": "x8"},
        exercise13 : {"LEG IN AND OUT": "x8"},
        exercise14 : {"KNEE PLANK": "00:16"},
        exercise15 : {"COBRA STRETCH": "00:30"},
        exercise16 : {"SPINE LUMBAR TWIST STRETCH LEFT" : "00:30"},
        exercise17 : {"SPINE LUMBAR TWIST STRETCH RIGHT" : "00:30"},
    },
    femaleKT6: {
        exercise1 : {"JUMPING JACK": "00:30"},
        exercise2 : {"ARM SCISSOR": "x26"},
        exercise3 : {"RHOMBOID PULL" : "x12"},
        exercise4 : {"TRICEP KICKBACK" : "x6"},
        exercise5 : {"INCLINED PUSH-UP": "x6"},
        exercise6 : {"SIDE LYING FLOOR STRETCH LEFT" : "00:30"},
        exercise7 : {"SIDE LYING FLOOR STRETCH RIGHT" : "00:30"},
        exercise8 : {"ARM RAISE" : "x14"},
        exercise9 : {"INCHWORM" : "x10"},
        exercise10 : {"TRICEP KICKBACK" : "x6"},
        exercise11 : {"WALL PUSH-UP": "x8"},
        exercise12 : {"FLOOR SLIDES": "x10"},
        exercise13 : {"CAT COW POSE" : "00:30"},
        exercise14 : {"PRONE TRICEP PUSH-UP" : "x12"},
        exercise15 : {"RECLINED RHOMBOID SQUEEZE": "x10"},
        exercise16 : {"ELBOWS BACK" : "00:20"},
        exercise17 : {"BACK ARCHES": "x8"},
        exercise18 : {"CHILD'S POSE" : "00:30"},
    },
    femaleKT7: {
        exercise1 : {"JUMPING JACK": "00:30"},
        exercise2 : {"INCLINED PUSH-UP": "x8"},
        exercise3 : {"BOX PUSH-UP": "x6"},
        exercise4 : {"PLIE SQUAT": "x6"},
        exercise5 : {"PUSH-UP": "x4"},
        exercise6 : {"PUSH-UP": "x4"},
        exercise7 : {"REVERSE CRUNCH": "x8"},
        exercise8 : {"KNEE PUSH-UP": "x4"},
        exercise9 : {"BACKWARD LUNGE": "x6"},
        exercise10 : {"PUSH-UP": "x4"},
        exercise11 : {"INCLINED PUSH-UP": "x6"},
        exercise12 : {"COBRA STRETCH": "00:30"},
        exercise13 : {"CHEST STRETCH": "00:30"},
    },

    /// Male Build Muscle ///

    maleBM1: {
        exercise1 : {"JUMPING JACK": "00:20"},
        exercise2 : {"INCLINED PUSH-UP": "x12"},
        exercise3 : {"KNEE PUSH-UP": "x8"},
        exercise4 : {"PUSH-UP": "x8"},
        exercise5 : {"WIDE ARM PUSH-UP": "x6"},
        exercise6 : {"INCLINED PUSH-UP": "x12"},
        exercise7 : {"KNEE PUSH-UP": "x6"},
        exercise8 : {"PUSH-UP": "x8"},
        exercise9 : {"WIDE ARM PUSH-UP": "x6"},
        exercise10 : {"COBRA STRETCH": "00:30"},
        exercise11 : {"CHEST STRETCH": "00:30"},
    },
    maleBM2: {
        exercise1 : {"JUMPING JACK": "00:30"},
        exercise2 : {"SIT-UP": "x10"},
        exercise3 : {"RUSSIAN TWIST": "x14"},
        exercise4 : {"MOUNTAIN CLIMBER": "x14"},
        exercise5 : {"RECLINED OBLIQUE TWIST": "x16"},
        exercise6 : {"LEG RAISE": "x14"},
        exercise7 : {"PLANK": "00:30"},
        exercise8 : {"SIT-UP": "x10"},
        exercise9 : {"RUSSIAN TWIST": "x14"},
        exercise10 : {"MOUNTAIN CLIMBER": "x14"},
        exercise11 : {"RECLINED OBLIQUE TWIST": "x16"},
        exercise12 : {"LEG RAISE": "x14"},
        exercise13 : {"PLANK": "00:30"},
        exercise14 : {"COBRA STRETCH": "00:30"},
        exercise15 : {"SPINE LUMBAR TWIST STRETCH LEFT" : "00:30"},
        exercise16 : {"SPINE LUMBAR TWIST STRETCH RIGHT" : "00:30"},
    },
    maleBM3: {
        exercise1 : {"JUMPING JACK": "00:30"},
        exercise2 : {"ARM RAISE": "x20"},
        exercise3 : {"RHOMBOID PULL" : "x12"},
        exercise4 : {"SIDE ARM RAISE": "x20"},
        exercise5 : {"KNEE PUSH-UP": "x14"},
        exercise6 : {"INCHWORM": "x10"},
        exercise7 : {"SIDE LYING FLOOR STRETCH LEFT" : "00:30"},
        exercise8 : {"SIDE LYING FLOOR STRETCH RIGHT" : "00:30"},
        exercise9 : {"ARM SCISSOR": "x30"},
        exercise10 : {"RHOMBOID PULL" : "x12"},
        exercise11 : {"SIDE ARM RAISE": "x20"},
        exercise12 : {"KNEE PUSH-UP": "x14"},
        exercise13 : {"CAT COW POSE" : "00:30"},
        exercise14 : {"PRONE TRICEP PUSH-UP" : "x14"},
        exercise15 : {"BACKBOW PULL" : "x12"},
        exercise16 : {"FLOOR Y RAISE" : "x10"},
        exercise17 : {"PRONE TRICEP PUSH-UP" : "x14"},
        exercise18 : {"BACKBOW PULL" : "x12"},
        exercise19 : {"FLOOR Y RAISE" : "x10"},
        exercise20 : {"CHILD'S POSE" : "00:30"},
    },
    maleBM4: {
        exercise1 : {"JUMPING JACK": "00:30"},
        exercise2 : {"PUSH-UP": "x8"},
        exercise3 : {"WIDE ARM PUSH-UP": "x8"},
        exercise4 : {"PUSH-UP AND ROTATION": "x6"},
        exercise5 : {"STAGGERED PUSH-UP": "x6"},
        exercise6 : {"PUSH-UP": "x8"},
        exercise7 : {"WIDE ARM PUSH-UP": "x8"},
        exercise8 : {"PUSH-UP AND ROTATION": "x4"},
        exercise9 : {"DECLINED PUSH-UP": "x6"},
        exercise10 : {"COBRA STRETCH": "00:30"},
        exercise11 : {"CHEST STRETCH": "00:30"},
    },
    maleBM5: {
        exercise1 : {"JUMPING JACK": "00:30"},
        exercise2 : {"RUSSIAN TWIST": "x16"},
        exercise3 : {"LEG RAISE": "x16"},
        exercise4 : {"BUTT BRIDGE": "x12"},
        exercise5 : {"SIDE BRIDGE LEFT": "x10"},
        exercise6 : {"SIDE BRIDGE RIGHT": "x10"},
        exercise7 : {"SIT-UP": "x10"},
        exercise8 : {"RUSSIAN TWIST": "x16"},
        exercise9 : {"LEG RAISE": "x16"},
        exercise10 : {"BUTT BRIDGE": "x12"},
        exercise11 : {"SIDE BRIDGE LEFT": "x10"},
        exercise12 : {"SIDE BRIDGE RIGHT": "x10"},
        exercise13 : {"V-UP": "x10"},
        exercise14 : {"PUSH-UP AND ROTATION": "x12"},
        exercise15 : {"COBRA STRETCH": "00:30"},
        exercise16 : {"SPINE LUMBAR TWIST STRETCH LEFT" : "00:30"},
        exercise17 : {"SPINE LUMBAR TWIST STRETCH RIGHT" : "00:30"},
    },
    maleBM6: {
        exercise1 : {"JUMPING JACK": "00:30"},
        exercise2 : {"ARM SCISSOR": "x30"},
        exercise3 : {"RHOMBOID PULL" : "x14"},
        exercise4 : {"KNEE PUSH-UP": "x14"},
        exercise5 : {"TRICEP KICKBACK": "x6"},
        exercise6 : {"INCLINED PUSH-UP": "x14"},
        exercise7 : {"SIDE LYING FLOOR STRETCH LEFT" : "00:30"},
        exercise8 : {"SIDE LYING FLOOR STRETCH RIGHT" : "00:30"},
        exercise9 : {"ARM RAISE": "x16"},
        exercise10 : {"RHOMBOID PULL" : "x12"},
        exercise11 : {"KNEE PUSH-UP": "x14"},
        exercise12 : {"INCHWORM": "x10"},
        exercise13 : {"TRICEP KICKBACK": "x6"},
        exercise14 : {"INCLINED PUSH-UP": "x14"},
        exercise15 : {"CAT COW POSE" : "00:30"},
        exercise16 : {"PRONE TRICEP PUSH-UP" : "x14"},
        exercise17 : {"SWIMMER & SUPERMAN" : "x10"},
        exercise18 : {"BACKBOW PULL" : "x12"},
        exercise19 : {"CHILD'S POSE" : "00:30"},
    },
    maleBM7: {
        exercise1 : {"JUMPING JACK": "00:30"},
        exercise2 : {"INCLINED PUSH-UP": "x12"},
        exercise3 : {"WIDE ARM PUSH-UP": "x12"},
        exercise4 : {"PUSH-UP AND ROTATION": "x8"},
        exercise5 : {"STAGGERED PUSH-UP": "x8"},
        exercise6 : {"DECLINED PUSH-UP": "x8"},
        exercise7 : {"WIDE ARM PUSH-UP": "x12"},
        exercise8 : {"PUSH-UP AND ROTATION": "x8"},
        exercise9 : {"STAGGERED PUSH-UP": "x6"},
        exercise10 : {"DECLINED PUSH-UP": "x6"},
        exercise11 : {"COBRA STRETCH": "00:30"},
        exercise12 : {"CHEST STRETCH": "00:30"},
    },

    /// Female Build Muscle ///

    femaleBM1: {
        exercise1 : {"JUMPING JACK": "00:20"},
        exercise2 : {"INCLINED PUSH-UP": "x6"},
        exercise3 : {"KNEE PUSH-UP": "x4"},
        exercise4 : {"PUSH-UP": "X4"},
        exercise5 : {"WIDE ARM PUSH-UP": "x4"},
        exercise6 : {"INCLINED PUSH-UP": "x6"},
        exercise7 : {"KNEE PUSH-UP": "x4"},
        exercise8 : {"PUSH-UP": "x4"},
        exercise9 : {"WIDE ARM PUSH-UP": "x4"},
        exercise10 : {"COBRA STRETCH": "00:20"},
        exercise11 : {"CHEST STRETCH": "00:20"},
    },
    femaleBM2: {
        exercise1 : {"ABDOMINAL CRUNCH": "x10"},
        exercise2 : {"RUSSIAN TWIST": "x12"},
        exercise3 : {"MOUNTAIN CLIMBER": "x12"},
        exercise4 : {"HEEL TOUCH": "x16"},
        exercise5 : {"LEG RAISE": "x12"},
        exercise6 : {"PLANK": "00:30"},
        exercise7 : {"ABDOMINAL CRUNCH": "x10"},
        exercise8 : {"RUSSIAN TWIST": "x12"},
        exercise9 : {"MOUNTAIN CLIMBER": "x12"},
        exercise10 : {"HEEL TOUCH": "x16"},
        exercise11 : {"LEG RAISE": "x12"},
        exercise12 : {"PLANK": "00:30"},
        exercise13 : {"COBRA STRETCH": "00:30"},
        exercise14 : {"SPINE LUMBAR TWIST STRETCH LEFT": "00:30"},
        exercise15 : {"SPINE LUMBAR TWIST STRETCH RIGHT": "00:30"},
    },
    femaleBM3: {
        exercise1 : {"ARM RAISE": "x16"},
        exercise2 : {"RHOMBOID PULL": "x14"},
        exercise3 : {"SIDE ARM RAISE": "x16"},
        exercise4 : {"KNEE PUSH-UP": "x14"},
        exercise5 : {"INCH WORM": "x10"},
        exercise6 : {"SIDE LYING FLOOR STRETCH LEFT": "00:30"},
        exercise7 : {"SIDE LYING FLOOR STRETCH RIGHT": "00:30"},
        exercise8 : {"ARM SCISSOR": "x30"},
        exercise9 : {"RHOMBOID PULL": "x12"},
        exercise10 : {"SIDE ARM RAISE": "x14"},
        exercise11 : {"KNEE PUSH-UP": "x12"},
        exercise12 : {"CAT COW POSE": "00:30"},
        exercise13 : {"PRONE TRICEP PUSH-UP": "x14"},
        exercise14 : {"RECLINED RHOMBOID SQUEEZE": "x12"},
        exercise15 : {"PRONE TRICEP PUSH-UP": "x14"},
        exercise16 : {"RECLINED RHOMBOID SQUEEZE": "x12"},
        exercise17 : {"CHILD'S POSE": "00:30"},
    },
    femaleBM4: {
        exercise1 : {"JUMPING JACK": "00:30"},
        exercise2 : {"PUSH-UP": "x4"},
        exercise3 : {"WIDE ARM PUSH-UP": "x4"},
        exercise4 : {"PUSH-UP AND ROTATION": "x4"},
        exercise5 : {"STAGGERED PUSH-UP": "x4"},
        exercise6 : {"PUSH-UP": "x4"},
        exercise7 : {"WIDE ARM PUSH-UP": "x4"},
        exercise8 : {"PUSH-UP AND ROTATION": "x4"},
        exercise9 : {"DECLINED PUSH-UP": "x4"},
        exercise10 : {"COBRA STRETCH": "00:30"},
        exercise11 : {"CHEST STRETCH": "00:30"},
    },
    femaleBM5: {
        exercise1 : {"RUSSIAN TWIST": "x14"},
        exercise2 : {"LEG RAISE": "x14"},
        exercise3 : {"BUTT BRIDGE": "x10"},
        exercise4 : {"SIDE BRIDGE LEFT": "x10"},
        exercise5 : {"SIDE BRIDGE RIGHT": "x10"},
        exercise6 : {"ABDOMINAL CRUNCH": "x12"},
        exercise7 : {"RUSSIAN TWIST": "x14"},
        exercise8 : {"LEG RAISE": "x14"},
        exercise9 : {"BUTT BRIDGE": "x10"},
        exercise10 : {"SIDE BRIDGE LEFT": "x8"},
        exercise11 : {"SIDE BRIDGE RIGHT": "x8"},
        exercise12 : {"V-UP": "x10"},
        exercise13 : {"PUSH-UP AND ROTATION": "x10"},
        exercise14 : {"COBRA STRETCH": "00:30"},
        exercise15 : {"SPINE LUMBAR TWIST STRETCH RIGHT": "00:30"},
        exercise16 : {"SPINE LUMBAR TWIST STRETCH LEFT": "00:30"},
    },
    femaleBM6: {
        exercise1 : {"ARM SCISSOR": "x30"},
        exercise2 : {"RHOMBOID PULL": "x30"},
        exercise3 : {"TRICEP KICKBACK": "x14"},
        exercise4 : {"INCLINED PUSH-UP": "x6"},
        exercise5 : {"SIDE LYING FLOOR STRETCH LEFT": "00:30"},
        exercise6 : {"SIDE LYING FLOOR STRETCH RIGHT": "00:30"},
        exercise7 : {"ARM RAISE": "x16"},
        exercise8 : {"RHOMBOID PULL": "x12"},
        exercise9 : {"INCHWORM": "x10"},
        exercise10 : {"TRICEP KICKBACK": "x6"},
        exercise11 : {"INCLINED PUSH-UP": "x6"},
        exercise12 : {"CAT COW POSE": "00:30"},
        exercise13 : {"CHILD'S POSE": "00:30"},
        exercise14 : {"RECLINED RHOMBOID SQUEEZE": "x12"},
        exercise15 : {"PRONE TRICEP PUSH-UP": "x14"},
        exercise16 : {"RECLINED RHOMBOID SQUEEZE": "x12"},
    },
    femaleBM7: {
        exercise1 : {"JUMPING JACK": "00:30"},
        exercise2 : {"INCLINED PUSH-UP": "x8"},
        exercise3 : {"WIDE ARM PUSH-UP": "x6"},
        exercise4 : {"PUSH-UP AND ROTATION": "x4"},
        exercise5 : {"STAGGERED PUSH-UP": "x4"},
        exercise6 : {"DECLINED PUSH-UP": "x4"},
        exercise7 : {"WIDE ARM PUSH-UP ": "x6"},
        exercise8 : {"PUSH-UP AND ROTATION": "x4"},
        exercise9 : {"STAGGERED PUSH-UP": "x4"},
        exercise10 : {"DECLINED PUSH-UP": "x6"},
        exercise11 : {"COBRA STRETCH": "00:30"},
        exercise12 : {"CHEST STRETCH": "00:30"},
    }
};

const popUpDescription = {
    "PLANK": "Lie on the floor with your toes and forearms on the ground. Keep your body straight and hold this position as long as you can.<br><br>This exercises strengthens the abdomen, back and shoulders.",
    "ABDOMINAL CRUNCH": "Lie on your back with your knees bent and your arms stretches forward.<br><br>Then lift your upper body off the floor. Hold for a few seconds and slowly return.<br><br>It primarily works the rectus abdominis muscle and the obliques. ",
    "JUMPING JACK": "Start with your feet together and your arms by your sides, then jump up with your feet apart and your hands overhead.<br><br>Return to the start position then do the next rep.This exercise provides a full-body workout and works all your large muscle groups.",
    "INCLINED PUSH-UP": "Start in the regular push-up position but with your hands elevated on a chair or bench.<br><br>Then push your body up and down using your arm strength.<br><br>Remember to keep your body straight.",
    "KNEE PUSH-UP": "Start in the regular push-up position, then let your knees touch the floor and raise your feet up off the floor.<br><br>Next push your body up and down.",
    "PUSH-UP": "Lay prone on the ground with arm supporting your body.<br><br>Lay prone on the ground with arm supporting your body.<br><br>This exercise works the chest, shoulders, triceps, back and legs.",
    "WIDE ARM PUSH-UP": "Start in the regular push-up position but with your hands spread wider than your shoulders.<br><br>Then push your body up and down. Remember to keep your body straight.",
    "COBRA STRETCH": "Lie down on your stomach and bend your elbows with your hands beneath your shoulders.<br><br>Then push your chest up off the ground as far as possible. Hold this position for seconds.",
    "CHEST STRETCH": "Find a doorway, take a lunge position in the doorway with your arm on the doorframe and your elbows a little lower than your shoulders, then slowly bring your chest forward.<br><br>Hold this position for 30-40 seconds. Then slowly come out of it, bring your arms down and do a couple of shoulder rolls.<br><br>Don’t pull your head forward, and keep your neck relaxed.",
    "RUSSIAN TWIST": "Sit on the floor with your knees bent, feet lifted a little bit and back tilted backwards.<br><br>Then hold your hands together and twist from side to side.",
    "MOUNTAIN CLIMBER": "Start in the push-up position. Bend your right knee towards your chest and keep your left leg straight, then quickly switch from one leg to the other.<br><br>This exercise strengthens multiple muscle groups.",
    "HEEL TOUCH": "Lie on the ground with your legs bent and your arms by your sides.<br><br>Slightly lift your upper body off the floor and make your hands alternately reach your heels.",
    "LEG RAISE": "Lie down on your back and put your hands beneath your hips for support.<br><br>Then lift your legs up until they form a right angle with the floor.<br><br>Slowly bring your legs back down and repeat the exercises. ",
    "SPINE LUMBAR TWIST STRETCH RIGHT": "Lie on your back with your legs extended<br><br>Lift your left leg up and use your right hand to pull your left knee to the right, but keep your other arm extended to the side on the floor.<br><br>Hold this position for a few second.",
    "SPINE LUMBAR TWIST STRETCH LEFT": "Lie on your back with your legs extended<br><br>Lift your right leg up and use your left hand to pull your right knee to the left, but keep your other arm extended to the side on the floor.<br><br>Hold this position for a few second.",
    "ARM RAISE": "Stand on the floor with your arms extended straight forward at shoulder height.<br><br>Raise your arms above your head. Return to the start position and repeat.",
    "RHOMBOID PULL": "Stand with your feet shoulders width apart.<br><br>Raise your arms parallel to the ground and bend your elbows. Pull your elbows back and squeeze your shoulders blades.<br><br>Repeat this exercise.",
    "SIDE ARM RAISE": "Stand with your feet shoulders width apart.<br><br>Raise your arms to the sides at shoulders height, then put them down.<br><br>Repeat the exercise. Keep your arm straight during the exercise.",
    "INCH WORM": "Start with your feet shoulder width apart.<br><br>Bend your body and walk your hands in front of you as far as you can, then walk your hands back. Repeat the exercise.",
    "SIDE LYING FLOOR STRETCH LEFT": "Lie on your right side with your right knee slightly bent in front of you and your left leg stretches behind the right leg.<br><br>Straighten your left arm over your head and gently pull on your left wrist to stretch the left side of your body.<br><br>Straighten your left arm over your head and gently pull on your left wrist to stretch the left side of your body.",
    "SIDE LYING FLOOR STRETCH RIGHT": "Lie on your leftt side with your left knee slightly bent in front of you and your right leg stretches behind the left leg.<br><br>Straighten your right arm over your head and gently pull on your right wrist to stretch the right side of your body.<br><br>Straighten your right arm over your head and gently pull on your right wrist to stretch theright side of your body.",
    "ARM SCISSOR": "Stand upright with your feet shoulders width apart.<br><br>Stretch your arms in front of you at shoulder height with one arm overlap the other in the shape of the letter “X”, and then spread them apart.<br><br>Switch arms, and repeat the exercise.",
    "CAT COW POSE": "Start on all fours with your knees under your butt and your hands directly under your shoulders.<br><br>Then take a breath and make your belly fall down, shoulders roll back, and head come up towards the ceiling.<br><br>As you exhale, curve your back upward and let your head come down. Repeat the exercise.<br><br>Do it slowly with each step of this exercise.",
    "PRONE TRICEP PUSH-UP": "Lie your stomach with your hands underneath your shoulders and your elbows bent.<br><br>Slightly raise your chest up, and then go back to the start position.<br><br>Repeat this exercise.",
    "RECLINED RHOMBOID SQUEEZES": "Sit with your knees bent. Slightly lean your upper body back.<br><br>Stretch your arms in front of you, then pull your elbows back to make your elbows at a 90-degree angle and squeeze your shoulder blades.<br><br>Repeat this exercise.",
    "CHILD'S POSE": "Start with your knees and hands on the floor. Put your hands a little forward, widen your knees and put your toes together.<br><br>Take a breath, then exhale and sit back. Try to make your butt touch your heels. Relax your elbows, make your forehead touch the floor and try to lower your chest close to the floor. Hold this position.<br><br>Keep your arms stretched forward as you sit back. Make sure there is enough space between your shoulders and ears during the exercise.",
    "PUSH-UP AND ROTATION": "Start in the push-up position. Then go down for a push-up and as you come up, rotate your upper body and extend your right arm upward.<br><br>Repeat the exercise with the other arm. It’s a great exercise for the chest, shoulders, arms and core.",
    "STAGGERED PUSH-UP":  "Start in the regular push-up position, but with one hand in front of the other.<br><br>Then do a push-up and switch the other hand in front.<br><br>Remember to keep your body straight.",
    "DECLINED PUSH-UP": "Start on all fours with your knees under your butt and your hands under your shoulders.<br><br>Then elevate your feet on a chair on bench, and push your body up and down mainly using your arm strength.<br><br>Then elevate your feet on a chair on bench, and push your body up and down mainly using your arm strength. ",
    "BUTT BRIDGE": "Lie on your back with knees bent and feet flat on the floor. Put your arms flat at your sides.<br><br>Then lift your butt up and down.",
    "SIDE BRIDGE LEFT": "Lie on your right side. Put your right elbow directly under your shoulders and put your left hand on your waist. Place your left leg on your right leg.<br><br>Raise your hips upward, hold for 24-hours seconds, then go back to the start position.<br><br>Repeat the exercise. ",
    "SIDE BRIDGE RIGHT": "Lie on your leftt side. Put your left elbow directly under your shoulders and put your right hand on your waist. Place your right leg on your left leg.<br><br>Raise your hips upward, hold for 24-hours seconds, then go back to the start position.<br><br>Repeat the exercise. ",
    "V-UP": "Lie on your back with your arms and legs extended and your legs squeezed together.<br><br>Raise your upper body and legs, use your arms to touch your toes, then go back to the start position and repeat the exercise.",
    "TRICEP KICKBACK": "Lean forward, bend your knees and your elbows.<br><br>Extend your arms behind you and squeeze your triceps. Please make your arms parallel to the ground when extending them.<br><br>Go back to the start position and repeat this exercise.",
    "ARM RAISE": "Stand on the floor with your arms extended straight forward at shoulders height.<br><br>Raise your arms above your head. Return to the start position and repeat.",
    "CROSSOVER CRUNCH": "Lie on your back with your knees bent and your hands behind your ears.<br><br>Raise and twist your torso so your right elbow move to meet your left knee. Repeat with the other side.",
    "BICYCLE CRUNCH": "Lie on the floor with your hands behind your ears. Raise your knees and close your right elbow toward your left knee, then close your left elbow toward your right knee. Repeat the exercise.",
    "SQUAT PULSE": "Stand with your feet shoulder width apart. Bend your arms in front of you to keep balance.<br><br>Lower your body until your things are parallel with the floor. Come half way up instead of coming all the way up, then squat down again. Repeat",
    "LUNGE": "Stand with your feet shoulders width apart and your hands on your hips.<br><br>Take a step forward with your right leg and lower your body until your right thigh is parallel with the floor.<br><br>Then return and switch to the other leg. This exercise strengthens the quadriceps, glutes maximus and hamstrings.",
    "SKIPPING WITHOUT ROPE": "Place your arms at your sides and pretend to hold a skipping rope handle in each hand.<br><br>Jump and alternately land on the balls  of your feet, rotating your wrist at the same time as if you were spinning a rope.",
    "FLATTER KICK": "Lie on your back with your arms at your sides. Lift your legs and keep them as straight as you can.<br><br>Then quickly raise your right leg up, and simultaneously lower your left leg. Switch legs and repeat.",
    "LONG ARM CRUNCH": "Lie in you back with knees bent and feet flat on the floor. Put your arms straight over the top of your head.<br><br>Lift your upper body off the floor, then slowly go back to the start position. The exercise increases abdominal endurance.",
    "TRICEP DIP": "For the start position, sit on the chair. Then move your hip off the chair with your hands holding the edge of the chair.<br><br>Slowly bend and stretch your arms to make your body go up and down. This is a great exercise for the triceps.",
    "REVERSE CRUNCH": "Lie on your back with your knees up at a 90-degree angle and your hands behind your head.<br><br>Lift your upper body and thighs, and then stretch out. Repeat the exercise.",
    "HIGH STEPPING": "Run in place while pulling your knees as high as possible with each step.<br><br>Keep your upper body upright during this exercise.",
    "SQUAT": "Stand with your feet shoulder width apart and your arms stretches forward, then lower you body until your arm thighs are parallel with the floor.<br><br>Your knees should be extended in the same direction as your toes. Return to the start position and do the next rep.<br><br>This works as the thighs, hips, buttocks, quads, hamstring and lower body.",
}


function dayChoiceButton (clickedDay) {
    document.body.style.backgroundColor = "#404454";
    listContainer.style.display = "none";
    exerciseContainer.style.display = "flex";

    const daysh2Element1 = document.createElement("h2");
    daysh2Element1.textContent = clickedDay.textContent;

    const daysh2Element2 = document.createElement("h2");
    daysh2Element2.textContent = dayProgram;
    exerciseHeaderContainer.appendChild(daysh2Element2);
    exerciseHeaderContainer.appendChild(daysh2Element1);
    
    day = daysh2Element1.textContent.replace("DAY ", "");

    if (sex+program+day in exercises) {
        if (day != done) {
            exerciseDoneContainer.style.display = "none";
        }
        else {
            exerciseDoneContainer.style.display = "flex";
        };
        const codeValue = exercises[sex+program+day]
        for (const x in codeValue) {
            const xValue = codeValue[x];
            for (const i in xValue) {
                const iValue = xValue[i];

                const newDiv = document.createElement('div');
                const newh1 = document.createElement('h1');
                const newh2 = document.createElement('h2');
                const newImg1 = document.createElement("img");
                const newImg2 = document.createElement("img");
                
                newh1.textContent = i;
                newh2.textContent = iValue;
                newImg1.src = "./images/description-icon.png";
                newImg2.src = "./exercises/"+newh1.textContent+".gif";    

                newImg1.onclick = function () {
                    popUpContainer.style.display = "flex";
                    document.body.style.overflow = "hidden";
                    
                    setTimeout ( () => {
                        popUpContainer.style.transform = 'translateY(0%)';
                    }, 50);

                    const popUph1 = document.createElement('h1');
                    const popUpImg = document.createElement("img");
                    const popUph2 = document.createElement("h2");
                    const popUphr = document.createElement("hr");

                    popUph1.textContent = i;
                    popUpImg.src = "./exercises/"+popUph1.textContent+".gif"; 
                    popUph2.textContent = "CLICK ANYWHERE TO CLOSE";
  
                    const popUpP = document.createElement("p");
                    popUpP.innerHTML = popUpDescription[i];
                
                    popUpContainer.appendChild(popUpImg);
                    popUpContainer.appendChild(popUph1);
                    popUpContainer.appendChild(popUpP);
                    popUpContainer.appendChild(popUphr);
                    popUpContainer.appendChild(popUph2);
                };
                
                newDiv.appendChild(newh1);
                newDiv.appendChild(newh2);
                newDiv.appendChild(newImg1);
                newDiv.appendChild(newImg2);
                
                exerciseDivContainer.appendChild(newDiv);
            }
        }      
    }
    else if (sex+program+day === "maleLW4") {
        const restDiv = document.createElement('div');
        const restImg = document.createElement("img");
        const resth2 = document.createElement("h2");

        restImg.src = "./images/rest-icon.png";
        resth2.textContent = "YOU NEED TO GET SOME REST";
        restDiv.className = "restDay";

        restDiv.appendChild(restImg);
        restDiv.appendChild(resth2);

        exerciseDivContainer.appendChild(restDiv);
    };
};

function exerciseBackButton () {
    listContainer.style.display = "flex";
    exerciseContainer.style.display = "none";
    document.body.style.backgroundColor = "white";

    exerciseDivContainer.innerHTML = "";
    exerciseHeaderContainer.innerHTML = "";
}

function exerciseDoneButton () {
    listContainer.style.display = "flex";
    exerciseContainer.style.display = "none";
    document.body.style.backgroundColor = "white";

    exerciseDivContainer.innerHTML = "";
    exerciseHeaderContainer.innerHTML = "";

    const selectedDay = daysContainer.querySelectorAll("div");

    for (const div of selectedDay) {
        if (div.textContent === "DAY "+day) {
            div.classList.toggle("disable");
            div.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        }
    }
    done += 1;
    if (done === 8) {
        doneContainer.style.display = "flex";
        listContainer.style.display = "none";
    };
};

function popUpCloseButton () {
    popUpContainer.style.transform = 'translateY(120%)';
    setTimeout(() => {
        popUpContainer.style.display = 'none';
    }, 500);
    popUpContainer.innerHTML = "";
    document.body.style.overflow = "auto";
}

function doneButton () {
    location.reload();
}