class CarsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :not_valid
    
    skip_before_action :authorize, only: :index

    def index
        render json: Car.all, status: :ok
    end

    def show
        car = Car.find(params[:id])
        render json: car, status: :ok
    end

    def create 
        car = Car.create!(c_params)
        render json: car, status: 201
    end


    def destroy
        Car.find(params[:id]).destroy
        render json: {}, status: 200
    end

    private

    def c_params
        params.permit(:year, :make, :model, :url)
    end

    def not_found
        render json: {error: "Power not found"}, status: 404
    end

    def not_valid(error)
        render json: {error: error.message}, status: 422
    end
end

