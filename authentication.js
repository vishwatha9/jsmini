function validate() {
  const uname = document.getElementById("floatingInputName").value;
  const email = document.getElementById("floatingInputEmail").value;
  const consent = document.getElementById("exampleCheck");
  const password = document.getElementById("floatingPassword").value;

  let success = true;
  if (uname.length < 3) {
    document.getElementById("validateInput").innerHTML =
      " User name can't be less than 3 characters";
    success = false;
  }
  if (!email.includes("@") || !email.includes(".com")) {
    document.getElementById("validateEmail").innerHTML =
      "Invalid email address";
    //   console.log("invalid email address");
    success = false;
  }
  if (password.length < 7) {
    document.getElementById("validatePassword").innerHTML =
      "Please provide a stronger password";
    success = false;
  }

  if (!consent.checked) {
    document.getElementById("validateConsent").innerHTML =
      "Please accept the terms and conditions";
    // console.log("please accept the terms and conditions");
    success = false;
  }
  if (success) {
    console.log(success);
    document.getElementById("validateInput").innerHTML = "";
    document.getElementById("validateEmail").innerHTML = "";
    document.getElementById("validatePassword").innerHTML = "";
    document.getElementById("validateConsent").innerHTML = "";
    alert("Regeistered successfully!");
  } else {
    alert("Regeistered failed!");
  }
}
function passwordCheck() {
  const password = document.getElementById("floatingPassword").value;
  if (password.length < 7) {
    document.getElementById("validatePassword").innerHTML =
      "Password should be have atleast 8 characters";
  } else {
    document.getElementById("validatePassword").innerHTML = "";
  }
  console.log(password);
}
