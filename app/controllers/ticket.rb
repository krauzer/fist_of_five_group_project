get '/tickets' do #route for coaches to see all tickets
	@tickets = Ticket.all	
	@students = User.where(role_type: "student")
	erb :'tickets/all'
end

post '/tickets' do
	p params
	@tickets = Ticket.all
	@students = User.where(role_type: "student")
	erb :'partials/_all_tickets'
end

get '/tickets/:id' do #route for coaches to view info on single tickets
	@ticket = Ticket.find(params[:id])

end


post '/tickets/:id' do #route for coach to mark a ticket as resolved

end

