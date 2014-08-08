get '/sign_in' do
  # this part works, I think
  @state="somenonsense"
  redirect "https://github.com/login/oauth/authorize?client_id=#{ENV['CLIENT_ID']}&redirect_uri=http://127.0.0.1:9393/auth&scope=user&state=#{@state}"
end

post '/auth' do
  @code = params[:code]
  state = params[:state]
  redirect "https://github.com/login/oauth/access_token?client_id=#{ENV['CLIENT_ID']}&client_secret=#{ENV['CLIENT_SECRET']}&code=@code&redirect_uri=http://127.0.0.1:9393/landing_page" if state == @state
end

get '/auth' do
  @access_token = params[:access_token]
  @user = User.find_or_create_by(access_token: @access_token)
  session[:user_id] = @user.id
  erb :'user/home'
end

get '/landing_page' do
  @access_token = params[:access_token]
  @user = User.find_or_create_by(access_token: @access_token)
  session[:user_id] = @user.id
  erb :'tickets/all'
end

post '/logout' do
  session[:user_id] = nil
  redirect '/'
end




