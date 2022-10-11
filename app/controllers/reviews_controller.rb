class ReviewsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :not_valid

    skip_before_action :authorize, only: :index
    
    def index
        render json: Review.all, status: :ok
    end

    def show
        review = Review.find(params[:id])
        render json: review, status: :ok
    end

    def create 
        review = Review.create!(r_params)
        render json: review, status: 201
    end

    def update
        review = Review.find(params[:id])
        review.update!(r_params)
        render json: review, status: 202 
    end

    def destroy
        Review.find(params[:id]).destroy
        render json: {}, status: 200
    end

    private

    def r_params
        params.permit(:rating, :review, :user_id, :car_id)
    end

    def not_found
        render json: {error: "Review not found"}, status: 404
    end

    def not_valid(error)
        render json: {error: error.message}, status: 422
    end
end

