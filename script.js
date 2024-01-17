function checkpassword()
{
    var pass = document.getElementById("pass").value;
    var confirm = document.getElementById("confirm").value;

    if (pass != confirm)
    {
        alert(" Password do not match!");
        return false;
    }
    return true;
}