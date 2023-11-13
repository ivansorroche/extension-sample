document.addEventListener("DOMContentLoaded", function(){

    document.querySelector('#btn').addEventListener('click', function() {
        
        const text = document.querySelector('#texto').value;
        console.log(text, 'text')
        document.querySelector('#result').innerHTML = upper(text)
    })
   
    function upper(text) {
        return text.toUpperCase()
    }
})