class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find(params[:id])

    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      render json: (message: "logged in!")
    else
      render json: (message: "user does not exist"), status: 404
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_url
  end
end
