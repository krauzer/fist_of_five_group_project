class User < ActiveRecord::Base

  has_many :tickets

  def log_in
    session[:client] = Twitter::REST::Client.new do |config|
    config.consumer_key        = ENV["CONSUMER_KEY"]
    config.consumer_secret     = ENV["CONSUMER_SECRET"]
    config.access_token        = @user.oauth_token
    config.access_token_secret = @user.oauth_secret
  end

  end
end
