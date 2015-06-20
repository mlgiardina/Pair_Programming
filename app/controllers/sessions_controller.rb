class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_username(params[:username])

    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      render json: { message: "logged in!" }
    else
      render json: { message: "user does not exist" }, status: 404
    end
  end

  def show
    render json: User.find(session[:user_id])
  end

  def destroy
    session[:user_id] = nil
    render json: { message: "logged out!" }
  end
end
