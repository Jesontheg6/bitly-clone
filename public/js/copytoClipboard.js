
$(document).ready(function(){
	// console.log("enter1");
	// $('.buttons').click(function () {
	// 	var $link = $('.long_url');	
	// 	$.post('urls', { long_link: $link.val()}, function (data, status) {
	// 		var newdata = `<p class= 'short_link_data'>`+ data +`</p>`+ `<p>
	// 		 <button onclick="copyToClipboard('.short_url')" style="vertical-align:top;">Copy Textarea</button>
	// 		</p>`
	// 		$('.panel').html(newdata);
	// 		$('.panel').slideDown('slow');
	// 	});
	// });


	$('.url_form').submit(function(e){
		// console.log("enter2");
			e.preventDefault();
			$.ajax({
			url: '/urls', //this refers to the route post '/urls'
			method: 'POST',
			data: $(this).serialize(),
			dataType: 'json',
			success: function(data){
			//  data is the return result of running the above mentioned method url
			// write some code here to display the shortened URL
			// debugger
			if (data.short_url){

				var a = "<button onclick=\"copyToClipboard('.url_link')\">Copy to clipboard</button>";

				$("#table").html("Your shorten URL is <a class='url_link' href='" + data.short_url + "'>jeson.lee/" + data.short_url + "</a> </br>" + a);
			}
			else{

				$("#table").html(data);
			//   $("#table").html(data);
			}

			}  // end of success
		}); // end of function .ajax

	});
});


function copyToClipboard(element) {
	// console.log("dsad");
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}


function log(){
var form = $('url_form');
    form.on('submit',function(formSubmissionEvent){
        formSubmissionEvent.preventDefault();
        // console.log("Prevented default action!")


    // $('body').prepend('<img src="/img/spinner.gif" id="spinner"/>')

    $.ajax({
        url: form.attr('action'),
        method: form.attr('method'),
        data: form.serialize(),
        dataType: 'JSON',
        success: function(response) {
            if (response.id) {
                // $("#box").append('<h2>'+ response.ori_url + '</h2>');
                // $("#box").append('<tr>'+ response.short_url +  '</tr>');

                $("#"tbody).append("<tr>"
                    + "<th>" + response.id + "</th>" +
                    "<th>" + response.long_url + "</th>" +
                    "<th>" + "<a href='" + response.short_url + "'>jesonlee/" + response.short_url + "</a>" + "</th>" +
                    "<th>" + response.counter + "</th>" +
                    "</tr>");
            } else {
                $('#sorry').append('Sorry, please check for these errors:'+ response)

            }

        }
    })



    })
}

document.addEventListener("DOMContentLoaded", log);

// $('.bitly').click(function() {
//     var thmb = this;
//     var src = this.src;
//     $('.bitly_2').fadeOut(400,function(){
//         thmb.src = this.src;
//         $(this).fadeIn(400)[0].src = src;
//     });
// });


 
