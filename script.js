//your JS code here. If required.
const form = document.querySelector("form");
 
 form.addEventListener("submit", (event) => {
     event.preventDefault();
 
     const fontSize = document.getElementById("fontsize").value;
     const fontColor = document.getElementById("fontcolor").value;
 
     document.cookie = `fontsize=${fontSize};max-age=${60 * 60 * 24 * 30}`;
     document.cookie = `fontcolor=${fontColor};max-age=${60 * 60 * 24 * 30}`;
 
     document.documentElement.style.setProperty("--fontsize", `${fontSize}px`);
     document.documentElement.style.setProperty("--fontcolor", `${fontColor}`);
 });
 
 const cookieString = document.cookie;
 const cookies = cookieString.split(";");
 
 for (const cookie of cookies) {
     const [name, value] = cookie.split("=");
     if (name.trim() === "fontsize") {
         document.documentElement.style.setProperty("--fontsize", `${value}px`);
     } else if (name.trim() === "fontcolor") {
         document.documentElement.style.setProperty("--fontcolor", `${value}`);
     }
 }