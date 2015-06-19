module SessionsHelper
  def logged_in?
    unless @current_user.nil?
      true
    end
  end
end
