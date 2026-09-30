const steps = [
    {
        number: 1,
        title: 'Tick "Update" box',
        text: '🍃 Appears in green color, look at the visual guide and tick there.',
        image: "assets/forms/aadhaar/step-01.png"
    },
    {
        number: 2,
        title: 'Tick "Resident Indian" box',
        text: '🍃 Appears in green color, look at the visual guide and tick there.',
        image: "assets/forms/aadhaar/step-02.png"
    },
    {
        number: 3,
        title: 'Enter your "Aadhaar Number" xxxx xxxx xxxx',
        text: '🍃 In the Aadhaar card you can see a 12 digit number.',
        image: "assets/forms/aadhaar/step-03.png"
    },
    {
        number: "3b",
        title: 'Tick "Mobile" box',
        text: '🍃 Appears in green color, look at the visual guide and tick there.',
        image: "assets/forms/aadhaar/step-3b.png"
    },
    {
        number: 4,
        title: "Write your name as per Aadhaar card.",
        text: '🍃 In the Aadhaar card, look at the center. You can see your name.',
        image: "assets/forms/aadhaar/step-04.png"
    },
    {
        number: 5,
        title: "Not mandatory",
        text: "🍁 Not mandatory.",
        image: "assets/forms/aadhaar/step-05.png"
    },
    {
        number: 6,
        title: "Tick your gender.",
        text: '🍃 Tick any one from the three arrows.',
        image: "assets/forms/aadhaar/step-06.png"
    },
    {
        number: 7,
        title: "Write your age and DOB.",
        text:
            '• Write your age.\n' +
            '• Write your "DOB" as per the Aadhaar card.\n\n' +
            '🍃 Below the name in Aadhaar card you can see the DOB.',
        image: "assets/forms/aadhaar/step-07.png"
    },
    {
        number: 8,
        title: "Write parent / guardian details.",
        text:
            "• Write your mother's name and Aadhaar number.\n" +
            "• Write your father's name and Aadhaar number.\n" +
            "• If both are not available, write guardian name and Aadhaar number.\n\n" +
            '🍃 Write as per their Aadhaar card details.',
        image: "assets/forms/aadhaar/step-08.png"
    },
    {
        number: 9,
        title: 'Write your "Address" details.',
        text: '🍃 Turn your Aadhaar card. There you can see the address details.',
        image: "assets/forms/aadhaar/step-09.png"
    },
    {
        number: 10,
        title: "Not mandatory.",
        text: "Not mandatory.",
        image: "assets/forms/aadhaar/step-10.png"
    },
    {
        number: 11,
        title: "Complete the signature and date.",
        text:
            "• At the applicant signature, do your signature.\n" +
            "• At the signature of parent/guardian, tell them to do the sign.\n" +
            "• Write the date and time.\n\n" +
            "🍃 Current date and time.\n\n" +
            "Successfully the form is filled!!!!",
        image: "assets/forms/aadhaar/step-11.png"
    }
];

const TOTAL_STEPS = steps.length;

let currentStep = 0;

/* =========================================================
   PRIVACY → GUIDE
========================================================= */

function continueToGuide() {
    document.getElementById("privacyScreen").classList.add("hidden");
    document.getElementById("aadhaarGuide").classList.remove("hidden");

    if (currentStep === 0) {
        showNextStep();
    }
}

/* =========================================================
   SHOW NEXT STEP
========================================================= */

function showNextStep() {
    if (currentStep >= steps.length) {
        return;
    }

    const step = steps[currentStep];

    const stepCard = document.createElement("article");

    stepCard.className = "step-card";

    stepCard.innerHTML = `
        <span class="step-number">
            Step ${step.number}
        </span>

        <h2>
            ${makeBoldQuotedWords(step.title)}
        </h2>

        <p>
            ${formatStepText(step.text)}
        </p>
    `;

    document.getElementById("guideSteps").appendChild(stepCard);

    /* =====================================================
       CHANGE VISUAL GUIDE IMAGE
    ===================================================== */

    const guideImage = document.getElementById("guideImage");

    guideImage.style.opacity = "0";

    setTimeout(function () {
        guideImage.src = step.image;
        guideImage.alt = `Aadhaar form Step ${step.number}`;
        guideImage.style.opacity = "1";
    }, 150);

    /* =====================================================
       VISUAL GUIDE TEXT
    ===================================================== */

    document.getElementById("visualText").textContent =
        `Visual Guide for Step ${step.number}`;

    /* =====================================================
       PROGRESS
    ===================================================== */

    document.getElementById("progressText").textContent =
        `Step ${step.number} of ${TOTAL_STEPS}`;

    const progress =
        ((currentStep + 1) / TOTAL_STEPS) * 100;

    document.getElementById("progressFill").style.width =
        `${progress}%`;

    currentStep++;

    /* =====================================================
       FINISH
    ===================================================== */

    if (currentStep >= steps.length) {
        const nextButton = document.getElementById("nextButton");

        nextButton.textContent = "Guide Completed ✓";

        nextButton.disabled = true;
    }

    /* =====================================================
       SCROLL TO NEW STEP
    ===================================================== */

    setTimeout(function () {
        stepCard.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }, 100);
}

/* =========================================================
   MAKE WORDS INSIDE " " BOLD
========================================================= */

function makeBoldQuotedWords(text) {
    return text.replace(
        /"([^"]+)"/g,
        '<strong>"$1"</strong>'
    );
}

/* =========================================================
   FORMAT STEP TEXT
========================================================= */

function formatStepText(text) {
    let formatted = text.replace(/\n/g, "<br>");

    formatted = formatted.replace(
        /"([^"]+)"/g,
        '<strong>"$1"</strong>'
    );

    return formatted;
}

/* =========================================================
   ASK GREENPATH
========================================================= */

function setupQuestionButtons() {
    const buttons = document.querySelectorAll(
        ".question-button"
    );

    buttons.forEach(function (button) {
        button.addEventListener(
            "click",
            function () {
                const answer = button.dataset.answer;

                if (answer) {
                    alert(answer);
                }
            }
        );
    });
}

setupQuestionButtons();

/* =========================================================
   BACK
========================================================= */

function goBack() {
    window.history.back();
}