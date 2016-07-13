// Button Variables
// var inputSubmitButton = document.getElementById('input-submit');
var $inputSubmitButton = $('#input-submit')
var $markReadButton = ('#mark-read')
var $markRemoveButton = ('#mark-remove')
// Input Variables
var $inputNewTitle = $('#input-title')
var $inputNewUrl = $('#input-url')
var $inputNewTitleValue = $inputNewTitle.val()
var $inputNewUrlValue = $inputNewUrl.val()
// Output Variables
var $outputNewTitle = $('#insert-bookmark-title')
var $outputNewUrl = $('#insert-bookmark-url')
var $newArticle = $('#add-new-article')


//user input title and url
//clicks inputSubmitButton
  //take input from both inputNewTitle and inputNewUrl
  //create new article
  //insert into new outputNewTitle and outputNewURL

$inputSubmitButton.on('click', function() {
  $newArticle.append('<article id="add-new-bookmark" class="new-bookmark"><li id="insert-bookmark-title" class="new-bookmark-title">' +
  $inputNewTitle.val() + // input from the user
  '</li><li id="insert-bookmark-url" class="new-bookmark-url">' +
  $inputNewUrl.val() + //input from the user
  '</li><button id="mark-read" class="read-bookmark" type="button" name="button">Read</button><button id="mark-remove" class="remove-bookmark" type="button" name="button">Remove</button></article>');
});

//add html for new article
  //modify article content / title and url
  //
