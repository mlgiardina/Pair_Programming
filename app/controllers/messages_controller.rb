class MessagesController < ApplicationController

  def index
    render json: Message.all
  end

  def create
    message = Message.create(message_params)
  end

  def show
    message = Message.find(params[:id])
  end

  private

  def message_params
    params.require(:message).permit(:sender_name, :receiver_name, :body)
  end

end
