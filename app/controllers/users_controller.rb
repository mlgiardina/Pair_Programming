class UsersController < ApplicationController

  def index
    render json: User.all
  end

  def show
    render json: User.find(params[:id])
  end

  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      render json: { message: "user created and logged in" }
    else
      render json: { message: "That username or email already exists. Please pick another one." }
    end
  end

  def destroy
    User.destroy(params[:id])
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation, :picture, :bio, :email)
  end

end
