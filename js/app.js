
$(document).ready(function() {

	// $('#myCarousel').carousel({
	// 	  interval: 5000
	// });

	// $('#carousel-text').html($('#slide-content-0').html());

	//Handles the carousel thumbnails
	$('[id^=carousel-selector-]').click( function(){
		var id_selector = $(this).attr("id");
		var id = id_selector.substr(id_selector.length -1);
		var id = parseInt(id);
		$('#myCarousel').carousel(id);
	});


	// When the carousel slides, auto update the text

	// $('#myCarousel').on('slid.bs.carousel', function (e) {
	// 	 var id = $('.item.active').data('slide-number');
	// 	$('#carousel-text').html($('#slide-content-'+id).html());
	// });


	$('#contactButton').on('click', function(){
		$(this).hide();
	});

	$('#nav').affix({
		offset: {
			top: $('.jumbotron').height()
		}
	});

	$('.parallax-window').parallax();

	$("#modal-carousel").carousel({interval:false});

   /* change modal title when slide changes */
   	$("#modal-carousel").on("slid.bs.carousel",       function () {
        $(".modal-title")
        .html($(this)
        .find(".active img")
        .attr("title"));
   	});

   /* when clicking a thumbnail */
   	$(".row .thumbnail").click(function(){
	    var content = $(".carousel-inner");
	    var title = $(".modal-title");
	  
	    content.empty();  
	    title.empty();
	  
	  	var id = this.id;  
	    var repo = $("#img-repo .item");
	    var repoCopy = repo.filter("#" + id).clone();
	    var active = repoCopy.first();
  
	    active.addClass("active");
	    title.html(active.find("img").attr("title"));
	  	content.append(repoCopy);

    // show the modal
  	$("#modal-gallery").modal("show");
  });


});
