
(function($){
	$(document).ready(function(){
		
		/******** Make it readonly **********/
		if($('.readonly_class input')) {
			$('.readonly_class input').attr('readonly', 'readonly');
		}
		/******** End of Make it readonly **********/
		
		
		$('.job_cont .job_volume input').keyup(function(){
			calculate_valume(this);
		});
		
		$('.job_cont .job_rate input').keyup(function(){
			calculate_rate(this);
		});
		
		$('.job_cont .job_volume input').blur(function(){
			calculate_valume(this);
		});
		
		$('.job_cont .job_rate input').blur(function(){
			calculate_rate(this);
		});
		
		$('#edit-not-allowed-to-edit-in-future').click(function(){
			send_button();
		});
		
		send_button();
		
		
		/*********** Invoice Different Step Management **************/
		$('.next_step .next_step_button').click(function(){
			/*var invoice_status = $('#edit-invoice-status').val();
			if(invoice_status == ""){
				alert("Please select invoice status");
				return false;
			}*/
			
			$('.step_one').slideUp('slow');
			$('.step_two').slideDown('slow');
			
			$('.main_cont h2').html('Allocations');
			
		});
		
		$('.prev_step .prev_step_button').click(function(){
			$('.step_one').slideDown('slow');
			$('.step_two').slideUp('slow');
			$('.main_cont h2').html('Invoice Form');
		});		
		/******** End of Invoice Different Step Management **********/
		
		var invoice_total_price = $('#total_job_price').val();
		var resource_total_price = $('#total_resource_alloc').val();
		
		if(invoice_total_price == resource_total_price){
			$('#edit-submit').attr('disabled', false);
			$('#edit-submit').css('background','#050505');
			
			$('#edit-submit-create-and-send').attr('disabled', false);
			$('#edit-submit-create-and-send').css('background','#050505');
			$('.alloc_msg_print').html('');
			$('.alloc_msg_print').removeClass('alloc_msg');
		}
		else{
			$('#edit-submit').attr('disabled', true);
			$('#edit-submit').css('background','#E6E6E6');
			$('#edit-submit-create-and-send').attr('disabled', true);
			$('#edit-submit-create-and-send').css('background','#E6E6E6');
			$('#total_allocated').addClass('red');
			$('.alloc_msg_print').addClass('alloc_msg');
			$('.alloc_msg_print').html('Please make sure the invoice total matches the total allocations.');
			
		}
		
		
	});
	
	function send_button() {
		
						
		var invoice_total_price = $('#total_job_price').val();
		var resource_total_price = $('#total_resource_alloc').val();
		
		if(invoice_total_price == resource_total_price){
			$('#edit-submit').attr('disabled', false);
			$('#edit-submit').css('background','#050505');
			
			if($('#edit-not-allowed-to-edit-in-future').is(':checked')) {
			
				$('#edit-submit-create-and-send').removeAttr('disabled');
				$('#edit-submit-create-and-send').css('background','#050505');
				$('#send').val(1);
			
			} else {
				$('#edit-submit-create-and-send').attr('disabled', 'disabled');
				$('#edit-submit-create-and-send').css('background','#E6E6E6');
				$('#send').val(0);
			}
			
			$('#total_allocated').removeClass('red');
			$('.alloc_msg_print').removeClass('alloc_msg');
			$('.alloc_msg_print').html('');
		}
		else{
			$('#edit-submit').attr('disabled', true);
			$('#edit-submit').css('background','#E6E6E6');
			$('#edit-submit-create-and-send').attr('disabled', true);
			$('#edit-submit-create-and-send').css('background','#E6E6E6');
			$('#total_allocated').addClass('red');
			$('.alloc_msg_print').addClass('alloc_msg');
			$('.alloc_msg_print').html('Please make sure the invoice total matches the total allocations.');
		}	
		
	}
	
	function calculate_valume(id) {
		var volume = $(id).val();
			
		var rate = $(id).parent().parent('.job_volume').next('.job_rate').find('input').val();
		var total = volume * rate;
		
		$(id).parent().parent('.job_volume').next('.job_rate').next('.job_total').find('input').val(total.toFixed(2));
	}
	
	function calculate_rate(id) {
		var rate = $(id).val();
			
		var volume = $(id).parent().parent('.job_rate').prev('.job_volume').find('input').val();
		var total = volume * rate;
		
		$(id).parent().parent('.job_rate').next('.job_total').find('input').val(total.toFixed(2));
	}
	
	
	
	
})(jQuery);

function changeJobPrice(type){
	switch(type){
		case 'job':
			var job_count = jQuery('#number_of_job').val();
			job_count = parseInt(job_count);
			//alert(job_count);
			job_count += 3;
			var total = 0;
			for(i = 1; i <= job_count; i++){
				var job_total = jQuery.trim(jQuery('#edit-total-'+i).val());
				//alert(job_total)
				if(job_total == "")
					job_total = 0.0;
					
				job_total = parseFloat(job_total);
						
				total += job_total;
			}
			//alert(total.toPrecision(4))
			var final_total = total.toFixed(2);
			var job_resource_count = jQuery('#counter_alloc').val();
			final_total = (final_total*0.05);
			jQuery('#edit-total-alloc-'+job_resource_count).val(final_total.toFixed(2));
			
			
			jQuery('#total_job_price').val(total.toFixed(2));
			jQuery('#total_invoice').val(total.toFixed(2));
			
			var total = 0.0;
			for(i = 0; i <= job_resource_count; i++){
				var job_total = jQuery.trim(jQuery('#edit-total-alloc-'+i).val());
				
				if(job_total == "")
					job_total = 0.0;
					
				job_total = parseFloat(job_total);
						
				total += job_total;
			}
			jQuery('#total_resource_alloc').val(total.toFixed(2));
			jQuery('#total_allocated').val(total.toFixed(2));
			
			active_button();
			break;
		case 'job_resource':
			var job_resource_count = jQuery('#counter_alloc').val();
			job_resource_count = parseInt(job_resource_count);
			
			var total = 0.0;
			for(i = 0; i <= job_resource_count; i++){
				var job_total = jQuery.trim(jQuery('#edit-total-alloc-'+i).val());
				
				if(job_total == "")
					job_total = 0.0;
					
				job_total = parseFloat(job_total);
						
				total += job_total;
			}
			//alert(total);
			
			jQuery('#total_resource_alloc').val(total.toFixed(2));
			jQuery('#total_allocated').val(total.toFixed(2));
			active_button();
			break;
	}
	
	return false;
}

function active_button() {
		
						
		
		var invoice_total_price = jQuery('#total_job_price').val();
		var resource_total_price = jQuery('#total_resource_alloc').val();
		
		if(invoice_total_price == resource_total_price){
			
			jQuery('#edit-submit').attr('disabled', false);
			jQuery('#edit-submit').css('background','#050505');
			
			jQuery('#total_allocated').removeClass('red');			
			if(jQuery('#edit-not-allowed-to-edit-in-future').is(':checked')) {
			
				jQuery('#edit-submit-create-and-send').removeAttr('disabled');
				jQuery('#edit-submit-create-and-send').css('background','#050505');
				jQuery('#send').val(1);
			
			} else {
				jQuery('#edit-submit-create-and-send').attr('disabled', 'disabled');
				jQuery('#edit-submit-create-and-send').css('background','#E6E6E6');
				jQuery('#send').val(0);
			}
			jQuery('.alloc_msg_print').removeClass('alloc_msg');
			jQuery('.alloc_msg_print').html('');
		}
		else{
			jQuery('#edit-submit').attr('disabled', true);
			jQuery('#edit-submit').css('background','#E6E6E6');
			
			jQuery('#edit-submit-create-and-send').attr('disabled', 'disabled');
			jQuery('#edit-submit-create-and-send').css('background','#E6E6E6');
			jQuery('#send').val(0);
			jQuery('#total_allocated').addClass('red');
			jQuery('.alloc_msg_print').addClass('alloc_msg');
			jQuery('.alloc_msg_print').html('Please make sure the invoice total matches the total allocations.');
		}
		
}