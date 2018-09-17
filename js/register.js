if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(res =>{
      console.log("Service worker registration successful: " + res.scope)
    })
    .catch(error =>{
      console.log("Registration failed: " + error)
    })
}
