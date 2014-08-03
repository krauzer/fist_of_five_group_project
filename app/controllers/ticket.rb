get '/tickets' do #route for coaches to see all tickets
	@tickets = Ticket.fresh
	p @tickets
	# @user = User.find(session[:user_id])

	# if @user.role_type == "student" 
		# @tickets = Ticket.where(student_id: session[:user_id])
		# erb :'tickets/my_tickets'
	# else	
	redirect ('/tickets')
	# end
end

post '/tickets' do
	p params
	@tickets = Ticket.all
	@students = User.where(role_type: "student")
	erb :'partials/_all_tickets', :layout => false
end

get '/tickets/:id' do #route for coaches to view info on single ticket perhaps in a modal?
	@ticket = Ticket.find(params[:id])
end


post '/tickets/:id' do #route for coach to mark a ticket as resolved
	@ticket = Ticket.find(params[:id])
	@ticket.resolved = true; @ticket.save
	@tickets = Ticket.fresh
	# erb :'partials/_all_tickets', :layout => false
	redirect '/tickets'
end

##### Student Tickets #####

get '/my_tickets' do
  erb :'tickets/my_tickets'
end

post '/my_tickets' do
  # Need to create with user once login/out is implemented.
  # Extra feature: add category as well
  Ticket.create(student_id: 1, description: params[:description], location: params[:location])
  return "added ticket"
  erb :'tickets/my_tickets'
end

delete '/my_tickets/:id' do
  Ticket.find(params[:id]).destroy
  return "removed ticket"
  erb :'tickets/my_tickets'
end

patch '/my_tickets/:id' do
  Ticket.update(params[:id], resolved: true)
  return "marked ticket as resolved"
  erb :'tickets/my_tickets'
end
