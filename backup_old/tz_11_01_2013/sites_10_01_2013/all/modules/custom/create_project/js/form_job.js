//$(document).ready(function(){
   
	
	//function open_add_customer_form(){
	//	window.open();
    // }
	


		(function($) {   
			$(function() {    
					$('input[name="add_customer"]').click(function() { 
						var url = 'add_customer';
						//window.open( url, "Add Customer", "menubar=0, location=0, scrollbars=1, resizable=0, status=0, toolbar=0, height=500, width=500" );
						//return false; 

						_custom_popup(url);

						//popup_element('Test', 'Testing')

					}); 
			});
		})(jQuery);




//});


function _custom_popup(vurl){
var popurl=vurl;

var width  = 600;
var height = 500;
var left   = (screen.width  - width)/2;
var top    = (screen.height - height)/2;
var params = 'width='+width+', height='+height;
params += ', top='+top+', left='+left;
params += ', directories=no';
params += ', location=no';
params += ', menubar=no';
params += ', resizable=no';
params += ', scrollbars=yes';
params += ', status=no';
params += ', toolbar=no';

newwin=window.open(popurl,'Add Customer', params);
if (window.focus) {newwin.focus()}
return false;
}