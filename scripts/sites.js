function ClearForm(){
    //goes to id "fullname" and changes the value to nothing, i.e. clears it
    //document.getElementById("fullname").value = '' ;
    document.getElementById("contactForm").reset() ;
}
function hidePTags()
     {
        let ptags= document.getElementsByTagName('p') ;
        //each element will be called "item"
        for(let item of ptags)
        {
         //when you get the tag, go to style, go to visibility
         //item.style.visibility = 'hidden' ; //removes element, leaves space
        item.style.display = 'none' ; //removes element and space
        //both do the same thing

        }
    }
        //$ is for jquery, HAS to come after you included jQuery library
        //can use 'button' or 'id'. Id will go to specific tag/s
        //Any time this element is clicked, run this function
$('#jQueryBtn').click(function()
        {
            $('p').hide() ;
        })