class UsersController < ApplicationController

  def index
    render json: User.all
  end

  def show
    render json: User.find(params[:id])
  end

  def create
    if User.where(username: params[:username]).exists?
      render json: { message: "That username already exists. Please pick another one." }
    else
      user = User.new(user_params)
      if user.save
        render json: user
      else
        render json: { message: "Error" }
      end
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
