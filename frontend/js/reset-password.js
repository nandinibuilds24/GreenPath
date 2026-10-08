const resetPasswordForm =
    document.getElementById(
        "resetPasswordForm"
    );
resetPasswordForm.addEventListener(
    "submit",
    async function (event) {
        event.preventDefault();
        const newPassword =
            document.getElementById(
                "newPassword"
            ).value;
        const confirmPassword =
            document.getElementById(
                "confirmPassword"
            ).value;
        const email =
            localStorage.getItem(
                "resetEmail"
            );
        const otpVerified =
            localStorage.getItem(
                "otpVerified"
            );
        const message =
            document.getElementById(
                "resetMessage"
            );
        if (!email) {
            message.textContent =
                "Reset session expired. Please request a new OTP.";
            return;
        }
        if (otpVerified !== "true") {
            message.textContent =
                "Please verify the OTP first.";
            return;
        }
        if (newPassword.length < 6) {
            message.textContent =
                "Password must contain at least 6 characters.";
            return;
        }
        if (
            newPassword !==
            confirmPassword
        ) {
            message.textContent =
                "Passwords do not match.";
            return;
        }
        message.textContent =
            "Resetting password...";
        try {
            const response =
                await fetch(
                    "https://greenpath-rxv3.onrender.com/api/reset-password",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type":
                                "application/json"
                        },
                        body: JSON.stringify({
                            email: email,
                            password: newPassword
                        })
                    }
                );
            const result =
                await response.json();
            if (!result.success) {
                message.textContent =
                    result.message;
                return;
            }
            localStorage.removeItem(
                "resetEmail"
            );
            localStorage.removeItem(
                "otpVerified"
            );
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
            message.textContent =
                "Password reset successfully!";
            setTimeout(
                function () {
                    window.location.href =
                        "index.html";
                },
                1200
            );
        } catch (error) {
            console.error(
                "Reset password error:",
                error
            );
            message.textContent =
                "Unable to connect to GreenPath server.";
        }
    }
);