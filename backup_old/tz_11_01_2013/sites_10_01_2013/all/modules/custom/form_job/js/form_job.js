function add_more_sup_doc(){
	
	var last_insert_id = jQuery('#supp_document_last_id').val();
	
	jQuery.ajax({            
	    type: "POST",
	    url: 'ajax_fields_add',
	    data: {id_value : last_insert_id},
	    dataType: 'JSON',
	    success: function(msg) {
		var response = JSON.parse(msg);
	     
		jQuery('#add_more_sup_section').append(response.html); 
		jQuery('#supp_document_last_id').val(response.new_id); 
	    }
	});
   
   return false; 
}


function delResource(resource_div_id)
{
	//alert('#job_resource_'+resource_div_id);
	jQuery('#job_resource_'+resource_div_id).hide();
	jQuery('#edit-rate-'+resource_div_id).val("");
	jQuery('#edit-count-'+resource_div_id).val("");
	
	return false;
}	

/************ Ajax multiple form add *************/
(function($){
	$(document).ready(function(){
		$('.job_resource_add .job_resource_link #add_more_jr').click(function(){			
			var field_group_count = $('#group_count_id').val();
			$('#group_count_id').val(++field_group_count);
			
			$.ajax({            
				type: "POST",
				url : Drupal.settings.basePath + '?q=ajax_job_resources',
				data: "group_count=" + field_group_count,
				success: function(msg) {
					msg = $(msg).children(".job_resource_container").html();
					msg = '<div class="job_resource_container inner_container" id="job_resource_'+field_group_count+'">'+msg+'</div>';
					//$(msg).appendTo('#edit-job-resource-form .fieldset-wrapper');
					$(msg).appendTo('#add_more_container_div');
					
				}
			});
		});
		
		
		$("#form-jobs").validate();
	});
})(jQuery);