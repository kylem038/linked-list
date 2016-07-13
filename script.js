// Button Variables
// var inputSubmitButton = document.getElementById('input-submit');
var $inputSubmitButton = $('#input-submit')
// var $markReadButton = ('#mark-read')
var $markRemoveButton = ('#mark-remove')
// Input Variables
var $inputNewTitle = $('#input-title')
var $inputNewUrl = $('#input-url')
// Output Variables
var $outputNewTitle = $('#insert-bookmark-title')
var $outputNewUrl = $('#insert-bookmark-url')
var $newArticle = $('#add-new-article')


$inputSubmitButton.on('click', function() {
  // make variable that takes input newurl
  $newArticle.append('<article id="add-new-bookmark" class="new-bookmark"><li id="insert-bookmark-title" class="new-bookmark-title">' +
  $inputNewTitle.val() + // input from the user
  '</li><li id="insert-bookmark-url" class="new-bookmark-url">' +
  '<a href=' + $inputNewUrl.val() + '>' + $inputNewUrl.val() + '</a>' + //input from the user
  '</li><button id="mark-read" class="read-bookmark" type="button" name="button">Read</button><button id="mark-remove" class="remove-bookmark" type="button" name="button">Remove</button></article>');
});

$('#add-new-article').on('click', '#mark-read', function () {
  $(this).parent().toggleClass('read');
}); // You cannot target the mark-read button because it doesn't exist when the page loads. I instead toggled the parent that did exist and selected #mark-read from within. The only when to find it again is to use the $(this)

$('#add-new-article').on('click', '#mark-remove', function () {
  $(this).parent().remove();
});
