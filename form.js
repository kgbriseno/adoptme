const selectElement = document.getElementById('select');
//syntax for add event listener
selectElement.addEventListener("change", optionButton)

function optionButton(){
    //.selected if chosen
    if (document.getElementById("email").selected == true){
        inputBox = "<input type='email' ><br>" ;
        inputLabel = "<label>Enter your email address</label><br>";
        commentbox = inputLabel + inputBox;
        document.getElementById("result").innerHTML = commentbox;
    } else if (document.getElementById("phone").selected == true) {
        //type has presets not just random name
        inputBox = "<input type='text' ><br>" ;
        inputLabel = "<label>Enter your phone number</label><br>";
        commentbox = inputLabel + inputBox;
        document.getElementById("result").innerHTML = commentbox;
    } else {
        
    }
}
