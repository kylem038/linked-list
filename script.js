<<<<<<< HEAD
// jQuery Variables
var $inputSubmitButton = $('#input-submit')
var $markReadButton = $('#mark-read')
var $markRemoveButton = $('#mark-remove')
// Input Variables
var $inputNewTitle = $('#input-title')
var $inputNewURL = $('#input-url')
// Output Variables
var $outputNewTitle = $('#insert-bookmark-title')
var $outputNewURL = $('#insert-bookmark-url')
// Create New Article
var $addNewBookmark = $('#add-new-bookmark')
// var articleContent =

// jQuery
$inputSubmitButton.on('click', function () {
  $('#add-new-bookmark').append('<article class="new-bookmark"><li class="new-bookmark-title" id="insert-bookmark-title">' +
$inputNewTitle.val() +
  '</li><li class="new-bookmark-url" id="insert-bookmark-url">' +
$inputNewURL.val() +
 '</li><button type="button" id="mark-read" class="read-bookmark">Read</button><button type="button" id="mark-remove" class="remove-bookmark">Remove</button></article>');
});

// $outputNewTitle.text($inputNewTitle.val());
// $outputNewURL.text($inputNewURL.val());
=======
// Button Variables
var $bookmarkCount = $('#bookmark-count')
var $inputSubmitButton = $('#input-submit')
var $inputNewTitle = $('#input-title')
var $inputNewUrl = $('#input-url')
var $outputNewTitle = $('#insert-bookmark-title')
var $outputNewUrl = $('#insert-bookmark-url')
var $newArticle = $('#add-new-article')

// Submit Function
$inputSubmitButton.on('click', function() {
    var $count = $('article').length + 1
    if ($('#input-title').val() <= 0) {
        return alert('Please Enter a Title');
    };
    if ($('#input-url').val() <= 0) {
        return alert('Please Enter a URL');
    };
    $newArticle.append('<article id="add-new-bookmark" class="new-bookmark">' +
        '<li id="insert-bookmark-title" class="new-bookmark-title">' +
        $inputNewTitle.val() + // input from the user
        '</li>' +
        '<li id="insert-bookmark-url" class="new-bookmark-url">' +
        '<a href=' + $inputNewUrl.val() + '>' + $inputNewUrl.val() + '</a>' + //input from the user
        '</li>' +
        '<button id="mark-read" class="read-bookmark" type="button" name="button">Read</button>' +
        '<button id="mark-remove" class="remove-bookmark" type="button" name="button">Remove</button></article>');
    $('#bookmark-count').text('Total Bookmarks: ' + $count);
});

// Read Button
$('#add-new-article').on('click', '#mark-read', function() {
    $(this).parent().toggleClass('read');
}); // You cannot target the mark-read button because it doesn't exist when the page loads. I instead toggled the parent that did exist and selected #mark-read from within. The only when to find it again is to use the $(this)

// Remove Button
$('#add-new-article').on('click', '#mark-remove', function() {
    $(this).parent().remove();
});
>>>>>>> 61ba75016d20bb372a7db79ecef5e1beb6413415
