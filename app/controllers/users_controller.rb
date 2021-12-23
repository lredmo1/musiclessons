class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]


    def index
        users = @current_user.students
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

    def newStudent
        user = User.create!(user_params)
        classroom = Classroom.create!(student_id:user.id, teacher_id:@current_user.id)
        render json: user, status: :created

    end

    def destroy
        classroom = @current_user.teacher_classrooms.find_by(student_id: params[:id])
        if classroom
        classroom.student.destroy
        head :no_content
        end
    end

    def update
        user = User.find(params[:id])
        user.update(user_params)
        render json: user, status: :ok
    end

    private

    def classroom_params
        # params.permit(:teacher_id: @current_user)
    end

    def user_params
      params.permit(:name, :email, :username, :password, :password_confirmation)
    end
end
