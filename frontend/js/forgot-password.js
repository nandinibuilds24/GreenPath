const forgotPasswordForm =
    document.getElementById(
        "forgotPasswordForm"
    );

forgotPasswordForm.addEventListener(
    "submit",
    async function (event) {

        event.preventDefault();

        const email =
            document.getElementById("email")
                .value
                .trim()
                .toLowerCase();

        const message =
            document.getElementById(
                "forgotMessage"
            );

        if (!email) {

            message.textContent =
                "Please enter your email address.";

            return;
        }

        message.textContent =
            "Sending OTP...";

        try {

            const response =
                await fetch(
                    "http://127.0.0.1:5000/api/send-otp",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json"
                        },

                        body: JSON.stringify({
                            email: email
                        })
                    }
                );

            const result =
                await response.json();

            if (result.success) {

                localStorage.setItem(
                    "resetEmail",
                    email
                );

                localStorage.removeItem(
                    "otpVerified"
                );

                message.textContent =
                    "OTP sent to your email.";

                setTimeout(
                    function () {

                        window.location.href =
                            "verify-otp.html";

                    },
                    800
                );

            } else {

                message.textContent =
                    result.message;

            }

        } catch (error) {

            console.error(
                "Forgot password error:",
                error
            );

            message.textContent =
                "Unable to connect to GreenPath server.";

        }

    }
);