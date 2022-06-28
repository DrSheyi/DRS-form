/**
     * Creates a variable for each excersice from the form. For each variable 
     * takes the score, accommodations, and comments and stores them in the 
     * corresponding html element for the results table. Also calculates the 
     * DRS score for the right side, left side, and total then stores them 
     * in the corresponding html element for the results table.
     */
function getData() {
    var plank = get_plank_vals(DRSForm.plank.value);
    var rightSidePlank = get_plank_vals(DRSForm.rightSidePlank.value);
    var leftSidePlank = get_plank_vals(DRSForm.leftSidePlank.value);
    var plankExtra = get_plank_avg_vals(plank.score, rightSidePlank.score, leftSidePlank.score);
    var rightSingleLegReleves = get_singleLegReleves_vals(DRSForm.rightSingleLegReleves.value);
    var leftSingleLegReleves = get_singleLegReleves_vals(DRSForm.leftSingleLegReleves.value);
    var rightSingleLegBridges = get_singleLegBridges_vals(DRSForm.rightSingleLegBridges.value);


    var testadministrator = DRSForm.testadministrator.value;
    var testingdate = DRSForm.testingdate.value;


    var leftSingleLegBridges = get_singleLegBridges_vals(DRSForm.leftSingleLegBridges.value);

    var sex = DRSForm.sex.value
    var rightHopTest = get_hopTest_vals(DRSForm.rightHopTest1.value, DRSForm.rightHopTest2.value, sex);
    var leftHopTest = get_hopTest_vals(DRSForm.leftHopTest1.value, DRSForm.leftHopTest2.value, sex);

    var legExtras = get_legAvg_vals(rightSingleLegReleves.score, leftSingleLegReleves.score, rightSingleLegBridges.score, leftSingleLegBridges.score, rightHopTest.score, leftHopTest.score);
    var rightPasseReleveBalance = get_passeReleveBalance_vals(DRSForm.rightPasseReleveBalance.value);
    var leftPasseReleveBalance = get_passeReleveBalance_vals(DRSForm.leftPasseReleveBalance.value);
    var rightPasseFlatFootBalance = get_passeFlatFootBalance_vals(DRSForm.rightPasseFlatFootBalance.value);
    var leftPasseFlatFootBalance = get_passeFlatFootBalance_vals(DRSForm.leftPasseFlatFootBalance.value);
    var passeExtra = get_passeAvg_vals(rightPasseReleveBalance.score, leftPasseReleveBalance.score, rightPasseFlatFootBalance.score, leftPasseFlatFootBalance.score);
    var ckcuestVar = get_ckcuestFunc_vals(DRSForm.ckcuest.value);
    var bolt = get_bolts_vals(DRSForm.bolt.value);



    var DRSRight = (Number(rightSingleLegReleves.score) + Number(rightSidePlank.score) + Number(rightSingleLegBridges.score) + Number(rightHopTest.score) + Number(rightPasseReleveBalance.score) + Number(rightPasseFlatFootBalance.score)) / 6;
    var DRSLeft = (Number(leftSingleLegReleves.score) + Number(leftSidePlank.score + leftSingleLegBridges.score) + Number(leftHopTest.score) + Number(leftPasseReleveBalance.score) + Number(leftPasseFlatFootBalance.score)) / 6;
    var DRSTotal = (Number(DRSLeft) + Number(DRSRight) + Number(plank.score) + Number(bolt.score)) / 4;

    var email = document.getElementById("email").value;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var ethnicity = document.getElementById("ethnicity").value;
    var sex = document.getElementById("sex").value;
    var company = document.getElementById("company").value;
    var workingLeg = document.getElementById("workingLeg").value;
    var standingLeg = document.getElementById("standingLeg").value;
    var threeMonthInjury = document.getElementById("threeMonthInjury").value;
    var fiveYearInjury = document.getElementById("fiveYearInjury").value;
    var consent = document.getElementById("consent").checked;
    DRSRight = DRSRight.toFixed(2);
    DRSLeft = DRSLeft.toFixed(2);
    DRSTotal = DRSTotal.toFixed(2);

    obj = {
        plank: plank,
        testadministrator: testadministrator,
        testingdate: testingdate,
        rightSidePlank: rightSidePlank,
        leftSidePlank: leftSidePlank,
        plankExtra: plankExtra,
        rightSingleLegReleves: rightSingleLegReleves,
        leftSingleLegReleves: leftSingleLegReleves,
        rightSingleLegBridges: rightSingleLegBridges,
        leftSingleLegBridges: leftSingleLegBridges,
        sex: sex,
        rightHopTest: rightHopTest,
        leftHopTest: leftHopTest,
        legExtras: legExtras,
        rightPasseReleveBalance: rightPasseReleveBalance,
        leftPasseReleveBalance: leftPasseReleveBalance,
        rightPasseFlatFootBalance: rightPasseFlatFootBalance,
        leftPasseFlatFootBalance: leftPasseFlatFootBalance,
        passeExtra: passeExtra,
        ckcuestVar: ckcuestVar,
        bolt: bolt,
        DRSRight: DRSRight,
        DRSLeft: DRSLeft,
        DRSTotal: DRSTotal,
        email: email,
        firstName: firstName,
        lastName: lastName,
        ethnicity: ethnicity,
        company: company,
        workingLeg: workingLeg,
        standingLeg: standingLeg,
        threeMonthInjury: threeMonthInjury,
        fiveYearInjury: fiveYearInjury,
        consent: consent,
        DRSRight: DRSRight,
        DRSLeft: DRSLeft,
        DRSTotal: DRSTotal
    }

    return obj
}


function value_ranges(amount, groups) {
    for (g in groups) {
        if ((amount >= groups[g]['min']) && (amount <= groups[g]['max'])) {
            var out = groups[g]
            out['amount'] = amount
        }
    }
    return out
}


function get_plank_vals(amount) {
    var definition = {
        g1: { min: 45, max: Infinity, score: 100, comments: "Calf, hamstring, gluteal, quadriceps strength and coordination are critical to all jumps,floor, and foot work. Strengthening these muscle groups will improve your ability to perform these movements efficiently." },
        g2: { min: 30, max: 44, score: 75, comments: "Calf, hamstring, gluteal, quadriceps strength and coordination are critical to all jumps,floor, and foot work. Strengthening these muscle groups will improve your ability to perform these movements efficiently." },
        g3: { min: 21, max: 29, score: 50, comments: "Calf, hamstring, gluteal, quadriceps strength and coordination are critical to all jumps,floor, and foot work. Strengthening these muscle groups will improve your ability to perform these movements efficiently." },
        g4: { min: 10, max: 20, score: 25, comments: "Calf, hamstring, gluteal, quadriceps strength and coordination are critical to all jumps,floor, and foot work. Strengthening these muscle groups will improve your ability to perform these movements efficiently." },
        g5: { min: 0, max: 9, score: 0, comments: "Calf, hamstring, gluteal, quadriceps strength and coordination are critical to all jumps,floor, and foot work. Strengthening these muscle groups will improve your ability to perform these movements efficiently." },
    }
    return value_ranges(amount, definition)
}
function get_plank_avg_vals(amount1, amount2, amount3) {
    var definition = {
        g1: { min: 80, max: Infinity, grade: "Excellent", accommodations: "Continue your current training/fitness regimen." },
        g2: { min: 61, max: 79, grade: "Average", accommodations: "Be cautious with work that places moderate to high demand on the core. Keep legs below 90 deg if you have hip or back pain." },
        g3: { min: 0, max: 61, grade: "Not Optimal, Recommend PT consult", accommodations: "Be cautious with work that places moderate to high demand on the core. Keep legs below <60 deg if you have hip or back pain." }
    }
    return value_ranges((amount1, amount2, amount3) / 3, definition)
}
function get_singleLegReleves_vals(amount) {
    var definition = {
        g1: { min: 35, max: Infinity, score: 100, comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career." },
        g2: { min: 25, max: 34, score: 80, comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career." },
        g3: { min: 16, max: 24, score: 60, comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career." },
        g4: { min: 11, max: 15, score: 40, comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career." },
        g5: { min: 6, max: 10, score: 20, comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career." },
        g6: { min: 0, max: 5, score: 0, comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career." },
    }
    return value_ranges(amount, definition)

}
function get_singleLegBridges_vals(amount) {
    var definition = {
        g1: { min: 31, max: Infinity, score: 100, comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career." },
        g2: { min: 25, max: 30, score: 75, comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career." },
        g3: { min: 20, max: 24, score: 50, comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career." },
        g4: { min: 10, max: 19, score: 25, comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career." },
        g5: { min: 0, max: 9, score: 0, comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career." }
    }
    return value_ranges(amount, definition)
}

function get_hopTest_vals(amount1, amount2, sex) {
    var avgAmount = (Number(amount1) + Number(amount2)) / 2;
    var definition_male = {
        g1: { min: 203, max: Infinity, score: 100, comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career." },
        g2: { min: 182, max: 202, score: 50, comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career." },
        g3: { min: 0, max: 182, score: 0, comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career." }
    };
    var definition_female = {
        g1: { min: 160, max: Infinity, score: 100, comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career." },
        g2: { min: 139, max: 159, score: 50, comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career." },
        g3: { min: 0, max: 138, score: 0, comments: "The abdominal core and hip muscles are major sources of stability for dance movements. Weakness in these areas may cause problems in the back, knee, foot/ankle and shoulder. Therefore, maintaining adequate strength and control in this area are critcial to a healthy dance career." }
    };

    if (sex == 'Male') { return value_ranges(avgAmount, definition_male) }
    else if (sex == 'Female') { return value_ranges(avgAmount, definition_female) }
}

function get_legAvg_vals(rightReleveScore, leftReleveScore, rightBridgeScore, leftBridgeScore, rightHopScore, leftHopScore) {
    var avg = (rightReleveScore + leftReleveScore + rightBridgeScore + leftBridgeScore + rightHopScore + leftHopScore) / 6;
    var definition = {
        g1: { min: 80, max: Infinity, grade: "Excellent", accommodations: "Continue your current training/fitness regimen." },
        g2: { min: 61, max: 79, grade: "Average", accommodations: "Be cautious with large jumps (saut de chat)." },
        g3: { min: 0, max: 60, grade: "Not optimal. Recommend PT consult", accommodations: "Be cautious with all jumps and pirouettes" }
    }
    return value_ranges(avg, definition)
}

function get_passeReleveBalance_vals(amount) {
    var definition = {
        g1: { min: 10, max: Infinity, score: 100, comments: "Good balance is necessary for performing most dance movements. Maintaining and improving good balance will allow a solid foundation to build your dance technique and performance." },
        g2: { min: 6, max: 9, score: 50, comments: "Good balance is necessary for performing most dance movements. Maintaining and improving good balance will allow a solid foundation to build your dance technique and performance." },
        g3: { min: 0, max: 5, score: 0, comments: "Good balance is necessary for performing most dance movements. Maintaining and improving good balance will allow a solid foundation to build your dance technique and performance." }

    }
    return value_ranges(amount, definition)

}
function get_passeFlatFootBalance_vals(amount) {
    var definition = {
        g1: { min: 61, max: Infinity, score: 100, comments: "Good balance is necessary for performing most dance movements. Maintaining and improving good balance will allow a solid foundation to build your dance technique and performance." },
        g2: { min: 30, max: 60, score: 50, accommodations: "No single leg pirouttes", comments: "Good balance is necessary for performing most dance movements. Maintaining and improving good balance will allow a solid foundation to build your dance technique and performance." },
        g3: { min: 0, max: 29, score: 0, comments: "Good balance is necessary for performing most dance movements. Maintaining and improving good balance will allow a solid foundation to build your dance technique and performance." }
    }
    return value_ranges(amount, definition)

}
function get_passeAvg_vals(rightReleve, leftReleve, rightFlatFoot, leftFlatFoot) {
    var avg = (rightReleve + leftReleve + rightFlatFoot + leftFlatFoot) / 4;
    var definition = {
        g1: { min: 80, max: Infinity, grade: "Excellent", accommodations: "Continue your current training/fitness regimen." },
        g2: { min: 61, max: 79, grade: "Average", accommodations: "Be cautious with pirouttes and single leg activities, especially jumps." },
        g3: { min: 0, max: 60, grade: "Not optimal. Recommend PT consult", accommodations: "Be cautious with pirouttes and single leg activities, especially jumps. Recommend consultation with DRP physical therapists for follow up." }
    }
    return value_ranges(avg, definition)

}
function get_ckcuestFunc_vals(amount) {
    var definition = {
        g1: { min: 25, max: Infinity, grade: "Excellent", score: 100, accommodations: "Continue your current training/fitness regimen.", comments: "Rotator cuff, shoulder strength, stability and endurance are critical for efficient port de bras partnering, and floorwork involving the arms. Improving these will lower your risk of injury, improve function and enhance performance." },
        g2: { min: 20, max: 24, grade: "Good", score: 75, accommodations: "Be cautious with activities that require lifting or supporting your body weight with your arms (floor work, partnering, sommersault etc). Your strength needs to improve in order to do these movements safely.", comments: "Rotator cuff, shoulder strength, stability and endurance are critical for efficient port de bras partnering, and floorwork involving the arms. Improving these will lower your risk of injury, improve function and enhance performance." },
        g3: { min: 11, max: 19, grade: "Not optimal, Recommend PT consult", score: 25, accommodations: "Be cautious with all shoulder, neck and arm activities. Recommend consulting with DRP physical therapists to improve the condition of your shoulder girdle and reduce the risk of injury.", comments: "Rotator cuff, shoulder strength, stability and endurance are critical for efficient port de bras partnering, and floorwork involving the arms. Improving these will lower your risk of injury, improve function and enhance performance." },
        g4: { min: 0, max: 10, grade: "Not optimal, Recommend PT consult", score: 0, accommodations: "Be cautious with all shoulder, neck and arm activities. Recommend consulting with DRP physical therapists to improve the condition of your shoulder girdle and reduce the risk of injury.", comments: "Rotator cuff, shoulder strength, stability and endurance are critical for efficient port de bras partnering, and floorwork involving the arms. Improving these will lower your risk of injury, improve function and enhance performance." }
    }
    return value_ranges(amount, definition)


}

function get_bolts_vals(amount) {
    var definition = {
        g1: { min: 40, max: Infinity, grade: "Excellent", score: 100, accommodations: "Good cardiovascular endurance", comments: "The breath hold time (BOLT) test is used to determine relative breathing volume during rest and breathlessness during physical exercise. A lower score means your breathing volume is low and you are likely to develop breathlessness when you perform a physical exercise. Athletes should aim for a BOLT score of 40 seconds or more. Knowing your comfortable BOLT measurement and how to improve this through the correct breathing exercises will significantly improve oxygen delivery to muscles and organs. This will directly correlate to improved athletic performance and general well-being." },
        g2: { min: 20, max: 39, grade: "Average", score: 50, accommodations: "Average Cardiovascular endurance", comments: "The breath hold time (BOLT) test is used to determine relative breathing volume during rest and breathlessness during physical exercise. A lower score means your breathing volume is low and you are likely to develop breathlessness when you perform a physical exercise. Athletes should aim for a BOLT score of 40 seconds or more. Knowing your comfortable BOLT measurement and how to improve this through the correct breathing exercises will significantly improve oxygen delivery to muscles and organs. This will directly correlate to improved athletic performance and general well-being." },
        g3: { min: 0, max: 19, grade: "Not optimal. Recommend PT consult", score: 0, accommodations: "Poor Cardiovascular endurance", comments: "The breath hold time (BOLT) test is used to determine relative breathing volume during rest and breathlessness during physical exercise. A lower score means your breathing volume is low and you are likely to develop breathlessness when you perform a physical exercise. Athletes should aim for a BOLT score of 40 seconds or more. Knowing your comfortable BOLT measurement and how to improve this through the correct breathing exercises will significantly improve oxygen delivery to muscles and organs. This will directly correlate to improved athletic performance and general well-being." }
    }
    return value_ranges(amount, definition)


}

/**
    * Validates the email address follows the proper format for an email address. Prints an alert if not correct
    * 
    * @returns        {Boolean} True if valid email else false
    */

const setError = (element, message) => {

    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');

}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

function validateEmail() {

    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(DRSForm.email.value);

}
/**
 * Checks the entered name only contains alphabetical characters. Prints an alert if not allowed character is entered.
 * 
 * @returns        {Boolean} True if only alphabetical characters else false
 */
function validateFirstName() {
    return /^[A-Za-z\s]+$/.test(DRSForm.firstName.value);
}
/**
 * Checks the entered name only contains alphabetical characters. Prints an alert if not allowed character is entered.
 * 
 * @returns        {Boolean} True if only alphabetical characters else false
 */
function validateLastName() {
    return /^[A-Za-z\s]+$/.test(DRSForm.lastName.value);

}
/**  
 * Functions from validatetRightSingleLegReleves() to validateBolt() checks weather the input value is correct. 
 * If the input value positive it will return true. Otherwise it will alert the user and return false.  
 */

function validatetRightSingleLegReleves() {
    var rightSingleLegReleves = DRSForm.rightSingleLegReleves.value;
    return rightSingleLegReleves >= 0


}

function validateLeftSingleLegReleves() {
    var leftSingleLegReleves = DRSForm.leftSingleLegReleves.value;
    return leftSingleLegReleves >= 0


}

function validatePlank() {
    var plank = DRSForm.plank.value;
    return plank >= 0

}

function validateRightSidePlank() {
    var rightSidePlank = DRSForm.rightSidePlank.value;
    return rightSidePlank >= 0;

}

function validateLeftSidePlank() {
    var leftSidePlank = DRSForm.leftSidePlank.value;
    return leftSidePlank >= 0;

}

function validateRightSingleLegBridges() {
    var rightSingleLegBridges = DRSForm.rightSingleLegBridges.value;
    return rightSingleLegBridges >= 0;

}

function validateLeftSingleLegBridges() {
    var leftSingleLegBridges = DRSForm.leftSingleLegBridges.value;
    return leftSingleLegBridges >= 0;

}

function validateRightHopTest1() {
    var rightHopTest1 = DRSForm.rightHopTest1.value;
    return rightHopTest1 >= 0;

}

function validateLeftHopTest1() {
    var leftHopTest1 = DRSForm.leftHopTest1.value;
    return leftHopTest1 >= 0;

}

function validateRightHopTest2() {
    var rightHopTest2 = DRSForm.rightHopTest2.value;
    return rightHopTest2 >= 0;

}

function validateLeftHopTest2() {
    var leftHopTest2 = DRSForm.leftHopTest2.value;
    return leftHopTest2 >= 0;
}

function validateRightPasseReleveBalance() {
    var rightPasseReleveBalance = DRSForm.rightPasseReleveBalance.value;
    return rightPasseReleveBalance >= 0;

}

function validateLeftPasseReleveBalance() {
    var leftPasseReleveBalance = DRSForm.leftPasseReleveBalance.value;
    return leftPasseReleveBalance >= 0;

}

function validateRightPasseFlatFootBalance() {
    var rightPasseFlatFootBalance = DRSForm.rightPasseFlatFootBalance.value;
    return rightPasseFlatFootBalance >= 0;

}

function validateLeftPasseFlatFootBalance() {
    var leftPasseFlatFootBalance = DRSForm.leftPasseFlatFootBalance.value;
    return leftPasseFlatFootBalance >= 0;

}

function validateCkcuest() {
    var ckcuest = DRSForm.ckcuest.value;
    return ckcuest >= 0;

}

function validateBolt() {
    var bolt = DRSForm.bolt.value;
    return bolt >= 0;

}

/**
 * This function checks weather input value is correct for all input fields. 
 * If the all input filds are true, it will create pdf, otherwise it will alert the user. 
 
*/
function validateForm() {

    var dateInput = document.getElementById("testingdate");
    //console.log(dateInput.toString());
    if (dateInput.value === "") {
        setError(dateInput, 'Date is required');
        //alert("Date must be filled out");
        return false;
    } else {
        setSuccess(dateInput);
    }


    var emailValue = document.getElementById("email").value.trim();
    var email = document.getElementById("email");
    if (emailValue === "") {
        // alert("Email must be filled out");

        setError(email, 'Email is required');
        return false;
    } else if (!validateEmail()) {
        setError(email, 'Not a valid email');
        return false;
    } else {
        setSuccess(email);
    }

    var firstName = document.getElementById("firstName").value.trim();
    var fName = document.getElementById("firstName");
    if (firstName === "") {
        // alert("Email must be filled out");
        // return false;
        setError(fName, 'First name is required');
        return false;
    } else if (!validateFirstName()) {
        setError(fName, 'Not a valid first name');
        return false;
    } else {
        setSuccess(fName);
    }

    var lastName = document.getElementById("lastName").value.trim();
    var lName = document.getElementById("lastName");
    if (lastName === "") {
        // alert("Email must be filled out");
        // return false;
        setError(lName, 'Last name is required');
        return false;
    } else if (!validateLastName()) {
        setError(lName, 'Not a valid last name');
        return false;
    } else {
        setSuccess(lName);
    }

    var company = document.getElementById("company").value.trim();
    var companyVal = document.getElementById("company");
    if (company === "") {
        // alert("Email must be filled out");
        // return false;
        setError(companyVal, 'Company is required');
        return false;
    } else {
        setSuccess(companyVal);
    }

    var rightSingleLegReleves = document.getElementById("rightSingleLegReleves").value.trim();
    var rightSingleLegRelevesVal = document.getElementById("rightSingleLegReleves");
    if (rightSingleLegReleves === "") {
        // alert("Email must be filled out");
        // return false;
        setError(rightSingleLegRelevesVal, 'Right single leg releves is required');
        return false;
    } else if (!validatetRightSingleLegReleves()) {
        setError(rightSingleLegRelevesVal, 'Invalid number, Right Single Leg Releves must be positive number!');
        return false;
    } else {
        setSuccess(rightSingleLegRelevesVal);
    }


    var leftSingleLegReleves = document.getElementById("leftSingleLegReleves").value.trim();
    var leftSingleLegRelevesVal = document.getElementById("leftSingleLegReleves");
    if (leftSingleLegReleves === "") {
        // alert("Email must be filled out");
        // return false;
        setError(leftSingleLegRelevesVal, 'Left single leg releves is required');
        return false;
    } else if (!validatetRightSingleLegReleves()) {
        setError(leftSingleLegRelevesVal, 'Invalid number, Left Single Leg Releves must be positive number!');
        return false;
    } else {
        setSuccess(leftSingleLegRelevesVal);
    }



    var plank = document.getElementById("plank").value.trim();
    var plankVal = document.getElementById("plank");
    if (plank === "") {
        // alert("Email must be filled out");
        // return false;
        setError(plankVal, 'Plank is required');
        return false;
    } else if (!validatePlank()) {
        setError(plankVal, 'Invalid number, Plank must be positive number!');
        return false;
    } else {
        setSuccess(plankVal);
    }

    var rightSidePlank = document.getElementById("rightSidePlank").value.trim();
    var rightSidePlankVal = document.getElementById("rightSidePlank");
    if (rightSidePlank === "") {
        // alert("Email must be filled out");
        // return false;
        setError(rightSidePlankVal, 'Right Side Plank is required');
        return false;
    } else if (!validateRightSidePlank()) {
        setError(rightSidePlankVal, 'Invalid number, Right Side Plank must be positive number!');
        return false;
    } else {
        setSuccess(rightSidePlankVal);
    }



    var leftSidePlank = document.getElementById("leftSidePlank").value.trim();
    var leftSidePlankVal = document.getElementById("leftSidePlank");
    if (leftSidePlank === "") {
        // alert("Email must be filled out");
        // return false;
        setError(leftSidePlankVal, 'Left Side Plank is required');
        return false;
    } else if (!validateLeftSidePlank()) {
        setError(leftSidePlankVal, 'Invalid number, Left Side Plank must be positive number!');
        return false;
    } else {
        setSuccess(leftSidePlankVal);
    }


    var rightSingleLegBridges = document.getElementById("rightSingleLegBridges").value.trim();
    var rightSingleLegBridgesVal = document.getElementById("rightSingleLegBridges");
    if (rightSingleLegBridges === "") {
        // alert("Email must be filled out");
        // return false;
        setError(rightSingleLegBridgesVal, 'Right Single Leg Bridges is required');
        return false;
    } else if (!validateRightSingleLegBridges()) {
        setError(rightSingleLegBridgesVal, 'Invalid number, Right Single Leg Bridges must be positive number!');
        return false;
    } else {
        setSuccess(rightSingleLegBridgesVal);
    }

    var leftSingleLegBridges = document.getElementById("leftSingleLegBridges").value.trim();
    var leftSingleLegBridgesVal = document.getElementById("leftSingleLegBridges");
    if (leftSingleLegBridges === "") {
        // alert("Email must be filled out");
        // return false;
        setError(leftSingleLegBridgesVal, 'Left Single Leg Bridges is required');
        return false;
    } else if (!validateLeftSingleLegBridges()) {
        setError(leftSingleLegBridgesVal, 'Invalid number, Left Single Leg Bridges must be positive number!');
        return false;
    } else {
        setSuccess(leftSingleLegBridgesVal);
    }


    var rightHopTest1 = document.getElementById("rightHopTest1").value.trim();
    var rightHopTest1Val = document.getElementById("rightHopTest1");
    if (rightHopTest1 === "") {
        // alert("Email must be filled out");
        // return false;
        setError(rightHopTest1Val, 'Right Hop Test 1 is required');
        return false;
    } else if (!validateRightHopTest1()) {
        setError(rightHopTest1Val, 'Invalid number, Right Hop Test 1 must be positive number!');
        return false;
    } else {
        setSuccess(rightHopTest1Val);
    }



    var leftHopTest1 = document.getElementById("leftHopTest1").value.trim();
    var leftHopTest1Val = document.getElementById("leftHopTest1");
    if (leftHopTest1 === "") {
        // alert("Email must be filled out");
        // return false;
        setError(leftHopTest1Val, 'Left Hop Test 1 is required');
        return false;
    } else if (!validateLeftHopTest1()) {
        setError(leftHopTest1Val, 'Invalid number, Left Hop Test 1 must be positive number!');
        return false;
    } else {
        setSuccess(leftHopTest1Val);
    }

    var rightHopTest2 = document.getElementById("rightHopTest2").value.trim();
    var rightHopTest2Val = document.getElementById("rightHopTest2");
    if (rightHopTest2 === "") {
        // alert("Email must be filled out");
        // return false;
        setError(rightHopTest2Val, 'Right Hop Test 2 is required');
        return false;
    } else if (!validateRightHopTest2()) {
        setError(rightHopTest2Val, 'Invalid number, Right Hop Test 2 must be positive number!');
        return false;
    } else {
        setSuccess(rightHopTest2Val);
    }

    var leftHopTest2 = document.getElementById("leftHopTest2").value.trim();
    var leftHopTest2Val = document.getElementById("leftHopTest2");
    if (leftHopTest2 === "") {
        // alert("Email must be filled out");
        // return false;
        setError(leftHopTest2Val, 'Left Hop Test 2 is required');
        return false;
    } else if (!validateLeftHopTest2()) {
        setError(leftHopTest2Val, 'Invalid number, Left Hop Test 2 must be positive number!');
        return false;
    } else {
        setSuccess(leftHopTest2Val);
    }

    var rightPasseReleveBalance = document.getElementById("rightPasseReleveBalance").value.trim();
    var rightPasseReleveBalanceVal = document.getElementById("rightPasseReleveBalance");
    if (rightPasseReleveBalance === "") {
        // alert("Email must be filled out");
        // return false;
        setError(rightPasseReleveBalanceVal, 'Right Passe Releve Balance is required');
        return false;
    } else if (!validateRightPasseReleveBalance()) {
        setError(rightPasseReleveBalanceVal, 'Invalid number, Right Passe Releve Balance must be positive number!');
        return false;
    } else {
        setSuccess(rightPasseReleveBalanceVal);
    }


    var leftPasseReleveBalance = document.getElementById("leftPasseReleveBalance").value.trim();
    var leftPasseReleveBalanceVal = document.getElementById("leftPasseReleveBalance");
    if (leftPasseReleveBalance === "") {
        // alert("Email must be filled out");
        // return false;
        setError(leftPasseReleveBalanceVal, 'Left Passe Releve Balance is required');
        return false;
    } else if (!validateLeftPasseReleveBalance()) {
        setError(leftPasseReleveBalanceVal, 'Invalid number, Left Passe Releve Balance must be positive number!');
        return false;
    } else {
        setSuccess(leftPasseReleveBalanceVal);
    }

    var rightPasseFlatFootBalance = document.getElementById("rightPasseFlatFootBalance").value.trim();
    var rightPasseFlatFootBalanceVal = document.getElementById("rightPasseFlatFootBalance");
    if (rightPasseFlatFootBalance === "") {
        // alert("Email must be filled out");
        // return false;
        setError(rightPasseFlatFootBalanceVal, 'Right Passe Flat Foot Balance is required');
        return false;
    } else if (!validateRightPasseFlatFootBalance()) {
        setError(rightPasseFlatFootBalanceVal, 'Right Passe Flat Foot Balance must be positive number!');
        return false;
    } else {
        setSuccess(rightPasseFlatFootBalanceVal);
    }


    var leftPasseFlatFootBalance = document.getElementById("leftPasseFlatFootBalance").value.trim();
    var leftPasseFlatFootBalanceVal = document.getElementById("leftPasseFlatFootBalance");
    if (leftPasseFlatFootBalance === "") {
        // alert("Email must be filled out");
        // return false;
        setError(leftPasseFlatFootBalanceVal, 'Left Passe Flat Foot Balance is required');
        return false;
    } else if (!validateLeftPasseFlatFootBalance()) {
        setError(leftPasseFlatFootBalanceVal, 'Left Passe Flat Foot Balance must be positive number!');
        return false;
    } else {
        setSuccess(leftPasseFlatFootBalanceVal);
    }


    var ckcuest = document.getElementById("ckcuest").value.trim();
    var ckcuestVal = document.getElementById("ckcuest");
    if (ckcuest === "") {
        // alert("Email must be filled out");
        // return false;
        setError(ckcuestVal, 'CKCUEST is required');
        return false;
    } else if (!validateCkcuest()) {
        setError(ckcuestVal, 'CKCUEST must be positive number!');
        return false;
    } else {
        setSuccess(ckcuestVal);
    }

    var bolt = document.getElementById("bolt").value.trim();
    var boltVal = document.getElementById("bolt");
    if (bolt === "") {
        // alert("Email must be filled out");
        // return false;
        setError(boltVal, 'BOLT is required');
        return false;
    } else if (!validateBolt()) {
        setError(boltVal, 'BOLT must be positive number!');
        return false;
    } else {
        setSuccess(boltVal);
    }

    submitMessage();
    pdfMake.createPdf(create_pdf()).print();

}

/*
submitMessage is async function which grap values of all elements from the DRSform 
and fetch it into AWS API gateway by POST method. 
if POST succeed Return:
                    statusCode: 201,
                    body: '',
                    headers: {
                    'Access-Control-Allow-Origin' : '*'
otherwise:                     
                    statusCode: 400,
                    body: 'Bad Request',
                    headers: {
                    'Access-Control-Allow-Origin' : '*'
*/

async function submitMessage() {
    var admin = document.getElementById("testadministrator").value.toString();
    if (admin.length === 0) {
        admin = "not applicable";
        console.log(admin);
    }
    var dateInput = document.getElementById("testingdate").value.toString();
    var email = document.getElementById("email").value;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var ethnicity = document.getElementById("ethnicity").value;
    var sex = document.getElementById("sex").value;
    var company = document.getElementById("company").value;
    var rightSingleLegReleves = document.getElementById("rightSingleLegReleves").value;
    var leftSingleLegReleves = document.getElementById("leftSingleLegReleves").value;
    var plank = document.getElementById("plank").value;
    var rightSidePlank = document.getElementById("rightSidePlank").value;
    var leftSidePlank = document.getElementById("leftSidePlank").value;
    var rightSingleLegBridges = document.getElementById("rightSingleLegBridges").value;
    var leftSingleLegBridges = document.getElementById("leftSingleLegBridges").value;
    var rightHopTest1 = document.getElementById("rightHopTest1").value;
    var leftHopTest1 = document.getElementById("leftHopTest1").value;
    var rightHopTest2 = document.getElementById("rightHopTest2").value;
    var leftHopTest2 = document.getElementById("leftHopTest2").value;
    var rightPasseReleveBalance = document.getElementById("rightPasseReleveBalance").value;
    var leftPasseReleveBalance = document.getElementById("leftPasseReleveBalance").value;
    var rightPasseFlatFootBalance = document.getElementById("rightPasseFlatFootBalance").value;
    var leftPasseFlatFootBalance = document.getElementById("leftPasseFlatFootBalance").value;
    var ckcuest = document.getElementById("ckcuest").value;
    var bolt = document.getElementById("bolt").value;
    var workingLeg = document.getElementById("workingLeg").value;
    var standingLeg = document.getElementById("standingLeg").value;
    var threeMonthInjury = document.getElementById("threeMonthInjury").value;
    var fiveYearInjury = document.getElementById("fiveYearInjury").value;
    fetch('https://kuj8xxyl3g.execute-api.us-east-1.amazonaws.com/prod/drsform', {
        method: 'POST',
        body: JSON.stringify({
            "admin": admin,
            "dateInput": dateInput,
            "email": email,
            "firstName": firstName,
            "lastName": lastName,
            "ethnicity": ethnicity,
            "sex": sex,
            "company": company,
            "rightSingleLegReleves": rightSingleLegReleves,
            "leftSingleLegReleves": leftSingleLegReleves,
            "plank": plank,
            "rightSidePlank": rightSidePlank,
            "leftSidePlank": leftSidePlank,
            "rightSingleLegBridges": rightSingleLegBridges,
            "leftSingleLegBridges": leftSingleLegBridges,
            "rightHopTest1": rightHopTest1,
            "leftHopTest1": leftHopTest1,
            "rightHopTest2": rightHopTest2,
            "leftHopTest2": leftHopTest2,
            "rightPasseReleveBalance": rightPasseReleveBalance,
            "leftPasseReleveBalance": leftPasseReleveBalance,
            "rightPasseFlatFootBalance": rightPasseFlatFootBalance,
            "leftPasseFlatFootBalance": leftPasseFlatFootBalance,
            "ckcuest": ckcuest,
            "bolt": bolt,
            "workingLeg": workingLeg,
            "standingLeg": standingLeg,
            "threeMonthInjury": threeMonthInjury,
            "fiveYearInjury": fiveYearInjury

        })
    })
        .then(response => response.json())
        .then((response) => {
            console.log(response);
            // Add new message to message list
        });
}




function create_pdf() {


    var d = getData()

    var dd = {


        footer: function (currentPage, pageCount) {
            return {
                text: 'Page ' + currentPage.toString() + ' of ' + pageCount,
                italics: true, color: 'grey', fontSize: 10, margin: [15, 10], alignment: 'right'
            }
        },

        header: function (currentPage, pageCount, pageSize) {
            // you can apply any logic and return any valid pdfmake element



            return { image: 'logo', alignment: 'right', width: 100 }
        },

        // background: function (currentPage, pageSize) {
        //     return {
        //         table: {
        //             widths: [pageSize.width - 30],
        //             heights: [pageSize.height - 30],
        //             body: [['']]
        //         },
        //         margin: 10
        //     };
        // },
        content: [
            {
                style: 'headerTable',
                table: {
                    widths: [150, 150],
                    body: [
                        [{ text: d.firstName + ' ' + d.lastName }, { text: d.email }],
                        [{ text: 'Standing Leg: ' + d.standingLeg }, { text: 'Working Leg: ' + d.workingLeg }],
                        [{ text: 'Sex: ' + d.sex }, { text: 'Ethnicity: ' + d.ethnicity }],
                        [{ text: 'Test Date: ' + d.testingdate }, { text: 'Test Administrator: ' + d.testadministrator }],
                        [{ text: '3 Month Injury: ' + d.threeMonthInjury }, { text: '5 Year Injury: ' + d.fiveYearInjury }],

                    ]
                },
                layout: 'noBorders'
            },





            {
                image: 'getReady', width: 500, alignment: 'center'
            },

            { text: 'Patient Instructions', style: 'header', alignment: 'center' },
            { text: '\n' },
            //{ text: 'Patient Instructions', style: 'header', alignment: 'center' },
            { text: 'Read all information on this document', alignment: 'center', bold: true },
            { text: 'Ask your provider about any questions or concerns', alignment: 'center', bold: true },
            { text: 'Pay special attention to all recommendations', alignment: 'center', bold: true },

            { text: 'Recommendations', style: 'header' },
            { text: '\n' },
            {
                ul: [d.plankExtra.accommodations,
                d.passeExtra.accommodations,
                d.ckcuestVar.accommodations,
                d.bolt.accommodations], pageBreak: 'after'

            }

            , { text: 'Test Results:', style: 'header', alignment: 'center' }
            , { text: '\n' }
            , {
                style: 'headerTable',
                color: 'blue',
                fontSize: 12,
                table: {
                    alignment: 'center',
                    widths: [175, 175, 175],
                    body: [
                        ['Dance Ready Score = ' + d.DRSTotal, 'Left Side Score = ' + d.DRSLeft, 'Right Side Score = ' + d.DRSRight]
                    ]
                },
                layout: 'noBorders'
            },

            {
                style: 'resultTable',
                table: {
                    alignment: 'center',
                    headerRows: 1,
                    // dontBreakRows: true,
                    // keepWithHeaderRows: 1,
                    body: [
                        [{ text: 'Test', style: 'tableHeader', bold: true, decoration: 'underline' }, { text: 'Measure', style: 'tableHeader', bold: true, decoration: 'underline' }, { text: 'Score', style: 'tableHeader', bold: true, decoration: 'underline' }, { text: 'Comments', style: 'tableHeader', bold: true, decoration: 'underline' }],
                        [{ text: "Plank" }, { text: "Core Strength" }, d.plank.score, { rowSpan: 2, text: d.rightSingleLegBridges.comments }],
                        [{ text: "Side Plank with Abduction" }, { text: "Hip & Core Strength" }, { style: 'headerTable', color: 'black', layout: 'noBorders', table: { body: [['L', 'R'], [d.leftSidePlank.score, d.rightSidePlank.score]] } }],

                        [{ text: "Single Leg Releves" }, { text: "Calf Strength	" },
                        { style: 'headerTable', color: 'black', layout: 'noBorders', table: { body: [['L', 'R'], [d.leftSingleLegReleves.score, d.rightSingleLegReleves.score]] } },
                        { rowSpan: 3, text: d.rightSingleLegBridges.comments }],



                        [{ text: "Single Leg Bridges" }, { text: "Hamstring & Gluteal Strength	" },
                        { style: 'headerTable', color: 'black', layout: 'noBorders', table: { body: [['L', 'R'], [d.leftSingleLegBridges.score, d.rightSingleLegBridges.score]] } }],


                        [{ text: "Hop Test" }, { text: "Quadriceps & Gluteal Function	" },
                        { style: 'headerTable', color: 'black', layout: 'noBorders', table: { body: [['L', 'R'], [d.leftHopTest.score, d.rightHopTest.score]] } }],



                        [{ text: "Passe Releve Balance" }, { text: "Balance & Priopriception	" },
                        { style: 'headerTable', color: 'black', layout: 'noBorders', table: { body: [['L', 'R'], [d.leftPasseReleveBalance.score, d.rightPasseReleveBalance.score]] } },
                        { rowSpan: 2, text: d.rightSingleLegBridges.comments }],


                        [{ text: "Passe Flat Foot Balance - Eyes Closed" }, { text: "Balance & Priopriception	" },
                        { style: 'headerTable', color: 'black', layout: 'noBorders', table: { body: [['L', 'R'], [d.leftPasseFlatFootBalance.score, d.rightPasseFlatFootBalance.score]] } }],



                        [{ text: "CKCUEST" }, { text: "Shoulder Strength and Stability	" }, d.ckcuestVar.score, { text: d.ckcuestVar.comments }],
                        [{ text: "BOLT Test" }, { text: "Cardiovascular Fitness	" }, d.bolt.score, { text: d.bolt.comments }],
                    ]

                }
            },
            {
                columns: [
                    {
                        width: '*',
                        image: 'logo2',
                        width: 100
                    },


                    {
                        width: 'auto',
                        text: ' \n Prepared by Dr. Sheyi Ojofeitimi, PT, DPT, OCS, CFMT and Dr. Danelle Dickson, PT, DPT, OCS Dance Ready Project: www.danceready.org', alignment: 'left', fontSize: 10, color: 'grey', link: 'www.danceready.org'

                    },


                ]
            }
            // {

            //     table: {
            //         alignment: 'center',
            //         body: [
            //             [{ text: 'Prepared by Dr. Sheyi Ojofeitimi, PT, DPT, OCS, CFMT and Dr. Danelle Dickson, PT, DPT, OCS}:\n\n', alignment: 'left', fontSize: 10, color: 'grey' }],
            //             [{ text: 'Dance Ready Project: www.danceready.org', link: 'www.danceready.org', alignment: 'left', fontSize: 10, color: 'grey', }]

            //             ,
            //         ]
            //     },
            //     style: 'headerTable',
            //     layout: 'noBorders'

            // }
            ,],

        styles: {
            resultTable: {
                margin: [0, 5, 0, 15],
                fontSize: 10
            }, headerTable: {
                margin: [0, 5, 0, 15],
                fontSize: 10,
                color: 'grey',

            },
            header: {
                bold: true,
                fontSize: 15,
                decoration: 'underline'
            }
        }
        ,
        defaultStyle: {
            fontSize: 12,
        },

        images: {
            logo2: 'https://drs-form-image-hosting.s3.amazonaws.com/Logo2.png',
            getReady: 'https://drs-form-image-hosting.s3.amazonaws.com/getReady.png',
            logo: 'https://drs-form-image-hosting.s3.amazonaws.com/logo.png'

        }
    }



    return dd
    // pdfMake.createPdf(d).print();

}
    // pdfMake.createPdf(dd).open();
