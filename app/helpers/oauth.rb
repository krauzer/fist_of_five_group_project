def oauth_client
  raise RuntimeError, "You must set CONSUMER_KEY and CONSUMER_SECRET in your server environment." unless ENV['CONSUMER_KEY'] && ENV['CONSUMER_SECRET']
  @client ||= OAuth2::Client.new(
    ENV['CONSUMER_KEY'],
    ENV['CONSUMER_SECRET'],
    :site => "https://github.com/login/oauth/authorize"
    :token_url => '/auth',
    :authorize_url => '/o/oauth2/auth'
  )
end

def auth_uri
   oauth_client.auth_code.authorize_url(
    :redirect_uri => 'https://' + request.host + '/redirect', # <-- your redirect URI
    #:scope => 'profile' # <-- determined by reading the Google OAuth2 docs
    )
 end

def request_token
  if not session[:request_token]
    # this 'host_and_port' logic allows our app to work both locally and on Heroku
    host_and_port = request.host
    host_and_port << ":9393" if request.host == "localhost"

    # the `oauth_consumer` method is defined above
    session[:request_token] = oauth_consumer.get_request_token(
      :oauth_callback => "http://#{host_and_port}/auth"
    )
  end
  session[:request_token]
end

# from woodchucks
# def token_receipt
#  oauth_client.auth_code.get_token(
#   params[:code],
#   client_id: ENV['CLIENT_ID'],
#   client_secret: ENV['CLIENT_SECRET'],
#   redirect_uri: 'https://' + request.host + '/redirect'
#   )
# end
