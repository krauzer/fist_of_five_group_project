get '/tickets' do #route for coaches to see all tickets
	@tickets = Ticket.all
end


get '/tickets/:id' do #route for coaches to view info on single tickets
	@ticket = Ticket.find(params[:id])
end


post '/tickets/:id' do #route for coach to mark a ticket as resolved

end

# Student Tickets
get '/my_tickets' do
  erb :my_tickets
end

post '/my_tickets' do
  p "in controller"
  Ticket.create(description: params[:description])
  return "added ticket"
  erb :my_tickets
end

