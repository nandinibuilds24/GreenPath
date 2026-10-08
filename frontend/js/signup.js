const signupForm =
    document.getElementById("signupForm");
signupForm.addEventListener(
    "submit",
    async function (event) {
        event.preventDefault();
        const name =
            document.getElementById("name")
                .value
                .trim();
        const phone =
            document.getElementById("phone")
                .value
                .trim();
        const email =
            document.getElementById("email")
                .value
                .trim()
                .toLowerCase();
        const password =
            document.getElementById("password")
                .value;
        const confirmPassword =
            document.getElementById(
                "confirmPassword"
            ).value;
        const message =
            document.getElementById(
                "signupMessage"
            );
        if (!name) {
            message.textContent =
                "Please enter your name.";
            return;
        }
        if (
            !/^\d{10}$/.test(phone)
        ) {
            message.textContent =
                "Please enter a valid 10-digit phone number.";
            return;
        }
        if (!email) {
            message.textContent =
                "Please enter your email address.";
            return;
        }
        if (password.length < 6) {
            message.textContent =
                "Password must contain at least 6 characters.";
            return;
        }
        if (
            password !== confirmPassword
        ) {
            message.textContent =
                "Passwords do not match.";
            return;
        }
        message.textContent =
            "Creating your account...";
        try {
            const response =
                await fetch(
                    "https://greenpath-rxv3.onrender.com/api/signup",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type":
                                "application/json"
                        },
                        body: JSON.stringify({
                            name: name,
                            phone: phone,
                            email: email,
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
                    result.user.email
                );
                message.textContent =
                    "Account created successfully!";
                setTimeout(
                    function () {
                        window.location.href =
                            "profile.html";
                    },
                    800
                );
            } else {
                message.textContent =
                    result.message;
            }
        } catch (error) {
            console.error(
                "Signup error:",
                error
            );
            message.textContent =
                "Unable to connect to GreenPath server.";
        }
    }
);