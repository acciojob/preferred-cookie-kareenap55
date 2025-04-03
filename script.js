//your JS code here. If required.
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + "; path=/" + expires;
}

// Function to get a cookie value
function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Apply saved preferences on page load
document.addEventListener("DOMContentLoaded", function () {
    let savedFontSize = getCookie("fontsize");
    let savedFontColor = getCookie("fontcolor");

    if (savedFontSize) {
        document.documentElement.style.setProperty('--fontsize', savedFontSize + "px");
        document.getElementById("fontsize").value = savedFontSize;
    }
    
    if (savedFontColor) {
        document.documentElement.style.setProperty('--fontcolor', savedFontColor);
        document.getElementById("fontcolor").value = savedFontColor;
    }
});

// Save preferences on form submission
document.getElementById("settings-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    let fontSize = document.getElementById("fontsize").value;
    let fontColor = document.getElementById("fontcolor").value;

    // Save preferences in cookies for 7 days
    setCookie("fontsize", fontSize, 7);
    setCookie("fontcolor", fontColor, 7);

    // Apply styles immediately
    document.documentElement.style.setProperty('--fontsize', fontSize + "px");
    document.documentElement.style.setProperty('--fontcolor', fontColor);
});
