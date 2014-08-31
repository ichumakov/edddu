function switchRegister() {
    1 == toggled ? (window.scrollTo(0, 0), document.getElementById("menum").className = "menum", toggled=0) : (window.scrollTo(0, 0), document.getElementById("menum").className = "menum hidem", toggled=!0)
}