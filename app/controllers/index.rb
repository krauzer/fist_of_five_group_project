get '/' do
  # Look in app/views/index.erb
  erb :index
end

get '/sign_in' do
  # the `request_token` method is defined in `app/helpers/oauth.rb`
  redirect request_token.authorize_url
end

get '/sign_out' do
  session.clear
  redirect '/'
end

get '/auth' do
  # the `request_token` method is defined in `app/helpers/oauth.rb`
  @access_token = request_token.get_token('authorization_code_value', :redirect_uri => 'https://127.0.0.1')
  console.log(@access_token) # our request token is only valid until we use it to get an access token, so let's delete it from our session
  response = @access_token.get('/api/resource', :params => { 'query_foo' => 'bar' })
  response.class.name

  session.delete(:request_token)

  # at this point in the code is where you'll need to create your user account and store the access token

  erb :index

end
