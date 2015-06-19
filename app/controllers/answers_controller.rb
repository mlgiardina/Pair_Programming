class AnswersController < ApplicationController

  def index
    render json: Answer.all
  end

  def create
    answer = Answer.create(answer_params)
    render json: answer
  end

  private

  def answer_params
    params.require(:answer).permit(:user_id, :body)
  end

end
