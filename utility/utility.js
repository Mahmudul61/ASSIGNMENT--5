function getNumericTextById(id){
    const Text = parseInt(document.getElementById(id).innerText);
    return Text;
}
function getInnerTextById(id){
    const Text = document.getElementById(id).innerText;
    return Text;
}

function setInnerText(id , value){
    document.getElementById(id).innerText = value
}