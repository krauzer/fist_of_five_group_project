get '/' do
  # Look in app/views/index.erb
  erb :index
end

# MEH - WILL MOVE THIS WHEN THERE'S SOMEWHERE BETTER TO PUT IT
get '/location' do
	erb :location
end