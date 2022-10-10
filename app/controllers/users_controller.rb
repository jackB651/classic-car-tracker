class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :not_valid
    def index
        render json: User.all, status: :ok
    end

    def show
        user = User.find(params[:id])
        render json: user, status: :ok
    end

    def create
        user = User.create(user_params)
        sessions[:user_id] = user.id
        render json: user, status: :ok
    end

    private

    def user_params
        params.permit(:username, :password)
    end

    def not_found
        render json: {error: "Car not found"}, status: 404
    end

    def not_valid(error)
        render json: {error: error.message}, status: 422
    end
end
