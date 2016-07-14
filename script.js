// Button Variables
var $bookmarkCount = $('#bookmark-count')
var $inputSubmitButton = $('#input-submit')
var $inputNewTitle = $('#input-title')
var $inputNewUrl = $('#input-url')
var $outputNewTitle = $('#insert-bookmark-title')
var $outputNewUrl = $('#insert-bookmark-url')
var $newArticle = $('#add-new-article')

function titleInputEmpty() {
  return $('#input-title').val() <= 0;
}

function urlInputEmpty() {
  return $('#input-url').val() <= 0;
}

function bookmarkTemplate(newUrl, newTitle) {
  return '<article id="add-new-bookmark" class="new-bookmark">' +
            '<li id="insert-bookmark-title" class="new-bookmark-title">' +
              '<a href=' + newUrl + 'target="_blank" class="bookmark-title-link">' + newTitle + '</a>' +
            '</li>' +
            '<li id="insert-bookmark-url" class="new-bookmark-url">' +
              '<a href=' + newUrl +  'target="_blank">' + newUrl + '</a>' +
            '</li>' +
            '<button id="mark-read" class="read-bookmark" type="button" name="button">Read</button>' +
            '<button id="mark-remove" class="remove-bookmark" type="button" name="button">Remove</button>' +
          '</article>';
}

// Submit Function
$inputSubmitButton.on('click', function() {
    var $count = $('article').length + 1
    $('#bookmark-count').text('Total Bookmarks: ' + $count);
    // if ($('#input-title').val() <= 0) {
    if (titleInputEmpty()) { return alert('Please Enter a Title'); }
    // $('#input-url').val() <= 0)
    if (urlInputEmpty()) { return alert('Please Enter a URL'); }
    var bookmarkHTML = bookmarkTemplate($inputNewUrl.val(), $inputNewTitle.val());
    $newArticle.append(bookmarkHTML);
    // $newArticle.append('<article id="add-new-bookmark" class="new-bookmark">' +
    //     '<li id="insert-bookmark-title" class="new-bookmark-title"><a href=' +
    //     $inputNewUrl.val() + 'target="_blank" class="bookmark-title-link">' +
    //     $inputNewTitle.val() + // input from the user
    //     '</a>' +
    //     '</li>' +
    //     '<li id="insert-bookmark-url" class="new-bookmark-url">' +
    //     '<a href=' + $inputNewUrl.val() +  'target="_blank">' + $inputNewUrl.val() + '</a>' + //input from the user
    //     '</li>' +
    //     '<button id="mark-read" class="read-bookmark" type="button" name="button">Read</button>' +
    //     '<button id="mark-remove" class="remove-bookmark" type="button" name="button">Remove</button></article>');

});

// Read Button
$('#add-new-article').on('click', '#mark-read', function() {
    $(this).parent().toggleClass('read');
    var $countRead = $('.read').length
    $('#bookmark-read-count').text('Total Read Bookmarks: ' + $countRead);
}); // You cannot target the mark-read button because it doesn't exist when the page loads. I instead toggled the parent that did exist and selected #mark-read from within. The only when to find it again is to use the $(this)

function updateBookmarkCount() {
  var $downCount = $('article').length;
  $('#bookmark-count').text('Total Bookmarks: ' + $downCount);
}

// Remove Button
$('#add-new-article').on('click', '#mark-remove', function() {
    $(this).parent().remove();
    // updateBookmarkCount
    // var $downCount = $('article').length
    // $('#bookmark-count').text('Total Bookmarks: ' + $downCount);
    updateBookmarkCount();
    // updateReadBookmarkCount
    var $downCountRead = $('.read').length
    $('#bookmark-read-count').text('Total Read Bookmarks: ' + $downCountRead);
});

// Enable Submit Button
function $toggleSubmitButton() {
  if ($('#input-title').val() === '' || $('#input-url').val() === '') {
    $inputSubmitButton.prop('disabled', true);
  }
  if  ($('#input-title').val().length > 0 || $('#input-url').val().length > 0) {
    $inputSubmitButton.prop('disabled', false);
  }
}
$(document).ready($toggleSubmitButton);
$inputNewTitle.on('keyup', $toggleSubmitButton);
$inputNewUrl.on('keyup', $toggleSubmitButton);

// Clear Read Class
$('#clear-read').on('click', function () {
  $('.read').remove();
  var $downCount = $('article').length
  var $downCountRead = $('.read').length
  $('#bookmark-count').text('Total Bookmarks: ' + $downCount);
  $('#bookmark-read-count').text('Total Read Bookmarks: ' + $downCountRead);
});
