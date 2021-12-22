class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]


    def index
        users = User.all
        render json: users, status: :ok
    end
    
    def show
        render json: @current_user
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    private

    def user_params
      params.permit(:name, :email, :username, :password, :password_confirmation)
    end
end
