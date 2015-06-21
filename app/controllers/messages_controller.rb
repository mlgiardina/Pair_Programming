class MessagesController < ApplicationController

  def index
    authenticate_user!
    if User.where(username: params[:username]).exists?
      if session[:user_id] == User.where(username: params[:username]).first.id
        sorted_messages = {}
        current_user = User.find(session[:user_id]).username
          Message.where(receiver_name: current_user).each do |message|
            if sorted_messages[message.sender_name]
              sorted_messages[message.sender_name].push(message)
            else
              sorted_messages[message.sender_name] = [message]
            end
        end
        render json: sorted_messages
      else
        render json: { message: "tried to access inbox of the wrong user!" }, status: 403
      end
    else
      render json: { message: "user doesn't exist" }, status: 404
    end
  end

  def create
    authenticate_user!
    message = Message.new(message_params)
    if message.save
      render json: { message: "Message sent!" }
    else
      render json: { message: "Error" }, status: 403
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
