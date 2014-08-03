$(document).ready(function() {
	console.log("works")

	$('#newTicket').hide();
	
	$("form#refreshAll").submit(function(e){
		e.preventDefault();
		setTimeout(refreshTickets, 200);

		console.log("refresh button works")
	// window.location.href = window.location.href;  
  });

  $("#submit_ticket").click(function(e){
    e.preventDefault();
    var description = $("input[name=description]").val();
  $.ajax({
    url: "/my_tickets",
    method: "post",
    data: $('form').serialize()
  }).success(function(data){
    console.log("meow it works")
    //refreshTickets();
    var node = document.createTextNode(description);
    var li = document.createElement("li");
    li.appendChild(node);
    $("#ticket_history").append(li);
    window.location.reload();
  }).fail(function(data){
    console.log(':(')
  })
  })

  $("input[id=remove]").click(function(e){
    e.preventDefault();
    console.log("click")
    var id = $("input[type=hidden]").val();
    $.ajax({
      url: "/my_tickets/" + id,
      method: "delete",
      data: id
    }).success(function(data){
      window.location.reload();
    })
  })

    $("input[id=resolved]").click(function(e){
    e.preventDefault();
    console.log("click resolve")
    var id = $("input[type=hidden]").val();
    $.ajax({
      url: "my_tickets/" + id,
      method: "patch",
      data: id
    }).success(function(data){
      window.location.reload();
    })
  })

	$('form.resolvedButton').click(function(e){
		$(this).parent().css("border-color", "#22F322")		
	})

	$('#createTicket').on('click', openForm);

	$('form#addTicket').submit(function(e) {
    e.preventDefault();
    console.log("works")
    $('#all').hide()
   $.ajax ({
      url: '/organizations/new',
      type: 'post',
      data: $(this).serialize(),
    }).success(function(response){
      console.log(response)
      $('form#newOrgForm').hide();
      $('#all').append(response)
      $('#all').show();
    }).fail(function(response){
      console.log("Not working.")
    })
  })

 $('#log_out_button').on("click", function (e) {
    e.preventDefault();
    $.ajax({
    	url: $(this).attr('href'),
    	type: 'delete',
    })
    .done(function() {
    	console.log("success");
    })
    .fail(function() {
    	console.log("error");
    })
    .always(function() {
    	console.log("complete");
    });
    
  });
// valitdation sign-up login
  var signUp = document.querySelector("#signUp");
  signUp.addEventListener("click", validate);

  // var _signUp = document.querySelector("#_sign-up");
  // _signUp.addEventListener("submit", signUP)
 
  var signUp = document.querySelector("#login");
  signUp.addEventListener("click", validate_login);

  // listener for individual ticket on _all_ticket.erb
  // var ticket = document.querySelector("#ticket_sub");
  // ticket.addEventListener("click", individualTicket); 
 
});
  // var tick = document.querySelector(".tick-view");
  // tick.addEventListener("click", individualTicket); 

// user authentication signUp
function validate(){
  var val = document.querySelector("#validate");
  val.style.display='block';  
}
function validate_login(){
  var val = document.querySelector("#validate-login");
  val.style.display='block';  
}
function signUP(e){
  e.preventDefault();
  console.log(e.target);
  var username = e.target.querySelector("#username").value;
  var email = e.target.querySelector("#email").value;
  var password = e.target.querySelector("#password").value;
  $.ajax({
    type: 'post',
    url: '/sign_in',
    data: { user:{username: username, email: email, password: password}}
  }).success(function(response){
    console.log("ajax works");
    console.log(response)
    // $('#ticket_sub').hide().html(response).fadeIn('fast');
  }).fail(function(response){
    console.log("Doesn't not work")
  })
}
function refreshTickets() { 
	// window.location.href = window.location.href;  
	// console.log("refresh tickets works")

	$.ajax({
		type: 'post',
		url: '/tickets',
		data: $(this).serialize()
	}).success(function(response){
		console.log("ajax works");
		console.log(response)
		$('#ticket_sub').hide().html(response).fadeIn('fast');
	}).fail(function(response){
		console.log("Doesn't not work")
	})
}

function openForm (event) {
  event.preventDefault();
  $('#newTicket').show();
};

// modal view
function individualTicket (event){
  var tar = event.target 
  console.log(tar)
  var target = tar.parentNode.parentNode.parentNode
  var category = target.querySelector(".mCat").innerHTML
  var description = target.querySelector(".mDesc").innerHTML
  var resolved = target.querySelector(".mRes").innerHTML
  var student = target.querySelector(".mStud").innerHTML

  // console.log("event target")
  // console.log(category);
  // console.log(description);
  // console.log(resolved);
  // console.log(student);

  console.log("modal stuff")
  var mBody = document.querySelector(".modal-body");

  mBody.querySelector(".mCat").innerHTML = category
  mBody.querySelector(".mDesc").innerHTML = description
  mBody.querySelector(".mRes").innerHTML = resolved
  mBody.querySelector(".mStud").innerHTML = student


}