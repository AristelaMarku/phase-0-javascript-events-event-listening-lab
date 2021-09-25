function addingEventListener(clickFunction) {
    const input=document.getElementById('input');
    input.addEventListener('click',clickFunction)
}

function alertFUnction() {
    alert('I was clicked!')
}
addingEventListener(alertFUnction())