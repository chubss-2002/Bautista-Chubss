
document.addEventListener("DOMContentLoaded", () => {


    window.showLogin = function () {
        document.getElementById("login").scrollIntoView({ behavior: "smooth" });
    };


    const loginLabel = document.getElementById("loginLabel");
    const signupLabel = document.getElementById("signupLabel");
    const switchSlider = document.getElementById("switchSlider");

    const nameField = document.getElementById("nameField");
    const roleField = document.getElementById("roleField");
    const signInBtn = document.getElementById("signInBtn");
    const formContainer = document.getElementById("formContainer");

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");


    let isLogin = true;


    const demoUser = {
        email: "admin123@gmail.com",
        password: "admin123"
    };


    loginLabel.addEventListener("click", () => {
        isLogin = true;
        loginLabel.classList.add("active");
        signupLabel.classList.remove("active");
        switchSlider.style.transform = "translateX(0%)";
        nameField.classList.add("hidden");
        roleField.classList.add("hidden");
        signInBtn.textContent = "Sign In";
    });


    signupLabel.addEventListener("click", () => {
        isLogin = false;
        signupLabel.classList.add("active");
        loginLabel.classList.remove("active");
        switchSlider.style.transform = "translateX(100%)";
        nameField.classList.remove("hidden");
        roleField.classList.remove("hidden");
        signInBtn.textContent = "Create Account";
    });


    formContainer.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (isLogin) {

            if (email === demoUser.email && password === demoUser.password) {
                alert("Login successful! Redirecting to dashboard...");
                window.location.href = "admin.html";
            } else {
                alert("Invalid email or password. Please try again.");
            }
        } else {

            const fullname = document.getElementById("fullname").value.trim();
            const role = document.getElementById("role").value;
            if (fullname && email && password && role) {
                alert(`Account created for ${fullname} as ${role}! Redirecting to dashboard...`);
                window.location.href = "admin.html";
            } else {
                alert("Please fill out all fields to sign up.");
            }
        }
    });

});


function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("show");
}


const dashboardData = {
    stressLevel: ["Low", "Moderate", "High", "Very High"],
    moods: ["Happy 😊", "Sad 😔", "Angry 😡", "Relaxed 😌", "Anxious 😰"],
    dailyTips: [
        "Take a 10-minute walk",
        "Practice deep breathing",
        "Listen to calming music",
        "Write down your thoughts",
        "Drink water and stay hydrated"
    ]
};


const stressCard = document.querySelector(".stats .card:nth-child(1) p");
const moodCard = document.querySelector(".stats .card:nth-child(2) p");
const tipCard = document.querySelector(".stats .card:nth-child(3) p");


function updateDashboard() {
    if (!stressCard || !moodCard || !tipCard) return;

    const randomStress = dashboardData.stressLevel[Math.floor(Math.random() * dashboardData.stressLevel.length)];
    const randomMood = dashboardData.moods[Math.floor(Math.random() * dashboardData.moods.length)];
    const randomTip = dashboardData.dailyTips[Math.floor(Math.random() * dashboardData.dailyTips.length)];

    stressCard.textContent = randomStress;
    moodCard.textContent = randomMood;
    tipCard.textContent = randomTip;
}


setInterval(updateDashboard, 10000);


updateDashboard();

const resourceLinks = document.querySelectorAll(".resources ul li a");

resourceLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        alert(`You clicked on: ${link.textContent}`);
    });
});
