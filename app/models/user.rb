class User < ActiveRecord::Base
  has_many :tickets
  has_many :student_tickets, :class_name => "Ticket", foreign_key: "student_id"
  has_many :coach_tickets, :class_name => "Ticket", foreign_key: "coach_id"

  def initialize




  def self.save_token(access_token)
    self.find_or_create_by(username:            access_token.params[:screen_name],
                          access_token:         access_token.token,
                          access_token_secret:  access_token_secret)
  end

  def log_in
    session[:client] = OAuth2::Client.new(
    config.consumer_key        = ENV["CONSUMER_KEY"]
    config.consumer_secret     = ENV["CONSUMER_SECRET"]
    config.access_token        = self.access_token #self.oauth_token
    config.access_token_secret = self.access_token _secret #self.oauth_secret
    :site => 'https://accounts.google.com',
    :token_url => '/o/oauth2/token',
    :authorize_url => '/o/oauth2/auth'
  end



