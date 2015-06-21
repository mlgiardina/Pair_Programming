class AnswersController < ApplicationController

  def index
    answers = []
    users = User.where.not(id: session[:user_id])
    users.each do |user|
      answers.push(user.answers.last)
    end
    render json: answers
  end

  def show
    authenticate_user!
    answer = Answer.where(user_id: session[:user_id]).first
    answer.body = answer.body.split("~")
    render json: answer
  end

  def create
    authenticate_user!
    serialized_body = params[:answer][:body].join("~")
    answer = Answer.new(user_id: params[:answer][:user_id], body: serialized_body)
    if answer.save
      render json: { message: "questions answered" }
    else
      render json: { message: "error" }, status: 403
    end
  end

  private

  def answer_params
    params.require(:answer).permit(:user_id, :body)
  end

end
