// Initialise variables for quote and author (q and a)

$(document).ready(function(){
  var q="";
  var a="";
     
  // Call the getQuote function when the page loads...
  
  getQuote();
  
  // ...and also when the user clicks the MORE button
  
  $("#more").on("click", function(){
    getQuote();
  });
  
  // the function getQuote fetches a random quote from forismatic.com...
  
 function getQuote(){
     var url="https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    $.getJSON(url, function(data){

// ...and assigns the quote to the variable 'q', and the name of the author to the variable 'a' in memory
     q=data.quoteText;
     a=data.quoteAuthor;

 // Replace the span elements (quote and author) with information stored in the q and a variables
      
   $(".quote").html(q);
   $(".author").html('- ' + a );
    }); 
};
  
 // Call and define the tweet function when the TWEET button is clicked
  $("#tweet").on("click", tweet);
  function tweet(){ 

//Open a formatted URL in a new tab for the user to send a tweet
    var url=("https://twitter.com/intent/tweet?text="+q+"  - "+a);
      window.open(url, "_blank");
     };  
    
// TODO: Add a button that copies the quote and author to the user's clipboard
  
});