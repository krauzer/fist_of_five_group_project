helpers do
  
  def current_user
    p @user ||= User.find(session[:user_id]) if session[:user_id]
  end

end
