class LikesController < ApplicationController

  def index
    Cloudinary::Uploader.upload('app/assets/images/skyline.jpg')
  end

  def create
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
