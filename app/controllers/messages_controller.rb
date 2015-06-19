class MessagesController < ApplicationController

  def index
    render json: Message.all
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
