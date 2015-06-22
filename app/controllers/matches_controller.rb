class MatchesController < ApplicationController

  def index
    user = User.where(username: params[:username]).first
    render json: user.matches.order_by.reverse.limit(3)
  end

  def create
    params[:matchscores].each do |obj|
      new_match = Match.new(obj)
      if new_match.save
        render json: new_match
      else
        render json: { message: "error" }, status: 403
      end
    end
    # serialized_match_body = params[:match][:body].join("~")
    # match = Match.new(user_id: params[:match][:user_id], body: serialized_match_body)
    # if match.save
    #   render json: match
    # else
    #   render json: { message: "error" }, status: 403
    # end
  end

  def update
    matches = User.find(session[:user_id]).matches
    if matches.update(match_params)
      render json: matches
    else
      render json: { message: "error" }, status: 403
    end
  end

  def show
    sorted_matches = []
    matches = User.find(session[:user_id]).matches
    matches.each do |match|
      unserialized_match_body = match.body.split("~")
      sorted_matches.push(unserialized_match_body)
    end
    render json: sorted_matches.sort_by { |match| match[1] }.reverse
  end
  
  private

  def match_params
    params.require(:match).permit(:user_id, :body)
  end

end
