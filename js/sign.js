if (document.getElementById("email").value=="") {
    alert("Tapez un email valable pour avoir une réponse.");
    document.getElementById("email").focus();
    return false;
}