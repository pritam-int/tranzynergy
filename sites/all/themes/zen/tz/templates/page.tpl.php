<?php
GLOBAL $user;
$uid = $user->uid;
$user_link = '';
if($uid == 0) {
    $user_link = ''.l('Login', 'user/login').'';
} else {
    $user_link = 'Welcome '.$user->name.' | '.l('Logout', 'user/logout').'';
}
?>


<!-- Header Wrapper -->
<div class="headerWrapper">
    <!-- Top Header -->
    <div class="topHeader">
    	<?php if ($logo): ?><div class="logo">
<a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home"><img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" id="logo-image" /></a>
    	</div><?php endif; ?>
        <div class="headerRight">
	    <?php if ($page['header']): ?>
		<?php print render($page['header']); ?>
	    <?php endif; ?>
	    <div class="right_header">
		<p>Call <span>(202) 681-9429</span> | <?php print $user_link;?></p>
		<p class="user"><b>The Freedom of Freelance. The Security of Employment.</b></p>
		
	    </div>
        </div>
    </div>
    <!--/ Top Header -->
    <!-- Navigation -->
    <div class="navigation">
    	<div class="container">
<?php print theme('links__system_main_menu', array('links' => $main_menu, 'attributes' => array('id' => 'primary-menu', 'class' => array('links', 'inline', 'clearfix')))); ?>
        </div>
    </div>
    <!--/ Navigation -->
<?php
global $user;
if($user->uid == 1 || $user->uid == 19 || $user->uid == 24 || $user->uid == 26)
{
?>
<div class="subnavigation"><div class="subcontent">
<?php
$menu = menu_navigation_links('menu-admin-special-menu');
print theme('links__menu-admin-special-menu', array('links' => $menu));
?>
</div></div>
<?php
}
?>
    <!-- Slider -->
	<?php if ($page['banner_full']): ?>
    <div class="sliderPan">
<?php print render($page['banner_full']); ?>
    </div>
	<?php endif; ?>
    <!--/ Slider -->
</div>
<!--/ Header Wrapper -->
<!-- Container -->
<div class="container bodyPan">
	<!-- Join Panel -->	
	<?php if ($page['join_pan']): ?>
	    <div id="join_pan" class="join_pan">
		<?php print render($page['join_pan']);?>
	    </div>
	<?php endif; ?>	
	<!--/ Join Panel -->
	
	<div class="main_cont">
	    <?php print $breadcrumb; ?>
	    <div class="tabs"><?php print render($tabs); ?></div>
	    <?php print render($page['help']); ?> <?php print render($page['messages']); ?>
	    <?php if ($messages): ?>
               <div id="messages"><div class="section clearfix">
                 <?php print $messages; ?>
               </div></div> <!-- /.section, /#messages -->
            <?php endif; ?>
	    <h2><?php if (!drupal_is_front_page()){
                       print $title;
                   }?></h2>
	    <?php print render($page['content']); ?>
		<?php print render($page['bottomsection']); ?>
	</div>
</div>
<!-- Container -->

<!-- Footer -->
<div class="footer">
	<div class="container">
<?php if( false ) { ?>
    	<!-- Footer Panel 1-->
        <div class="footerPanel1">
        	<h2>Site Navigation</h2>
<?php print theme('links__system_main_menu', array('links' => $main_menu, 'attributes' => array('id' => 'primary-menu', 'class' => array('links', 'inline', 'clearfix')))); ?>
        </div>
        <!--/ Footer Panel 1-->
        
        <!-- Footer Panel 2-->
        <div class="footerPanel2">
<?php print render($page['news']); ?>
        </div>
        <!--/ Footer Panel 2-->
        
        <!-- Footer Panel 3-->
      <div class="footerPanel3">
	  <?php print render($page['contact']); ?>
        </div>
        <!--/ Footer Panel 3-->
	<?php } //end if(false) ?>
    </div>
</div>
<!--/ Footer -->
<!-- Copyright Panel -->
<div class="copyrightPan">
	<p><?php print render($page['copyright']); ?></p>
</div>
<!--/ Copyright Panel -->
