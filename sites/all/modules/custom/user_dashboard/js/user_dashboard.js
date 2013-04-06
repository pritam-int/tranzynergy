(function($) {
    $(document).ready(function(){
        $('.view-header .top_button_cont .search_my_job_link').click(function(){
            $('#search-my-job-form').slideToggle('slow');
        });
        
        $('#bulk_invoice_create').click(function(){	
        		var customer_id_arr = [];		
        		var job_nid_final_arr = [];
        		var flag = 0;
			 $('input[name=checked_job_nid]:checked').each(function() {
   			var job_nid = $(this).val();
   			var job_nid_arr = job_nid.split("-");
   			var customer_id = job_nid_arr[1];
   			customer_id_arr.push(customer_id);
   			var first_customer_id = customer_id_arr[0];
   			if(customer_id_arr.length > 1)
   			{
   				if(first_customer_id != customer_id)
   				{
   					alert("Please select job for same customer");
   					flag = 1;
   					return false;
   				}	
   			}
   			job_nid_final_arr.push(job_nid_arr[0]);
   			
			});
			if(customer_id_arr.length == 0)
			{
				alert("Please select atleast one job");
				return false;
			}	
				
			if(flag == 0)
			{
				$('#job_nids').val(job_nid_final_arr);
				$('#invoice_create_form').submit();
			}	
			else
				$('#job_nids').val(0);
			
		});
	
	/*Delete Job Tab functionality*/
	$('#bulk_job_delete').click(function(){	    
		var customer_id_arr = [];		
		var job_nid_final_arr = [];
		var flag = 0;
		
		/* var msg = confirm('Are you sure to delete selected Jobs ?');
		if(msg){ */
		$('input[name=checked_job_nid]:checked').each(function() {
		    var job_nid = $(this).val();
		   
		    var job_nid_arr = job_nid.split("-");
		    var customer_id = job_nid_arr[1];
		    customer_id_arr.push(customer_id);
		    /*var first_customer_id = customer_id_arr[0];
		    if(customer_id_arr.length > 1)
		    {
			    if(first_customer_id != customer_id)
			    {
				    alert("Please select job for same customer");
				    flag = 1;
				    //return false;
			    }	
		    } */
		    job_nid_final_arr.push(job_nid_arr[0]);
		});
		
		/* } else {
		    return false;
		} */
		
		if(customer_id_arr.length == 0) {
		    alert("Please select atleast one job");
		    return false;
		} else if(flag == 0) {
		    $('#job_nids_delete').val(job_nid_final_arr);
		    $('#job_delete_form').submit();
		    return true;
		} else {
		    $('#job_nids').val(0);
		    return false;
		}
		
		return true;
	});
	
    });
}(jQuery));

/*
 * To Open the status list in dashboard
 */
function open_status_list(id)
{
    
    jQuery('#span_status_label_'+id).hide();
    jQuery('#span_status_select_'+id).show();
    jQuery('#status_select_'+id).focus();
}

/*
 * To save the status list in dashboard
 */
function save_status_list(id)
{
    var current_status = jQuery('#status_select_'+id).val();
    var current_status_text = jQuery('#status_select_'+id+' option:selected').html();
    //alert(current_status+" "+current_status_text);
    
    
    jQuery.ajax({
		cache: false,
		url: Drupal.settings.basePath + '?q=' + 'user_dashboard/callback/changestatus',
		data: {job_id : id, job_status_id : current_status},
		type: 'POST',
		dataType: 'JSON',
		success :function(response){
			var data = JSON.parse(response);
			//alert(data);
			if(data.status == "1"){
			    jQuery('#span_status_label_'+id).html(current_status_text);
			    
			}
			jQuery('#span_status_label_'+id).show();
			jQuery('#span_status_select_'+id).hide();
		},
		error : function(){
		    alert("Error Occured");	
		},
	    });
}


/*
 * To close the status list in dashboard
 */
function close_status_list(id)
{
    jQuery('#span_status_label_'+id).show();
    jQuery('#span_status_select_'+id).hide();
}


/*
 * To open the count field in dashboard
 */

function open_field(resource_id)
{
    jQuery('#resource_count_field_'+resource_id).show();
    jQuery('#resource_count_label_'+resource_id).hide();
    jQuery('#resource_count_'+resource_id).focus();
    
}


function save_field_data(prev_count,resource_id, e){
    
    var resource_count = jQuery(e).val();
    
    var floor_resource = Math.floor(resource_count);
    var ceil_resource = Math.ceil(resource_count);
    var current_label = jQuery('#resource_count_label_'+resource_id).html();    
    
    if(jQuery.trim(resource_count) == "")
    {
	alert("Please enter the count");
	//jQuery('#resource_count_'+resource_id).focus();
	jQuery('#resource_count_'+resource_id).val(current_label);
	jQuery('#resource_count_field_'+resource_id).hide();
	jQuery('#resource_count_label_'+resource_id).show();
	
	return false;
    }
    else if(jQuery.isNaN(jQuery.trim(resource_count)))
    {
	alert("Please enter numeric value");
	//jQuery('#resource_count_'+resource_id).focus();
	jQuery('#resource_count_'+resource_id).val(current_label);
	jQuery('#resource_count_field_'+resource_id).hide();
	jQuery('#resource_count_label_'+resource_id).show();
	
	return false;
    }
    else if(resource_count > floor_resource && resource_count < ceil_resource)
    {
	alert("Please enter integer value");
	//jQuery('#resource_count_'+resource_id).focus();
	jQuery('#resource_count_'+resource_id).val(current_label);
	jQuery('#resource_count_field_'+resource_id).hide();
	jQuery('#resource_count_label_'+resource_id).show();
	
	return false;
    }
    
    jQuery.ajax({
		cache: false,
		url: Drupal.settings.basePath + '?q=' + 'user_dashboard/callback/changecount',
		data: {job_resource_id : resource_id, resource_count : resource_count},
		type: 'POST',
		dataType: 'JSON',
		success :function(response){
			var data = JSON.parse(response);
			//alert(data);
			if(data.status == "1"){
			    jQuery('#resource_count_label_'+resource_id).html(data.count);
			    var total = parseFloat(data.total).toFixed(2);
			    jQuery('#resource_total_'+resource_id).html('$'+total);
			    jQuery('#resource_count_'+resource_id).val(data.count);
			    
			}
			else {
			    alert("Please enter integer value");
			    jQuery('#resource_count_'+resource_id).focus();
			    return false;
			}
			jQuery('#resource_count_field_'+resource_id).hide();
			jQuery('#resource_count_label_'+resource_id).show();
		},
		error : function(){
		    alert("Error Occured");	
		},
	    });
    
    
}


/*
 * To Open the status list in dashboard
 */
function open_invoice_status_list(id)
{
    
    jQuery('#span_invoice_status_label_'+id).hide();
    jQuery('#span_invoice_status_select_'+id).show();
    jQuery('#invoice_status_select_'+id).focus();
}

/*
 * To save the status list in dashboard
 */
function save_invoice_status_list(id)
{
    var current_status = jQuery('#invoice_status_select_'+id).val();
    var current_status_text = jQuery('#invoice_status_select_'+id+' option:selected').html();
    //alert(current_status+" "+current_status_text);
    
    
    jQuery.ajax({
		cache: false,
		url: Drupal.settings.basePath + '?q=' + 'user_dashboard/callback/changeinvoicestatus',
		data: {invoice_bill_id : id, invoice_status_id : current_status},
		type: 'POST',
		dataType: 'JSON',
		success :function(response){
			var data = JSON.parse(response);
			//alert(data);
			if(data.status == "1"){
			    jQuery('#span_invoice_status_label_'+id).html(current_status_text);
			    if(current_status_text == "Voided"){
				jQuery('#invoice_row').attr('class', 'stricken_job');
			    }
			    else
			    {
				jQuery('#invoice_row').attr('class', 'not_stricken_job');
			    }
			}
			jQuery('#span_invoice_status_label_'+id).show();
			jQuery('#span_invoice_status_select_'+id).hide();
		},
		error : function(){
		    alert("Error Occured");	
		},
	    });
}


/*
 * To close the status list in dashboard
 */
function close_invoice_status_list(id)
{
    jQuery('#span_invoice_status_label_'+id).show();
    jQuery('#span_invoice_status_select_'+id).hide();
}