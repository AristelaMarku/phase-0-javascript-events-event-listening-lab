function addingEventListener() {
    const input=document.getElementById('input');
    function alertFUnction() {
        alert('I was clicked!')
    }
    input.addEventListener('click',alertFUnction)
}
addingEventListener()