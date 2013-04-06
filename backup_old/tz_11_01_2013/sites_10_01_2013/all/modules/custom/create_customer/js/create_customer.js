$(document).ready(function(){
    $('#simple_button #edit-userButtton').click(function(){        
        //Get the extra form contents
        var id_value = $('#edit-userArrayNumber-wrapper #edit-userArrayNumber').val();
        incr = parseInt(id_value)+1;
        $('#edit-userArrayNumber-wrapper #edit-userArrayNumber').val(incr);
        new_fields(id_value);
    });
})

function new_fields(id){
    $.ajax({            
        type: "POST",
        url: 'ajax_fields_contents',
        data: "id_value=" + id,
        success: function(msg) {
            $('#form_container_whole').append(msg);
        }
    }); 
}