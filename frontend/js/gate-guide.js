/* =========================================
   GREENPATH - GATE GUIDE
========================================= */

const TOTAL_STEPS = 13;

const OFFICIAL_GATE_URL =
    "https://gate2027.iitm.ac.in/";

let currentStep = 0;


/* =========================================
   GATE GUIDE STEPS
========================================= */

const steps = [

    {
        number: "1",
        title: "Gp:Step1",

        text: `
            <p>
                Open the official GATE website.
            </p>

            <p>
                Give the link that directs to the
                GATE page in new tab on the laptop.
            </p>

            <a
                class="official-link"
                href="${OFFICIAL_GATE_URL}"
                target="_blank"
                rel="noopener noreferrer"
            >
                🔗 Open Official GATE Website
                <span>↗</span>
            </a>
        `,

        image: "step-01.png",
        visual: "Image 1 - Official GATE website"
    },

    {
        number: "2",
        title: "Gp:Step 2",

        text: `
            <p>
                Click on <strong>Apply</strong>.
            </p>

            <p>
                Directly it shows as you see
                at the form visual.
            </p>
        `,

        image: "step-02.png",
        visual: "Step 2 - Click Apply"
    },

    {
        number: "3",
        title: "Gp:Step3",

        text: `
            <p>
                Click on
                <strong>
                    Proceed to GATE XXXX Registration
                </strong>.
            </p>

            <p>
                🍃 Scroll down there appears
                <strong>
                    "Proceed to GATE xxxx Registration"
                </strong>
                in green color box.
            </p>
        `,

        image: "step-03.png",
        visual: "Step 3 - Proceed to GATE Registration"
    },

    {
        number: "4",
        title: "Gp:Step4",

        text: `
            <p>
                Click on go box after the
                wait completes.
            </p>

            <p>
                🍃 Appears in burgundy red color
                box with <strong>"Go"</strong> text.
            </p>
        `,

        image: "step-04.png",
        visual: "Step 4 - Go box"
    },

    {
        number: "5",
        title: "Gp:Step5",

        text: `
            <p>
                Click on
                <strong>
                    Continue with DigiLocker
                </strong>.
            </p>

            <p>
                🍃 It is under the Digital Identity
                down. You can see in burgundy red
                box with text
                <strong>
                    "Continue with DigiLocker"
                </strong>.
            </p>
        `,

        image: "step-05.png",
        visual: "Step 5 - Continue with DigiLocker"
    },

    {
        number: "6",
        title: "Gp:Step6",

        text: `
            <p>
                Tick the read instructions box
                and click on <strong>CONTINUE</strong>.
            </p>

            <p>
                🍃 In the DigiLocker setup
                instructions box at the down
                you can see in burgundy red box
                with text <strong>"CONTINUE"</strong>.
            </p>
        `,

        image: "step-06.png",
        visual: "Step 6 - DigiLocker setup"
    },

    {
        number: "7A",
        progressNumber: 7,
        title: "Gp:Step 7A - Mer Pehchaan / Sign In",

        text: `
            <p>
                Type your mobile number
                (as you logged with in DigiLocker).
            </p>

            <p>
                Then click <strong>Sign in</strong>.
            </p>

            <p>
                🍃 It's mandatory to type your
                number as you registered with
                DigiLocker.
            </p>

            <p>
                🍃 Type your mobile inside the
                text box where you can see
                <strong>Mobile*</strong>
                with grey colour.
            </p>
        `,

        image: "step-07-mobile.png",
        visual: "Step 7A - Mer Pehchaan / Sign In"
    },

    {
        number: "7B",
        progressNumber: 7,
        title: "Gp:Step 7B - Verify OTP",

        text: `
            <p>
                Type the OTP sent to your mobile
                number.and then click
                <strong>Sign In</strong>.
            </p>

            <p>
                🍃 Check your phone number
                (1234) and the email
                (abcdef@gmail.com).
                given in the light green box.
            </p>

            <p>
                🍃 You will get the OTP to the
                number you registered.
            </p>

            <p>
                🍁 Sometimes if you get email
                verification too then you can
                type your OTP there.
            </p>
        `,

        image: "step-07-otp.png",
        visual: "Step 7B - Verify OTP"
    },

    {
        number: "8",
        title: "Gp:Step8",

        text: `
            <ul class="step-list">

                <li>
                    Tick the select all box.
                </li>

                <li>
                    Tick the DigiLocker drive box.
                </li>

                <li>
                    Click Allow.
                </li>

            </ul>

            <p>
                🍃 It's mandatory to tick select
                all that appears at the first aspect.
            </p>

            <p>
                🍃 DigiLocker is located below
                Academic Bank of Credits Details.
            </p>

            <p>
                🍃 Look at the 8th box for
                DigiLocker drive.
            </p>
        `,

        image: "step-08.png",
        visual: "Step 8 - DigiLocker permission"
    },

    {
        number: "9",
        title: "Gp:Step9",

        text: `
            <ul class="step-list">

                <li>
                    Read and Tick the declaration box.
                </li>

                <li>
                    Click burgundy red box with text
                    <strong>
                        "START FILLING GATE xxxx APPLICATION FORM"
                    </strong>.
                </li>

            </ul>

            <p>
                🍃 Appears at the left down.
            </p>
        `,

        image: "step-09.png",
        visual: "Step 9 - Start filling application"
    },

    {
        number: "10a",
        progressNumber: 10,
        title: "Step 10a - Documents Page",

        text: `
            <p>
                Fill the details by correctly.
                If any red caution appears
                go through it properly.
            </p>

            <h3 class="sub-heading">
                DOCUMENTS PAGE
            </h3>

            <p>
                Gp:first two are already filled.
            </p>

            <h4>10a)</h4>

            <ul class="step-list">

                <li>
                    Click on select country.
                </li>

                <li>
                    Click India.
                </li>

            </ul>

            <p>
                🍃 You can see list of countries.
                India is at the first box.
            </p>
        `,

        image: "step-10a.png",
        visual: "Step 10a - Select Country"
    },

    {
        number: "10b",
        progressNumber: 10,
        title: "Step 10b - Category",

        text: `
            <h4>10b)</h4>

            <p>
                Tick your Category.
            </p>
        `,

        image: "step-10b.png",
        visual: "Step 10b - Select Category"
    },

    {
        number: "10c",
        progressNumber: 10,
        title: "Step 10c - PwD",

        text: `
            <h4>10c)</h4>

            <p>
                If any PwD Tick Yes.
            </p>

            <p>
                If no tick No.
            </p>
        `,

        image: "step-10c.png",
        visual: "Step 10c - PwD selection"
    },

    {
        number: "10d",
        progressNumber: 10,
        title: "Step 10d - Capture Photograph",

        text: `
            <h4>10d)</h4>

            <ul class="step-list">

                <li>
                    Click on the instructions before
                    you Click CAPTURE.
                </li>

                <li>
                    According to the instructions
                    you have adjust your face position.
                </li>

                <li>
                    In Picture 1 Click CAPTURE
                    then during photo capturing
                    Click Verify.
                </li>

            </ul>

            <p>
                🍃 During face capture you can see
                the Verify option down.
            </p>

            <p>
                🍁 Do exactly same for the next
                Picture 2, Picture 3 too.
            </p>
        `,

        image: "step-10d.png",
        visual: "Step 10d - Capture photograph"
    },

    {
        number: "10e",
        progressNumber: 10,
        title: "Step 10e - Upload Photograph",

        text: `
            <h4>10e)</h4>

            <p>
                Click <strong>UPLOAD PHOTOGRAPH</strong>.
            </p>

            <div class="device-box">

                <h4>
                    💻 IF LAPTOP
                </h4>

                <p>
                    (follow the below instructions).
                </p>

                <ol class="step-list">

                    <li>
                        First send your passport photo
                        to your laptop from your Mobile.
                    </li>

                    <li>
                        Then save it as JPEG file.
                    </li>

                    <li>
                        Now go to the GATE page.
                    </li>

                    <li>
                        Click ADD FILE.
                    </li>

                    <li>
                        It then directs to the file manager
                        there you can select your jpeg folder
                        (as you saved).
                    </li>

                    <li>
                        After selecting it directs to
                        the gate page.
                    </li>

                </ol>

                <p>
                    <strong>
                        AS PER THE GATE REQUIREMENTS:
                    </strong>
                    you should resize your photo
                    as per requirements.
                </p>

            </div>

            <div class="device-box">

                <h4>
                    📱 IF MOBILE
                </h4>

                <p>
                    (follow the below instructions).
                </p>

            </div>
        `,

        image: "step-10e.png",
        visual: "Step 10e - Upload photograph"
    },

    {
        number: "10f",
        progressNumber: 10,
        title: "Step 10f - Upload Signature",

        text: `
            <h4>10f)</h4>

            <p>
                Click <strong>UPLOAD SIGNATURE</strong>.
            </p>

            <p>
                🍃 Follow same instructions as we
                followed in UPLOAD PHOTOGRAPH.
            </p>
        `,

        image: "step-10f.png",
        visual: "Step 10f - Upload signature"
    },

    {
        number: "10g",
        progressNumber: 10,
        title: "Step 10g - Source of Information",

        text: `
            <h4>10g)</h4>

            <p>
                Click Select source of information.
            </p>

            <p>
                🍃 Select how you know about GATE exam.
            </p>
        `,

        image: "step-10g.png",
        visual: "Step 10g - Source of information"
    },

    {
        number: "10h",
        progressNumber: 10,
        title: "Step 10h - Purpose of Exam",

        text: `
            <h4>10h)</h4>

            <ul class="step-list">

                <li>
                    Click Select purpose of exam.
                </li>

            </ul>

            <p>
                🍃 Select from the three for what
                the purpose you choose GATE exam.
            </p>

            <p class="save-next">
                ☘️ Click SAVE.
            </p>

            <p class="save-next">
                ☘️ Click NEXT.
            </p>
        `,

        image: "step-10h.png",
        visual: "Step 10h - Purpose of exam"
    },

    {
        number: "11a",
        progressNumber: 11,
        title: "Step 11a - EXAM PAGE",

        text: `
            <h4>11a)</h4>

            <ul class="step-list">

                <li>
                    Select one
                    (if you appear only for one exam).
                </li>

                <li>
                    Select two
                    (if you appear for two exams).
                </li>

            </ul>
        `,

        image: "step-11a.png",
        visual: "Step 11a - Exam page"
    },

    {
        number: "11b",
        progressNumber: 11,
        title: "Step 11b - GATE Paper",

        text: `
            <h4>11b)</h4>

            <ul class="step-list">

                <li>
                    Click on Select GATE Paper 1.
                </li>

                <li>
                    Select your department.
                </li>

            </ul>

            <p>
                🍃 You can scroll down and up
                to look for your exam paper.
            </p>
        `,

        image: "step-11b.png",
        visual: "Step 11b - GATE Paper"
    },

    {
        number: "11c",
        progressNumber: 11,
        title: "Step 11c - Exam City 1",

        text: `
            <h4>11c)</h4>

            <p>
                Click Select Exam City 1.
            </p>
        `,

        image: "step-11.png",
        visual: "Step 11c - Exam City 1"
    },

    {
        number: "11d",
        progressNumber: 11,
        title: "Step 11d - Exam City 2",

        text: `
            <h4>11d)</h4>

            <p>
                Click Select Exam City 2.
            </p>
        `,

        image: "step-11.png",
        visual: "Step 11d - Exam City 2"
    },

    {
        number: "11e",
        progressNumber: 11,
        title: "Step 11e - Exam City 3",

        text: `
            <h4>11e)</h4>

            <p>
                Click Select Exam City 3.
            </p>
        `,

        image: "step-11.png",
        visual: "Step 11e - Exam City 3"
    },

    {
        number: "11f",
        progressNumber: 11,
        title: "Step 11f - Exam City 4",

        text: `
            <h4>11f)</h4>

            <p>
                Click Select Exam City 4.
            </p>
        `,

        image: "step-11.png",
        visual: "Step 11f - Exam City 4"
    },

    {
        number: "11g",
        progressNumber: 11,
        title: "Step 11g - Exam City 5",

        text: `
            <h4>11g)</h4>

            <p>
                Click Select Exam City 5.
            </p>
        `,

        image: "step-11.png",
        visual: "Step 11g - Exam City 5"
    },

    {
        number: "11h",
        progressNumber: 11,
        title: "Step 11h - Exam City 6",

        text: `
            <h4>11h)</h4>

            <p>
                Click Select Exam City 6.
            </p>

            <p class="save-next">
                ☘️ Click SAVE.
            </p>

            <p class="save-next">
                ☘️ Click NEXT.
            </p>
        `,

        image: "step-11.png",
        visual: "Step 11h - Exam City 6"
    },

    {
        number: "12a",
        progressNumber: 12,
        title: "Step 12a - PIN Code",

        text: `
            <h4>12a)</h4>

            <p>
                Enter the PIN Code of your college.
            </p>
        `,

        image: "step-12a.png",
        visual: "Step 12a - PIN Code"
    },

    {
        number: "12b",
        progressNumber: 12,
        title: "Step 12b - College Name",

        text: `
            <h4>12b)</h4>

            <ul class="step-list">

                <li>
                    Click on College Name.
                </li>

                <li>
                    Select your college.
                </li>

            </ul>

            <p>
                🍃 Scroll to look for your college.
            </p>
        `,

        image: "step-12b.png",
        visual: "Step 12b - College Name"
    },

    {
        number: "12c",
        progressNumber: 12,
        title: "Step 12c - Degree",

        text: `
            <h4>12c)</h4>

            <ul class="step-list">

                <li>
                    Select your Degree.
                </li>

                <li>
                    Select your current studying Degree.
                </li>

            </ul>
        `,

        image: "step-12c.png",
        visual: "Step 12c - Degree"
    },

    {
        number: "12d",
        progressNumber: 12,
        title: "Step 12d",

        text: `
            <h4>12d)select your respective Deparment</h4>
        `,

        image: "step-12d.png",
        visual: "Step 12d"
    },

    {
        number: "12e",
        progressNumber: 12,
        title: "Step 12e - Graduation",

        text: `
            <h4>12e)</h4>

            <ul class="step-list">

                <li>
                    Select Yes
                    (if you have completed Graduation).
                </li>

                <li>
                    Select No
                    (if you are studying in
                    3rd year, 4th year).
                </li>

            </ul>
        `,

        image: "step-12e.png",
        visual: "Step 12e - Graduation"
    },

    {
        number: "12f",
        progressNumber: 12,
        title: "Step 12f - Qualifying Degree Year",

        text: `
            <h4>12f)</h4>

            <p>
                Select your qualifying Degree year.
            </p>

            <p class="save-next">
                ☘️ Click SAVE.
            </p>

            <p class="save-next">
                ☘️ Click NEXT.
            </p>
        `,

        image: "step-12f.png",
        visual: "Step 12f - Qualifying Degree Year"
    },

    {
        number: "13a",
        progressNumber: 13,
        title: "Step 13a - Country",

        text: `
            <h4>13a)</h4>

            <ul class="step-list">
                <li>
                    Select Country.
                </li>
            </ul>

            <p>
                🍃 Select Indian.
            </p>
        `,

        image: "step-13a.png",
        visual: "Step 13a - Country"
    },

    {
        number: "13b",
        progressNumber: 13,
        title: "Step 13b - State",

        text: `
            <h4>13b)</h4>

            <ul class="step-list">
                <li>
                    Select your State.
                </li>
            </ul>
        `,

        image: "step-13b.png",
        visual: "Step 13b - State"
    },

    {
        number: "13c",
        progressNumber: 13,
        title: "Step 13c - ID Proof",

        text: `
            <h4>13c)</h4>

            <ul class="step-list">
                <li>
                    Select your ID Proof.
                </li>
            </ul>

            <p>
                🍃 Prefer to select Aadhaar ID.
            </p>
        `,

        image: "step-13c.png",
        visual: "Step 13c - ID Proof"
    },

    {
        number: "13d",
        progressNumber: 13,
        title: "Step 13d - Parent/Guardian Name",

        text: `
            <h4>13d)</h4>

            <p>
                Type Name of Parent/Guardian.
            </p>
        `,

        image: "step-13d.png",
        visual: "Step 13d - Parent/Guardian Name"
    },

    {
        number: "13e",
        progressNumber: 13,
        title: "Step 13e - Relationship Type",

        text: `
            <h4>13e)</h4>

            <p>
                Select Relationship type.
            </p>
        `,

        image: "step-13e.png",
        visual: "Step 13e - Relationship Type"
    },

    {
        number: "13f",
        progressNumber: 13,
        title: "Step 13f - Country of Parent/Guardian",

        text: `
            <h4>13f)</h4>

            <p>
                Select Country of Parents/Guardian.
            </p>
        `,

        image: "step-13f.png",
        visual: "Step 13f - Country of Parent/Guardian"
    },

    {
        number: "13g",
        progressNumber: 13,
        title: "Step 13g - Mobile Country Code",

        text: `
            <h4>13g)</h4>

            <ul class="step-list">
                <li>
                    Select mobile country code.
                </li>
            </ul>

            <p>
                🍃 Select +91(IN).
            </p>
        `,

        image: "step-13g.png",
        visual: "Step 13g - Mobile Country Code"
    },

    {
        number: "13h",
        progressNumber: 13,
        title: "Step 13h - Parent/Guardian Mobile",

        text: `
            <h4>13h)</h4>

            <p>
                Type Parent/Guardian Mobile No.
            </p>
        `,

        image: "step-13h.png",
        visual: "Step 13h - Parent/Guardian Mobile"
    },

    {
        number: "13i",
        progressNumber: 13,
        title: "Step 13i - Relation Country",

        text: `
            <h4>13i)</h4>

            <p>
                Select Relation Country.
            </p>

            <p class="save-next">
                ☘️ Click SAVE.
            </p>

            <p class="save-next">
                ☘️ CHECK EVERY DETAILS.
            </p>

            <p class="save-next">
                ☘️ Click REVIEW AND SUBMIT.
            </p>

            <p>
                Gp: directs to the
                <strong>payment page</strong>.
            </p>
        `,

        image: "step-13i.png",
        visual: "Step 13i - Relation Country"
    }

];


/* =========================================
   START GUIDE
========================================= */

function continueToGuide() {

    document
        .getElementById("privacyScreen")
        .classList.add("hidden");

    document
        .getElementById("gateGuide")
        .classList.remove("hidden");

    showNextStep();
}


/* =========================================
   SHOW NEXT STEP
========================================= */

function showNextStep() {

    if (currentStep >= steps.length) {
        return;
    }

    const step =
        steps[currentStep];

    currentStep++;

    const stepElement =
        document.createElement("article");

    stepElement.className =
        "guide-step";

    stepElement.innerHTML = `

        <div class="step-heading">

            <div class="step-number">
                ${step.number}
            </div>

            <h2>
                ${step.title}
            </h2>

        </div>

        <div class="step-body">

            ${step.text}

        </div>

    `;

    document
        .getElementById("guideSteps")
        .appendChild(stepElement);


    const guideImage =
        document.getElementById(
            "guideImage"
        );

    guideImage.src =
        "../assets/forms/gate/" +
        step.image;

    guideImage.alt =
        step.visual;


    document
        .getElementById("visualText")
        .textContent =
        step.visual;


    const progressNumber =
        step.progressNumber ||
        Number(step.number);

    document
        .getElementById("progressText")
        .textContent =
        `Step ${progressNumber} of ${TOTAL_STEPS}`;

    document
        .getElementById("progressFill")
        .style.width =
        (
            progressNumber /
            TOTAL_STEPS *
            100
        ) + "%";


    const nextButton =
        document.getElementById(
            "nextButton"
        );

    if (
        currentStep >= steps.length
    ) {

        nextButton.textContent =
            "Guide Completed ✓";

        nextButton.disabled = true;
    }


    setTimeout(
        function () {

            stepElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        },
        100
    );
}


/* =========================================
   BACK BUTTON
========================================= */

function goBack() {

    window.history.back();

}


/* =========================================
   ASK GREENPATH QUESTIONS
========================================= */

const questions = [

    "How to resize the photo?",

    "About GATE one paper",

    "About GATE two papers",

    "Am I eligible?",

    "What documents are required?",

    "What photo is required?"

];


/* =========================================
   SETUP QUESTION BUTTONS
========================================= */

function setupQuestionButtons() {

    const container =
        document.getElementById(
            "questionButtons"
        );

    if (!container) {
        return;
    }

    container.innerHTML = "";

    questions.forEach(
        function (question) {

            const button =
                document.createElement(
                    "button"
                );

            button.type = "button";

            button.className =
                "question-button";

            button.textContent =
                question;

            button.onclick =
                function () {

                    answerQuestion(
                        question
                    );

                };

            container.appendChild(
                button
            );

        }
    );
}


/* =========================================
   ASK QUESTION
========================================= */

function askQuestion() {

    const input =
        document.getElementById(
            "questionInput"
        );

    if (!input) {
        return;
    }

    const question =
        input.value.trim();

    if (!question) {
        return;
    }

    answerQuestion(question);

    input.value = "";
}


/* =========================================
   ANSWERS
========================================= */

function answerQuestion(question) {

    const lowerQuestion =
        question.toLowerCase();

    let answer =
        "GreenPath could not find an answer for this question yet. Try asking about photo resizing, GATE papers, eligibility, documents or photograph requirements.";


    if (
        lowerQuestion.includes("resize")
        ||
        lowerQuestion.includes("resizing")
    ) {

        answer = `
            <p>
                <strong>To resize your GATE photo:</strong>
            </p>

            <ol class="answer-list">

                <li>
                    Open your passport-size photograph in an image editor.
                </li>

                <li>
                    Choose the <strong>Resize</strong> option.
                </li>

                <li>
                    Change the width and height according to the GATE photograph upload requirements.
                </li>

                <li>
                    Save the resized photograph as a JPEG/JPG file.
                </li>

                <li>
                    Check the final width, height and file size before uploading.
                </li>

            </ol>

            <p>
                🍃 GreenPath can also show you where to resize the photograph and how to check the dimensions.
            </p>
        `;

    }

    else if (
        lowerQuestion.includes("one paper")
        ||
        lowerQuestion.includes("one exam")
    ) {

        answer = `
            <p>
                <strong>If you are appearing for only one GATE paper:</strong>
            </p>

            <ol class="answer-list">

                <li>
                    Select <strong>"One"</strong> in the exam page.
                </li>

                <li>
                    Continue to the GATE Paper selection section.
                </li>

                <li>
                    Choose your required paper.
                </li>

            </ol>

            <p>
                GreenPath shows the exact place where you have to select it.
            </p>
        `;

    }

    else if (
        lowerQuestion.includes("two paper")
        ||
        lowerQuestion.includes("two papers")
        ||
        lowerQuestion.includes("two exam")
    ) {

        answer = `
            <p>
                <strong>If you are appearing for two GATE papers:</strong>
            </p>

            <ol class="answer-list">

                <li>
                    Select <strong>"Two"</strong> in the exam page.
                </li>

                <li>
                    Select the required GATE papers according to the available paper combination.
                </li>

            </ol>

            <p>
                GreenPath shows the exact place where you have to make the selection.
            </p>
        `;

    }

    else if (
        lowerQuestion.includes("eligible")
        ||
        lowerQuestion.includes("eligibility")
    ) {

        answer = `
            <p>
                <strong>GATE eligibility:</strong>
            </p>

            <ul class="answer-list">

                <li>
                    Eligibility depends on your qualifying degree.
                </li>

                <li>
                    It also depends on your current year/status of study.
                </li>

                <li>
                    Check the eligibility requirement for the specific GATE examination year.
                </li>

            </ul>

            <p>
                🍃 GreenPath can guide you through the eligibility information before you start filling the application.
            </p>
        `;

    }

    else if (
        lowerQuestion.includes("document")
        ||
        lowerQuestion.includes("documents")
    ) {

        answer = `
            <p>
                <strong>Before filling the GATE application:</strong>
            </p>

            <ul class="answer-list">

                <li>
                    Keep the required documents ready.
                </li>

                <li>
                    Keep the required personal information ready.
                </li>

                <li>
                    The exact documents can depend on your application details and category.
                </li>

            </ul>

            <p>
                🍃 GreenPath guides you through the relevant document requirement when you reach that part of the application.
            </p>
        `;

    }

    else if (
        lowerQuestion.includes("photo")
        ||
        lowerQuestion.includes("photograph")
    ) {

        answer = `
            <p>
                <strong>For the GATE photograph:</strong>
            </p>

            <ul class="answer-list">

                <li>
                    Use a clear recent passport-style photograph.
                </li>

                <li>
                    Follow the photograph background requirements.
                </li>

                <li>
                    Follow the required dimensions.
                </li>

                <li>
                    Follow the required file type and file size.
                </li>

                <li>
                    Check all upload requirements before uploading.
                </li>

            </ul>

            <p>
                🍃 GreenPath can guide you through resizing and uploading the photograph step by step.
            </p>
        `;

    }

    else if (
        lowerQuestion.includes("mer pehchaan")
        ||
        lowerQuestion.includes("merpehchaan")
    ) {

        answer = `
            <p>
                <strong>Mer Pehchaan sign-in:</strong>
            </p>

            <ol class="answer-list">

                <li>
                    Enter the mobile number registered with DigiLocker.
                </li>

                <li>
                    Click <strong>Sign in</strong>.
                </li>

                <li>
                    GreenPath then guides you to the OTP verification screen.
                </li>

                <li>
                    Check that the displayed phone number and email are correct.
                </li>

            </ol>
        `;

    }

    else if (
        lowerQuestion.includes("otp")
        ||
        lowerQuestion.includes("verification")
    ) {

        answer = `
            <p>
                <strong>For OTP verification:</strong>
            </p>

            <ol class="answer-list">

                <li>
                    Check the phone number shown in the verification screen.
                </li>

                <li>
                    The OTP is sent to the registered number.
                </li>

                <li>
                    Enter the OTP in the OTP field.
                </li>

                <li>
                    Click <strong>Sign In</strong>.
                </li>

            </ol>

            <p>
                🍁 If email verification is also shown, enter the email OTP in the corresponding field.
            </p>
        `;

    }

    else if (
        lowerQuestion.includes("digilocker")
    ) {

        answer = `
            <p>
                <strong>DigiLocker:</strong>
            </p>

            <ol class="answer-list">

                <li>
                    Continue with DigiLocker.
                </li>

                <li>
                    Read the DigiLocker setup instructions.
                </li>

                <li>
                    Tick the required boxes.
                </li>

                <li>
                    Click <strong>CONTINUE</strong>.
                </li>

                <li>
                    Select the required DigiLocker option.
                </li>

                <li>
                    Click <strong>Allow</strong>.
                </li>

            </ol>
        `;

    }

    else if (
        lowerQuestion.includes("category")
    ) {

        answer = `
            <p>
                <strong>Category:</strong>
            </p>

            <ol class="answer-list">

                <li>
                    Find the Category section.
                </li>

                <li>
                    Select the category that applies to you.
                </li>

            </ol>

            <p>
                🍃 GreenPath shows the exact location of the Category selection in the visual guide.
            </p>
        `;

    }

    else if (
        lowerQuestion.includes("pwd")
        ||
        lowerQuestion.includes("pwbd")
    ) {

        answer = `
            <p>
                <strong>PwD section:</strong>
            </p>

            <ul class="answer-list">

                <li>
                    If you have the applicable PwD status, select <strong>Yes</strong>.
                </li>

                <li>
                    If not, select <strong>No</strong>.
                </li>

            </ul>

            <p>
                🍃 GreenPath shows the exact location of this selection on the application page.
            </p>
        `;

    }

    else if (
        lowerQuestion.includes("college")
    ) {

        answer = `
            <p>
                <strong>College details:</strong>
            </p>

            <ol class="answer-list">

                <li>
                    Enter the PIN Code of your college.
                </li>

                <li>
                    Open <strong>College Name</strong>.
                </li>

                <li>
                    Select your college from the list.
                </li>

            </ol>

            <p>
                🍃 GreenPath shows where each field appears on the application page.
            </p>
        `;

    }

    else if (
        lowerQuestion.includes("gate paper")
        ||
        lowerQuestion.includes("paper selection")
    ) {

        answer = `
            <p>
                <strong>To select your GATE paper:</strong>
            </p>

            <ol class="answer-list">

                <li>
                    Click <strong>Select GATE Paper 1</strong>.
                </li>

                <li>
                    Select your department/paper from the available list.
                </li>

                <li>
                    Scroll through the list to find the required paper.
                </li>

                <li>
                    If you selected two papers, follow the second-paper selection shown by the application.
                </li>

            </ol>
        `;

    }

    else if (
        lowerQuestion.includes("exam city")
        ||
        lowerQuestion.includes("city")
    ) {

        answer = `
            <p>
                <strong>Exam City:</strong>
            </p>

            <ol class="answer-list">

                <li>
                    Select <strong>Exam City 1</strong>.
                </li>

                <li>
                    Continue with the other available exam-city selections as required.
                </li>

                <li>
                    Check your selections.
                </li>

                <li>
                    Click <strong>SAVE</strong>.
                </li>

                <li>
                    Click <strong>NEXT</strong> where shown.
                </li>

            </ol>
        `;

    }

    else {

        answer = `
            <p>
                <strong>GreenPath can currently help you with:</strong>
            </p>

            <ul class="answer-list">

                <li>GATE eligibility</li>
                <li>Photo requirements</li>
                <li>Photo resizing</li>
                <li>One or two GATE papers</li>
                <li>Documents</li>
                <li>DigiLocker</li>
                <li>Mer Pehchaan</li>
                <li>OTP verification</li>
                <li>Category</li>
                <li>PwD</li>
                <li>College details</li>
                <li>GATE paper selection</li>
                <li>Exam city selection</li>

            </ul>

            <p>
                Try asking one of these questions.
            </p>
        `;
    }


    showAnswer(
        answer.trim()
    );
}


/* =========================================
   DISPLAY ANSWER
========================================= */

function showAnswer(answer) {

    const answerBox =
        document.getElementById(
            "chatAnswer"
        );

    if (!answerBox) {
        return;
    }

    answerBox.innerHTML =
        answer.trim();

    answerBox.style.display =
        "block";
}


/* =========================================
   ENTER KEY
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        setupQuestionButtons();

        const input =
            document.getElementById(
                "questionInput"
            );

        if (input) {

            input.addEventListener(
                "keydown",
                function (event) {

                    if (
                        event.key === "Enter"
                    ) {

                        event.preventDefault();

                        askQuestion();

                    }

                }
            );

        }

    }
);