class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]


    def index
        users = User.all
        render json: users, status: :ok
    end
    
    def show
        # if params[:student_id]
        #     student = User.find(params[:student_id])
        #     render json: student
        #   else
        render json: @current_user
        #   end
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def newStudent
        user = User.create!(user_params)
        params = classroom_params
        params["student_id"] = user.id
        classroom = Classroom.create!(params)
        render json: user, status: :created

    end


    private

    def classroom_params
        params.permit(:teacher_id)
    end

    def user_params
      params.permit(:name, :email, :username, :password, :password_confirmation)
    end
end
