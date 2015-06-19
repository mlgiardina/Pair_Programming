class LikesController < ApplicationController

  def create
    like = Like.create(like_params)
    render json: like
  end

  private

  def like_params
    params.require(:like).permit(:liked_id, :liking_id)
  end

end
