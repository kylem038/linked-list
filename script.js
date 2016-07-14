// Button Variables
var $bookmarkCount = $('#bookmark-count')
var $inputSubmitButton = $('#input-submit')
var $inputNewTitle = $('#input-title')
var $inputNewUrl = $('#input-url')
var $newArticle = $('#add-new-article')
var $bookmarkReadCount = $('#bookmark-read-count')
var linkCount = 0;

$(document).ready($toggleSubmitButton);
$inputNewTitle.on('keyup', $toggleSubmitButton);
$inputNewUrl.on('keyup', $toggleSubmitButton);

function bookmarkTemplate(newUrl, newTitle) {
  return '<article id="add-new-bookmark" class="new-bookmark">' +
    '<li id="insert-bookmark-title" class="new-bookmark-title">' +
    '<a href="' + newUrl + '" target="_blank" class="bookmark-title-link">' + newTitle + '</a>' +
    '</li>' +
    '<li id="insert-bookmark-url" class="new-bookmark-url">' +
    '<a href= "' + newUrl + '" target="_blank">' + newUrl + '</a>' +
    '</li>' +
    '<button id="mark-read" class="read-bookmark" type="button" name="button">Read</button>' +
    '<button id="mark-remove" class="remove-bookmark" type="button" name="button">Remove</button>' +
    '</article>';
}

// Submit Function
$inputSubmitButton.on('click', function() {
  linkCount++;
  updateBookmarkCount();
  var bookmarkHTML = bookmarkTemplate($inputNewUrl.val(), $inputNewTitle.val());
  $newArticle.append(bookmarkHTML);
});

function titleInputEmpty() {
  return $inputNewTitle.val() <= 0;
}

function urlInputEmpty() {
  return $inputNewUrl.val() <= 0;
}

// Remove Button
$newArticle.on('click', '#mark-remove', function() {
  linkCount--
  $(this).parent().remove();
  updateBookmarkCount();
  updateReadCount();
});

function updateBookmarkCount() {
  $bookmarkCount.text('Total Bookmarks: ' + linkCount);
}

function updateReadCount() {
  var $downCountRead = $('.read').length;
  $bookmarkReadCount.text('Total Read Bookmarks: ' + $downCountRead);
}

// Read Button
$newArticle.on('click', '#mark-read', function() {
  $(this).parent().toggleClass('read');
  updateReadCount();
});

function inputBoxesAreEmpty() {
  return $inputNewTitle.val() === '' || $inputNewUrl.val() === '';
}

// Enable Submit Button
function $toggleSubmitButton() {
  if (inputBoxesAreEmpty()) {
    $inputSubmitButton.prop('disabled', true);
  } else {
    $inputSubmitButton.prop('disabled', false);
  }
}

// Clear Read Class
$('#clear-read').on('click', function() {
  $('.read').remove();
  linkCount = $('article').length;
  updateBookmarkCount();
  updateReadCount();
});
