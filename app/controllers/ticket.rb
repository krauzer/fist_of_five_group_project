get '/tickets' do #route for coaches to see all tickets
	@tickets = Ticket.where(created_at: (Time.now.midnight - 1.day)..Time.now.midnight)
	p @tickets
	
	@students = User.where(role_type: "student")
	erb :'tickets/all'
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
	@ticket.resolved = true
	@ticket.save
	# erb :'partials/_all_tickets'
	redirect '/tickets'
end

