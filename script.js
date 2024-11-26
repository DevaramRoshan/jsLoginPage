const form = document.getElementById("form");
const Name = document.getElementById("name");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const cpass = document.getElementById("cpass");
const gender = document.getElementById("gender");
const otp_show = document.getElementById("otp_show");
const verify = document.getElementById("verify_button");
const verify_input = document.getElementById("verify_input");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const password = pass.value;
    const cpassword = cpass.value;
    if (password == cpassword) {
        const otp = Math.floor(Math.random() * 1000000);
        otp_show.textContent = otp;
        verify.addEventListener("click", () => {
            if (verify_input.value == otp) {
                const obj = {
                    name: Name.value,
                    email: email.value,
                    password: pass.value,
                    gender: gender.value
                }
                for (x in obj) {
                    localStorage.setItem(`${x}`, `${obj[x]}`);
                }
                window.location.href = "./login.html";
            }
            else {
                alert("enter the otp properly showed in captcha");
            }
        })
    }
    else {
        alert("password mismatch");
    }
})




