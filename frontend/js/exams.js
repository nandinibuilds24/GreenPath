document.addEventListener("DOMContentLoaded", function () {
    console.log("GreenPath Exams page loaded.");
});

/*
    GATE CARD
    Exams page → GATE Guide
*/

function openGateGuide() {
    /*
        Save GATE as recently viewed.
    */

    let recent = JSON.parse(
        localStorage.getItem("recentlyViewed")
    ) || [];

    /*
        Remove old GATE entry
        so the newest one appears first.
    */

    recent = recent.filter(function (item) {
        return item.name !== "GATE Guide";
    });

    /*
        Add GATE Guide to the beginning.
    */

    recent.unshift({
        name: "GATE Guide",
        page: "../guidance/gate-guide.html"
    });

    /*
        Keep only the latest 6 items.
    */

    recent = recent.slice(0, 6);

    /*
        Save recently viewed data.
    */

    localStorage.setItem(
        "recentlyViewed",
        JSON.stringify(recent)
    );

    /*
        Open the GATE Guide.
    */

    window.location.href =
        "../guidance/gate-guide.html";
}

/*
    Other exam cards
*/

function openExamGuide(examName) {
    alert(
        examName +
        " guidance will be added soon."
    );
}

/*
    Back to previous page
*/

function goBack() {
    window.history.back();
}