class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session

  def index
  end

  def current_user
    current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def authenticate_user!
    if current_user == nil
      render json: { message: "you must be logged in to do that" }
    end
  end

end
