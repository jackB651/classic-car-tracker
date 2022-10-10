


class ApplicationController < ActionController::API
  include ActionController::Cookies
  


  # def hello_world
  #   session[:count] = (session[:count] || 0) + 1
  #   render json: { count: session[:count] }
  # end

  private

  # def current_user
  #   @current_user ||=User.find(session[:user_id])
  # end

  # def authenticate_user
  #   render json: {errors: "Not Authorized"}, status: :unauthorized unless current_user
  # end

end
