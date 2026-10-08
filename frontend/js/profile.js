const userId =
    localStorage.getItem("userId");
if (!userId) {
    window.location.href =
        "index.html";
} else {
    loadProfile();
}
async function loadProfile() {
    try {
        const response =
            await fetch(
                `https://greenpath-rxv3.onrender.com/api/profile/${userId}`
            );
        const result =
            await response.json();
        if (!result.success) {
            window.location.href =
                "index.html";
            return;
        }
        const user =
            result.user;
        document.getElementById(
            "profileName"
        ).textContent =
            user.name;
        document.getElementById(
            "fullName"
        ).textContent =
            user.name;
        document.getElementById(
            "phoneNumber"
        ).textContent =
            user.phone;
        document.getElementById(
            "emailAddress"
        ).textContent =
            user.email || "Not provided";
        document.getElementById(
            "joinedDate"
        ).textContent =
            formatDate(user.created_at);
    } catch (error) {
        console.error(
            "Profile loading error:",
            error
        );
    }
}
function formatDate(dateString) {
    if (!dateString) {
        return "Not available";
    }
    const date =
        new Date(dateString);
    return date.toLocaleDateString(
        "en-IN",
        {
            day: "2-digit",
            month: "long",
            year: "numeric"
        }
    );
}
function logout() {
    localStorage.removeItem(
        "loggedIn"
    );
    localStorage.removeItem(
        "userId"
    );
    localStorage.removeItem(
        "loggedInUser"
    );
    localStorage.removeItem(
        "userPhone"
    );
    localStorage.removeItem(
        "userEmail"
    );
    localStorage.removeItem(
        "recentlyViewed"
    );
    window.location.href =
        "index.html";
}