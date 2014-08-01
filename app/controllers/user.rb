get '/user/login' do 
	#User Login page
	erb :"user/login" 
end

post '/user/login' do 
	#Set user from login form 
	  @email = params[:email]
  user = User.authenticate(@email, params[:password])
  if user
    # successfully authenticated; set up session and redirect
    session[:user_id] = user.id
    redirect '/'
  else
    # an error occurred, re-render the sign-in form, displaying an error
    @error = "Invalid email or password."
    erb :"user/login"
  end
end

post '/users' do
	#create new user
	 # sign-up
  @user = User.new params[:user]
  if @user.save
    # successfully created new account; set up the session and redirect
    session[:user_id] = @user.id
    redirect '/'
  else
    # an error occurred, re-render the sign-up form, displaying errors
    erb :"user/sign_up"
  end
end

# display user profile
get '/users/:user_id' do
  erb :"user/profile"
end

get '/users/:user_id/tickets/:ticket_id' do
  
end