class User < ActiveRecord::Base

  def self.save_tokens(access_token)
    self.find_or_create_by(username:            access_token.params[:screen_name],
                           access_token:        access_token.token,
                           access_token_secret: access_token.secret)
  end



  def restful_user
    client = Twitter::REST::Client.new do |config|
      config.consumer_key        = ENV["CONSUMER_KEY"]
      config.consumer_secret     = ENV["CONSUMER_SECRET"]
      config.access_token        = self.access_token
      config.access_token_secret = self.access_token_secret
    end
    return client.user(self.username)
  end


end

