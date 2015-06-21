class AnswersController < ApplicationController

  def index
    render json: Answer.all
  end

  def create
    authenticate_user!
    answer = Answer.new(answer_params)
    if answer.save
      render json: { message: "questions answered" }
    else
      render json: { message: "error" }, status: 403
  end

  private

  def answer_params
    params.require(:answer).permit(:user_id, :body)
  end

end
