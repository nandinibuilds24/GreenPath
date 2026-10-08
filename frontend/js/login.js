const passwordInput =
    document.getElementById("password");
const showPassword =
    document.getElementById("showPassword");
showPassword.addEventListener(
    "click",
    function () {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            showPassword.textContent = "🙈";
        } else {
            passwordInput.type = "password";
            showPassword.textContent = "👁";
        }
    }
);
const loginForm =
    document.getElementById("loginForm");
loginForm.addEventListener(
    "submit",
    async function (event) {
        event.preventDefault();
        const phone =
            document.getElementById("phone")
                .value
                .trim();
        const password =
            document.getElementById("password")
                .value;
        const message =
            document.getElementById("loginMessage");
        if (!/^\d{10}$/.test(phone)) {
            message.textContent =
                "Enter a valid 10-digit phone number.";
            return;
        }
        message.textContent =
            "Logging in...";
        try {
            const response =
                await fetch(
                    "https://greenpath-rxv3.onrender.com/api/login",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type":
                                "application/json"
                        },
                        body: JSON.stringify({
                            phone: phone,
                            password: password
                        })
                    }
                );
            const result =
                await response.json();
            if (result.success) {
                localStorage.setItem(
                    "loggedIn",
                    "true"
                );
                localStorage.setItem(
                    "userId",
                    result.user.id
                );
                localStorage.setItem(
                    "loggedInUser",
                    result.user.name
                );
                localStorage.setItem(
                    "userPhone",
                    result.user.phone
                );
                localStorage.setItem(
                    "userEmail",
                    result.user.email || ""
                );
                message.textContent =
                    "Login successful!";
                setTimeout(function () {
                    window.location.href =
                        "dashboard.html";
                }, 700);
            } else {
                message.textContent =
                    result.message;
            }
        } catch (error) {
            console.error(
                "Login error:",
                error
            );
            message.textContent =
                "Unable to connect to GreenPath server.";
        }
    }
);