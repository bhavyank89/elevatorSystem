const lift1 = document.querySelector('#lift1');
const lift2 = document.querySelector('#lift2');
const lift3 = document.querySelector('#lift3');
const upButton = document.querySelectorAll('.upButton');
const dnButton = document.querySelectorAll('.dnButton');
const maintainLift1 = document.querySelector('#maintainLift1');
const maintainLift2 = document.querySelector('#maintainLift2');
const maintainLift3 = document.querySelector('#maintainLift3');

//Clicking upButtons
for (let floorCalled = 0; floorCalled <= 3; floorCalled++) {
    upButton[floorCalled].addEventListener('click', () => {
        try {
            console.log(upButton[floorCalled], "is Clicked");
            moveLiftUp(floorCalled);
        }
        catch (error) {
            console.log(error);
        }
    })
}

//Clicking dnButtons
for (let floorCalled = 0; floorCalled <= 3; floorCalled++) {
    dnButton[floorCalled].addEventListener('click', () => {
        try {
            console.log(dnButton[floorCalled], "is Clicked");
            moveLiftDn(floorCalled);
        }
        catch (error) {
            console.log(error);
        }
    })
}

//Function to find random lift
function liftRand() {
    let liftRand = Math.floor(Math.random() * 3);
    let lift = [lift1, lift2, lift3];

    if (maintainLift1.checked && liftRand == 0) {
        liftRand();
    }
    if (maintainLift2.checked && liftRand == 1) {
        liftRand();
    }
    if (maintainLift3.checked && liftRand == 2) {
        liftRand();
    }
    return lift[liftRand];
}
//MoveLiftDn function - moves lift downward's on click on dnButton
function moveLiftDn(floorCalled) {
    let liftNumber = liftRand();
    if (floorCalled == 0) {
        liftNumber.style.translate = '0px 0px'
    }
    if (floorCalled == 1) {
        liftNumber.style.translate = '0px 90px'
    }
    if (floorCalled == 2) {
        liftNumber.style.translate = '0px 180px'
    }
    if (floorCalled == 3) {
        liftNumber.style.translate = '0px 270px'
    }
}

//MoveLiftUp function - moves lift upward's on click on upButton
function moveLiftUp(floorCalled) {
    let liftNumber = liftRand();
    if (floorCalled == 0) {
        liftNumber.style.translate = '0px 90px'
    }
    if (floorCalled == 1) {
        liftNumber.style.translate = '0px 180px'
    }
    if (floorCalled == 2) {
        liftNumber.style.translate = '0px 270px'
    }
    if (floorCalled == 3) {
        liftNumber.style.translate = '0px 360px'
    }
}