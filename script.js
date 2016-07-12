// jQuery Variables
var $inputSubmitButton = $('#input-submit');
var $markReadButton = $('#mark-read');
var $markRemoveButton = $('#mark-remove');
// Input Variables
var $inputNewTitle = $('#input-title');
var $inputNewURL = $('#input-url');
// Output Variables
var $outputNewTitle = $('#insert-bookmark-title');
var $outputNewURL = $('#insert-bookmark-url');
// Create New Article
var $addNewBookmark = $('#add-new-bookmark');
// var articleContent =

// jQuery
$inputSubmitButton.on('click', function () {
  $('#add-new-bookmark').append('<article class="new-bookmark"><li class="new-bookmark-title" id="insert-bookmark-title">Bookmark Title</li><li class="new-bookmark-url" id="insert-bookmark-url">Bookmark URL</li><button type="button" id="mark-read" class="read-bookmark">Read</button><button type="button" id="mark-remove" class="remove-bookmark">Remove</button></article>');
});
