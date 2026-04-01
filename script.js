function register() {
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;

    if (name === "" || password === "") {
        alert("Please enter name and password");
        return;
    }

    localStorage.setItem("username", name);
    localStorage.setItem("password", password);

    alert("Registered Successfully ✅");
}

function login() {
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;

    let storedName = localStorage.getItem("username");
    let storedPassword = localStorage.getItem("password");

    if (name === storedName && password === storedPassword) {
        alert("Login Successful 🚀");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid Credentials ❌");
    }
}
