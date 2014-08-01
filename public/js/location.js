$(document).ready(function(){
	for (i=1; i<=42; i++) {
		$("ul#work_stations").append("<li id='"+i+"''>"+i+"</li>");
	};
	$("#work_area li").click(function(e){
		console.log(this);
		$(this).css("background-color","yellow");
	}); // close li.click
}); // close document.read