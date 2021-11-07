user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = user_name;

function infinity()
{
    window.location = "Infinity.html";
}

function logout()
{
    localStorage.clear();
    window.location = "index.html";
}