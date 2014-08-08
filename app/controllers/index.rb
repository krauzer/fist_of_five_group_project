get '/' do
  # Look in app/views/index.erb
  erb :'user/home'
end


get '/sign_out' do
  session.clear
  redirect '/'
end

# get '/auth' do
#   # the `request_token` method is defined in `app/helpers/oauth.rb`
#   @access_token = request_token.get_access_token(:oauth_verifier => params[:oauth_verifier])
#   # our request token is only valid until we use it to get an access token, so let's delete it from our session
#   session.delete(:request_token)

#   user = User.create(username: @access_token.params[:screen_name], access_token: @access_token.token, access_token_secret: @access_token.secret )

#   session[:user_id] = user.id


#   erb :index

# end
