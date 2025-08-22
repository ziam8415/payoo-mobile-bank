document.getElementById("btn-login").addEventListener("click", function () {
  const mobileNumber = 123456;
  const pin = 1234;

  const inputMobileNumber = parseInt(
    document.getElementById("input-mobile-number").value
  );
  const inputPin = parseInt(document.getElementById("input-pin").value);
  if (inputMobileNumber === mobileNumber && inputPin === pin) {
    window.location.href = "./home.html";
  } else {
    alert("invalid credential");
  }
});
