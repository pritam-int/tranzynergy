<?php
//pre_disp($node);
$nid = $node->nid;
?>

<div id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>

  <?php print $user_picture; ?>

  <?php print render($title_prefix); ?>
  <?php if (!$page && $title): ?>
    <h2<?php print $title_attributes; ?>><a href="<?php print $node_url; ?>"><?php print $title; ?></a></h2>
  <?php endif; ?>
  <?php print render($title_suffix); ?>

  <?php if ($unpublished): ?>
    <div class="unpublished"><?php print t('Unpublished'); ?></div>
  <?php endif; ?>

<h2><?php // print $title ?></h2>
<?php if ($display_submitted): ?><p><strong><?php print $submitted; ?></strong></p><?php endif; ?>

  <div class="content"<?php print $content_attributes; ?>>
    <?php
      // We hide the comments and links now so that we can render them later.
      hide($content['comments']);
      hide($content['links']);
      print render($content);
      
      print views_embed_view('job_resources','block_1', $nid); 
    ?>
	
  </div>

  <?php print render($content['links']); ?>

  <?php print render($content['comments']); ?>

</div><!-- /.node -->
