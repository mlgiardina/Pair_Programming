class LikesController < ApplicationController

  def index
  end

  def create
    authenticate_user!
    like = Like.new(like_params)
    if like.save
      render json: { message: "like worked successfully" }
    else
      render json: { message: "error" }, status: 501
    end
  end

  private

  def like_params
    params.require(:like).permit(:liked_id, :liking_id)
  end

end
