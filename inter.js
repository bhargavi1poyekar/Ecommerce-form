var str='';
$(document).ready(function(){

	$(".btn1").click(function(){
		$("#para1").fadeToggle();
		 $(this).text($(this).text() == 'Hide Description' ? 'Show Description' : 'Hide Description');
	});
  
	$(".btn2").click(function(){
		$("#para2").fadeToggle();
		$(this).text( $(this).text() == 'Hide Description' ? 'Show Description' : 'Hide Decription' );
	});

	$("input:text").focus(function(){
		$(this).css("backgroundColor","#cccccc");
		console.log('[for="'+$(this).attr('id')+'"]');
		$('label[for="'+$(this).attr('id')+'"]').show(600);
		
	});
	
	
	$("input:text").blur(function(){
		$(this).css("background-color", "#ffffff");
		$('label[for="'+$(this).attr('id')+'"]').hide(600);
		
	})

	$("textarea").focus(function(){
		$(this).css("backgroundColor","#cccccc");
		console.log('[for="'+$(this).attr('id')+'"]');
		$('label[for="'+$(this).attr('id')+'"]').show(600);
		
	});
	
	
	$("textarea").blur(function(){
		$(this).css("background-color", "#ffffff");
		$('label[for="'+$(this).attr('id')+'"]').hide(600);
		
	})
  
	 $("input").keydown(function(event) { 
                $(".key").html("Key: " + event.which); 
            }); 
	  $("textarea").keydown(function(event) { 
                $(".key").html("Key: " + event.which); 
            }); 

	var countChecked = function() {
		var n = $( "input:checked" ).length;
		 var favorite = [];
		$("input:checkbox:checked").each(function () {

			favorite.push($(this).val());
        });
		$( ".selected" ).text( favorite.join(", ")+ (n === 1 ? " is" : " are") + " checked!" );
	};
	$( "input[type=checkbox]" ).on( "click", countChecked );

	
	$("#answerType").change(function() {
		var answerType = $('#answerType option:selected').text();
		switch (answerType) {
			case "Electronics":
				$("#Electronics").show(600);
				$("#proname1").focus();
				$("body").css("background-image","url('https://www.pixelstalk.net/wp-content/uploads/2016/11/HD-Backgrounds-Electronic.jpg");
				
				$("#para1").mouseover(function(){
					$("#para1").css("background-color", "red");
					$("#para1").css("color", "white");
				});
				$("#para1").mouseout(function(){
					$("#para1").css("background-color", "white");
					$("#para1").css("color", "black");
				});
				
				var words = $( "#para1" ).first().text().split( /\s+/ );
				var text = words.join( "</span> <span>" );
				$( "#para1" ).first().html( "<span>" + text + "</span>" );
				$( "span" ).on( "click", function() {
					$( this ).css( "background-color", "orange" );
				});
				
				$("#Clothes").hide();
				
				break;
			case "Clothes":
				$("#Clothes").show(600);
				$("body").css("background-image","url('https://dslv9ilpbe7p1.cloudfront.net/OS0T-OJUo1vtE_GYLcdQrQ_store_header_image')");
				
				$("#para2").mouseover(function(){
					$("#para2").css("background-color", "red");
					$("#para2").css("color", "white");
				});
				
				$("#para2").mouseout(function(){
					$("#para2").css("background-color", "white");
					$("#para2").css("color", "black");
				});
				
				$("#proname2").focus();

				var words = $( "#para2" ).first().text().split( /\s+/ );
				var text = words.join( "</span> <span>" );
				$( "#para2" ).first().html( "<span>" + text + "</span>" );
				$( "span" ).on( "click", function() {
					$( this ).css( "background-color", "orange" );
				});
				
				$("#Electronics").hide();
				
				break;
			
			default:
				$("#Electronics").hide();
				$("#Clothes").hide();
				
				break;
		}
	});
	
  
	
});





