get '/sign_in' do
  # the `request_token` method is defined in `app/helpers/oauth.rb`
  redirect request_token.authorize_url
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


#profile page
get '/users/:user_id' do
  @user = User.find_or_create_by(username: params[:username])
  @image = @user.restful_user.profile_image_url


  #find_by_username(username).profile_image_url


  erb :"user/profile"
end


get '/users/:user_id/tickets/:ticket_id' do

end


get '/sign_out' do
  session.clear
  redirect '/'
end

get '/auth' do
  # the `request_token` method is defined in `app/helpers/oauth.rb`
  @access_token = request_token.get_access_token(:oauth_verifier => params[:oauth_verifier])
  # our request token is only valid until we use it to get an access token, so let's delete it from our session
  session.delete(:request_token)

  # at this point in the code is where you'll need to create your user account and store the access token
  user = User.save_tokens(@access_token)
  session[:user_id] = user.id
  erb :index

end

  

delete '/users/:user_id' do 
return 401 unless params[:user_id].to_i == session[:user_id].to_i
  session.clear
end




