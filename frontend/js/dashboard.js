document.addEventListener("DOMContentLoaded", function () {
    loadUserName();
    loadRecentlyViewed();
    setupSearch();
});

function loadUserName() {
    const userName = localStorage.getItem("loggedInUser");
    const name = userName || "User";

    const dashboardName = document.getElementById("userName");
    const welcomeName = document.getElementById("welcomeName");

    if (dashboardName) {
        dashboardName.textContent = name;
    }

    if (welcomeName) {
        welcomeName.textContent = name;
    }
}

function openProfile() {
    window.location.href = "profile.html";
}

function openService(service) {
    if (service === "government") {
        addRecentlyViewed(
            "Government Services",
            "services/government-services.html"
        );

        window.location.href = "services/government-services.html";
    }

    else if (service === "exams") {
        addRecentlyViewed(
            "Exams",
            "services/exams.html"
        );

        window.location.href = "services/exams.html";
    }

    else if (service === "banking") {
        addRecentlyViewed(
            "Banking",
            "services/banking.html"
        );

        window.location.href = "services/banking.html";
    }

    else if (service === "education") {
        addRecentlyViewed(
            "Education & Learning",
            "services/education.html"
        );

        window.location.href = "services/education.html";
    }

    else if (service === "social") {
        addRecentlyViewed(
            "Social Media",
            "services/social-media.html"
        );

        window.location.href = "services/social-media.html";
    }

    else if (service === "safety") {
        addRecentlyViewed(
            "Safety Apps",
            "services/safety-apps.html"
        );

        window.location.href = "services/safety-apps.html";
    }
}

function addRecentlyViewed(name, page) {
    let recent = JSON.parse(
        localStorage.getItem("recentlyViewed")
    ) || [];

    recent = recent.filter(function (item) {
        return item.name !== name;
    });

    recent.unshift({
        name: name,
        page: page
    });

    recent = recent.slice(0, 6);

    localStorage.setItem(
        "recentlyViewed",
        JSON.stringify(recent)
    );
}

function loadRecentlyViewed() {
    const container = document.getElementById(
        "recentlyViewed"
    );

    if (!container) {
        return;
    }

    const recent = JSON.parse(
        localStorage.getItem("recentlyViewed")
    ) || [];

    if (recent.length === 0) {
        container.innerHTML = `
            <div class="empty-recent">
                <span>
                    🕘
                </span>

                <p>
                    No recently viewed services
                </p>
            </div>
        `;

        return;
    }

    container.innerHTML = "";

    recent.forEach(function (item) {
        const card = document.createElement("div");

        card.className = "recent-card";

        card.innerHTML = `
            <div class="recent-icon">
                📄
            </div>

            <div class="recent-info">
                <h3>
                    ${item.name}
                </h3>

                <p>
                    Continue guidance
                </p>
            </div>

            <span class="recent-arrow">
                →
            </span>
        `;

        card.addEventListener(
            "click",
            function () {
                window.location.href = item.page;
            }
        );

        container.appendChild(card);
    });
}

function setupSearch() {
    const searchInput = document.getElementById(
        "serviceSearch"
    );

    const results = document.getElementById(
        "searchResults"
    );

    if (!searchInput || !results) {
        return;
    }

    const services = [
        /* GOVERNMENT */

        {
            name: "Government Services",
            keywords: [
                "government",
                "govt",
                "government service"
            ],
            page: "services/government-services.html"
        },

        {
            name: "Aadhaar",
            keywords: [
                "aadhaar",
                "aadhar"
            ],
            page: "services/government-services.html"
        },

        {
            name: "Aadhaar Mobile Number Update",
            keywords: [
                "aadhaar mobile",
                "aadhar mobile",
                "mobile number update"
            ],
            page: "services/government-services.html"
        },

        {
            name: "PAN",
            keywords: [
                "pan",
                "pan card"
            ],
            page: "services/government-services.html"
        },

        /* EXAMS */

        {
            name: "Exams",
            keywords: [
                "exam",
                "exams",
                "registration"
            ],
            page: "services/exams.html"
        },

        {
            name: "GATE",
            keywords: [
                "gate"
            ],
            page: "services/exams.html"
        },

        {
            name: "TCS NQT",
            keywords: [
                "tcs",
                "nqt"
            ],
            page: "services/exams.html"
        },

        {
            name: "PCEP",
            keywords: [
                "pcep",
                "python"
            ],
            page: "services/exams.html"
        },

        {
            name: "PCAP",
            keywords: [
                "pcap",
                "python"
            ],
            page: "services/exams.html"
        },

        {
            name: "PCPP1",
            keywords: [
                "pcpp1",
                "python"
            ],
            page: "services/exams.html"
        },

        /* BANKING */

        {
            name: "Banking",
            keywords: [
                "bank",
                "banking",
                "account",
                "deposit"
            ],
            page: "services/banking.html"
        },

        /* EDUCATION */

        {
            name: "Education & Learning",
            keywords: [
                "education",
                "learning",
                "student"
            ],
            page: "services/education.html"
        },

        /* SOCIAL MEDIA */

        {
            name: "Social Media",
            keywords: [
                "social",
                "instagram",
                "snapchat",
                "whatsapp"
            ],
            page: "services/social-media.html"
        },

        /* SAFETY */

        {
            name: "Safety Apps",
            keywords: [
                "safety",
                "security",
                "safe"
            ],
            page: "services/safety-apps.html"
        }
    ];

    searchInput.addEventListener(
        "input",
        function () {
            const query = searchInput.value
                .trim()
                .toLowerCase();

            results.innerHTML = "";

            if (!query) {
                results.style.display = "none";
                return;
            }

            const matches = services.filter(
                function (service) {
                    return (
                        service.name
                            .toLowerCase()
                            .includes(query)
                        ||
                        service.keywords.some(
                            function (keyword) {
                                return keyword
                                    .toLowerCase()
                                    .includes(query);
                            }
                        )
                    );
                }
            );

            if (matches.length === 0) {
                results.innerHTML = `
                    <div class="no-results">
                        No matching service found.
                    </div>
                `;

                results.style.display = "block";
                return;
            }

            matches.forEach(function (service) {
                const result = document.createElement(
                    "div"
                );

                result.className =
                    "search-result-item";

                result.innerHTML = `
                    <span class="search-result-icon">
                        🔎
                    </span>

                    <span>
                        ${service.name}
                    </span>
                `;

                result.addEventListener(
                    "click",
                    function () {
                        addRecentlyViewed(
                            service.name,
                            service.page
                        );

                        window.location.href =
                            service.page;
                    }
                );

                results.appendChild(result);
            });

            results.style.display = "block";
        }
    );

    document.addEventListener(
        "click",
        function (event) {
            if (
                !searchInput.contains(event.target)
                &&
                !results.contains(event.target)
            ) {
                results.style.display = "none";
            }
        }
    );
}