class UsersController < ApplicationController
  def index
    render json: User.all
  end

  def show
    render json: User.find(params[:id])
  end

  def create
    user = User.create(user_params)
    render json: user
  end

  def destroy
    User.destroy(params[:id])

  private

  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation, :picture, :bio, :email)
  end

end
