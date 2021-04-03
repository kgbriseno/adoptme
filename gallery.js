var photos = []; //declares an empty array to sotre image elements
var fileNames = []; //declare an empty element to store image file name
var imageList = []; //declare an empty array to store html list that contain an image
var image; // declare an empty variable to store the assembled image list codes
var openList; //declare a variable to contain open list tag
var closeList = "</li>";//declare a varibale to contain close list tag

var openCaptionTag= "<p class='captions'>";
var closeCaptionTag= "</p>";

var openAnchor= "<a href ='#/'class = 'lightbox-toggle'>";
var closeAnchor= "</a>";

var openDescTag= "<p id='descriptions' onclick= 'openBox()'>";
var closeDescTag= "</p>";

var captionTexts = ['Michael', 'Tristen', 'Honey', 'Salt', 'Pepper', 'Kiki', 'Zoe', 'Milo', 'Gavin', 'Gus'];
var descTexts = ['kid-friendly', 'not kid-friendly', 'kid-friendly', 'kid-friendly', 'not kid-friendly', 'not kid-friendly', 'kid-friendly', 'kid-friendly', 'not kid-friendly', 'kid-friendly'];


for (var i=0; i<10; i++) {
    fileNames.push("animal" +(i+1));
    photos.push("<img src ='images/" +fileNames[i]+ ".jpg'>");
    openList = "<li id='photo" + (i+1) + "'>";
    image = openList + openDescTag + descTexts[i] + closeDescTag  + openAnchor + photos[i] + closeAnchor + openCaptionTag + captionTexts[i] + closeCaptionTag + closeList;
    imageList.push(image);
}    
//display all six image codes stored in the array
document.getElementById("album").innerHTML = imageList;

//own div for infobox


var openHeadingTag = "<h1 id = 'infoBoxh1'>";
var closeHeadingTag = "</h1>";

var openTextTag = "<p id = 'infoBoxText'>";
var closeTextTag = "</p>";

var openExitTag = "<h2 onclick = 'closeBox()'> Click here to close box!";
var closeExitTag = "</h2>";


// headings are same as captionTexts
//texts for infobox defined
    var infoText = [
    '"I like long walks on the beach!"', 
    '"I love staying home and taking naps!"', 
    '"I just need cuddles and food!"', 
    '"I will sweep the floors and eat all your leftovers"', 
    '"I love scratches and a good game of fetch"', 
    '"I will wait for you on the couch until you come home"',
    '"I want to learn new tricks!"', 
    '"Please find me a home."'];
//opening box
var info;
var headings = ["What a Cutie!", "Aww How Adorable!"];

var randomHead = headings[Math.floor(Math.random() * 2)];
var randomText = infoText[Math.floor(Math.random() * 8)];



 info = openHeadingTag + randomHead + closeHeadingTag + openTextTag + randomText + closeTextTag + openExitTag + closeExitTag; 


function openBox(x) {
    //document.getElementById(captionTexts)
    
    document.getElementById("infoBox").innerHTML = info;

}
//closing box
function closeBox() {
   document.getElementById("infoBox").style.visibility = "hidden";
}


////other jquery code for l
$(document).ready(function(){
    $('.lightbox-toggle img').click(function(){
        $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
        $('.box').fadeIn();

        //Check if lightbox has an image
        if ($('.box').contents('img')) {
            $('.box').contents().remove('img'); //If true, clear image
        }

        //Get text content in attribute
        var $altvalue = $(this).attr('alt'); //or var altvalue = $(this).attr('alt');

        /*if ($altvalue=="Angkor Wat") {
            var img = $('#photo:nth-child(1) img').clone(); //Duplicate DOM element
            $('.box').append(img); //Insert duplicated element in another element
        }*/
        
        var img = $(this).clone();
        $('.box').append(img);

    });

    /* Click to close lightbox */
    $('.close, .backdrop').click(function(){
        $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
            $('.backdrop').css('display', 'none');
        });
        $('.box').fadeOut();
    });
    
    
});
