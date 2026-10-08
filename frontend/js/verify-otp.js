const otpForm =
    document.getElementById(
        "otpForm"
    );
otpForm.addEventListener(
    "submit",
    async function (event) {
        event.preventDefault();
        const otp =
            document.getElementById("otp")
                .value
                .trim();
        const email =
            localStorage.getItem(
                "resetEmail"
            );
        const message =
            document.getElementById(
                "otpMessage"
            );
        if (!email) {
            message.textContent =
                "Reset session expired. Please start again.";
            return;
        }
        if (!/^\d{6}$/.test(otp)) {
            message.textContent =
                "Please enter a valid 6-digit OTP.";
            return;
        }
        message.textContent =
            "Verifying OTP...";
        try {
            const response =
                await fetch(
                    "https://greenpath-rxv3.onrender.com/api/verify-otp",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type":
                                "application/json"
                        },
                        body: JSON.stringify({
                            email: email,
                            otp: otp
                        })
                    }
                );
            const result =
                await response.json();
            if (result.success) {
                localStorage.setItem(
                    "otpVerified",
                    "true"
                );
                message.textContent =
                    "OTP verified successfully!";
                setTimeout(
                    function () {
                        window.location.href =
                            "reset-password.html";
                    },
                    700
                );
            } else {
                message.textContent =
                    result.message;
            }
        } catch (error) {
            console.error(
                "OTP error:",
                error
            );
            message.textContent =
                "Unable to connect to GreenPath server.";
        }
    }
);