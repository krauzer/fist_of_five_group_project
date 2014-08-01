$(document).ready(function(){
	for (i=1; i<=42; i++) {
		$("ul#work_stations").append("<li id='"+i+"''>"+i+"</li>");
	};
	$("form[name='rooms']").change(function(e){
		console.log("changed the form value");
		if ($("form[name='rooms'] option:selected").val() == "workstations"){
			console.log("selected workstations");
			$("#work_area").show();
			$("#work_area li").click(function(e){
				console.log(this);
				$(this).css("background-color","yellow");
			}); // close li.click
		} // close if statement
	}); // close form.change
	$("")
}); // close document.read