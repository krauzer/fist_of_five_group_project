$(document).ready(function(){
	$("#work_area li").click(function(e){
		console.log(this);
		$(this).css("background-color","yellow");
	}); // close li.click
}); // close document.ready