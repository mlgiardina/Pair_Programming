class MatchesController < ApplicationController

  def index
    user = User.where(username: params[:username]).first
    render json: user.matches.order_by.reverse.limit(3)
  end

  def create
    match = Match.new(match_params)
    if match.save
      render json: match
    else
      render json: { message: "error" }, status: 403
    end
  end

  def update
    matches = User.find(session[:user_id]).matches
    if matches.update(match_params)
      render json: matches
    else
      render json: { message: "error" }, status 403
    end
  end

  def show
    sorted_matches = []
    matches = User.find(session[:user_id]).matches
    matches.each do |match|
      unserialized_match_body = match.body.split("~")
      unserialized_match_body[0] = User.find(unserialized_match_body[0]).username
      sorted_matches.push(unserialized_match_body)
    end
    render json: sorted_matches.sort_by { |match| match[1] }.reverse

  private

  def match_params
    params.require(:match).permit(:user_id, :body)
  end

end
