function redirectBasedOnOS() {
  const userAgent = window.navigator.userAgent;
  console.log("userAgent is ", userAgent);
  if (userAgent.indexOf("Mac") !== -1) {
    window.location.href = "https://sea-lion-app-aqugv.ondigitalocean.app/";
  }
}

window.onload = redirectBasedOnOS();
