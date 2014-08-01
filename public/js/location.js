$(document).ready(function(){
	for (i=1; i<=42; i++) {
		$("ul#work_stations").append("<li id='"+i+"''>"+i+"</li>");
	};
	$("form[name='rooms']").change(function(e){
		console.log("changed the form value");
		if ($("form[name='rooms'] option:selected").val() == "workstations"){
			$("#work_area").show();
			$("#work_area li").click(function(e){
				var desk = this.id;
				$(this).css("background-color","yellow");
				var studentLocation = $("form[name='rooms'] option:selected").val().concat(desk);
				console.log(studentLocation);
			}); // close li.click
		} // close if statement
	}); // close form.change
	$("#rooms").submit(function(e){
		e.preventDefault();
		console.log("submitted the form");
		console.log("#rooms");
	}) // close rooms.submit
}); // close document.read