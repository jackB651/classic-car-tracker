class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        # byebug
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password]) #bcrypt method for authentication
            session[:user_id] = user.id
            render json: user, status: 200
        else
            render json: {error: "Invalid Username or Password"}, status: :unauthorized
        end
    end
    def destroy
        session.delete :user_id
        head :no_content
    end
end
