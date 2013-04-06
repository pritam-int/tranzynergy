<?php
    $payment_th = $final_doc = $search_form = '';
    
    switch($my_job_type) {
      case 'my_job':
        $edit_job = '<th class="views-field views-field-create-payment">Edit Job</th>';
        $search_link = '<div class="add_job_link search_my_job_link">Search Job</div>';
        $search_form = drupal_render(drupal_get_form('search_my_job_form'));
	break;
    
      case 'my_job_search':
        $edit_job = '<th class="views-field views-field-create-payment">Edit Job</th>';
        $search_form = drupal_render(drupal_get_form('search_my_job_form'));
	break;
    
      case 'executive_jobs':
        $edit_job = '<th class="views-field views-field-create-payment">Edit Job</th>';	
        $payment_th = '<th class="views-field views-field-create-payment">Create Payment</th>';
        $final_doc = '<th class="views-field views-field-create-payment">Final Document</th>';        
        break;
    
      case 'editing_job':
      case 'translating_job':
        
        break;	
    }
    
    $content_table = '<div class="view view-user-dashboard view-id-user_dashboard view-display-id-page">';
    $invoice_link = "";
    $job_delete_link = "";
	 $heading_link = "";
    if($my_job_type == "my_job") {
	    $form = "<form name='invoice_create_form' id='invoice_create_form' action='generate_invoice' method='POST'><input type='hidden' name='job_nids' id='job_nids' value='' ></form>";
	    /*Delete Job Starts*/
	    $form2 = "<form name='job_delete_form' id='job_delete_form' action='delete_job_confirm' method='POST'><input type='hidden' name='job_nids_delete' id='job_nids_delete' value='' ></form>";
	    $invoice_link .=  '<div class="delete_job_link add_job_link"><a href="javascript:void(0);" id="bulk_job_delete">+Delete Job</a>'.$form2.'</div>';	    
	    $invoice_link .=  '<div class="add_job_link"><a href="javascript:void(0);" id="bulk_invoice_create">+Create Invoice</a>'.$form.'</div>';
	    $heading_link .= '<th class="views-field views-field-title">&nbsp;</th>';
    }
	 
	 	
    $content_table_links = $search_form.'<div class="view-header">
                    <div class="top_button_cont">
                        '.$search_link.'
                    
			<div class="add_job_link"><a href="'.base_path().'add_project">+Add Project</a></div>
			<div class="add_job_link"><a href="'.base_path().'add_customer">+Add Customer</a></div>
			<div class="add_job_link"><a href="'.base_path().'add_job">+Add Job</a></div>    
			 '.$invoice_link.'
                    </div>
                </div>';
        
    $content_table_01 = ' <div class="view-content">
		<table class="views-table cols-11">
			<thead>
				<tr>
					'.$heading_link.'
					<th class="views-field views-field-title">Job Name</th>
					<th class="views-field views-field-number">PO/Customer Number</th>	
					<th class="views-field views-field-field-customer">Customer Name</th>
					<th class="views-field views-field-field-job-status">Job Status</th>
					<th class="views-field views-field-name">Project Manager</th>
					<th class="views-field views-field-job-resource">
					    <table class="job_resource_table"><tbody><tr>
						<th class="views-field views-field-translator">Job Type</th>
						<th class="views-field views-field-php-3">Job Assigned To</th>
						<th class="views-field views-field-field-date-due">Due Date</th>
						<!-- <th class="views-field views-field-field-job-status">Job Status</th> --> <!-- Updated on 15 Jan -->
						<th class="views-field views-field-field-rate">Rate</th>
						<th class="views-field views-field-field-count">Count</th>
						<th class="views-field views-field-php-1">Total Amount</th></tr>
					    </table>
					</th>
					<th class="views-field views-field-php">Invoice</th>
                                        '.$payment_th.'
                                        '.$final_doc.'
				</tr>
			</thead>
                        <tbody><tr class="odd views-row-first">';
			
                $content_table_2 = '</tr></tbody>
		</table>
	</div>
</div>';

?>
