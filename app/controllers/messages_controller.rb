class MessagesController < ApplicationController

  def index
    authenticate_user!
    if User.where(username: params[:username]).exists?
      if session[:user_id] == User.where(username: params[:username]).first.id
        sorted_messages = {}
        unique_users = User.all.distinct.pluck("username")
        current_user = User.find(session[:user_id]).username
        unique_users.each do |user|
          Message.all.each do |message|
            if message.receiver_name == current_user
            sorted_messages["#{user}"] = Message.where(sender_name: user)
            end
          end
        end
        render json: sorted_messages
      else
        render json: { message: "wrong user!" }
      end
    else
      render json: { message: "user doesn't exist" }
    end
  end

  def create
    authenticate_user!
    message = Message.new(message_params)
    if message.save
      render json: { message: "Message sent!" }
    else
      render json: { message: "Error" }
    end
  end

  def show
    message = Message.find(params[:id])
  end

  private

  def message_params
    params.require(:message).permit(:sender_name, :receiver_name, :body)
  end

end
