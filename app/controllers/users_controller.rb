class UsersController < ApplicationController

  def index
    render json: User.all
  end

  def show
    render json: User.where(username: params[:username]).first
  end

  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      render json: { message: "user created and logged in" }
    else
      render json: { message: "error2" }
    end
  end

  def update
    authenticate_user!
    user = User.find(params[:id])
    if user.update(user_params)
      render json: { message: "profile updated" }
    else
      render json: { message: "ERROR"}, status: 403
    end
  end

  def destroy
    User.destroy(params[:id])
  end

  private

  def user_params
    params.require(:user).permit(:name, :username, :password, :password_confirmation, :picture, :bio, :email)
  end

end
