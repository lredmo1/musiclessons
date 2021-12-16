class TeachersController < ApplicationController
# rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        teachers = Teacher.all
        render json: teachers, status: :ok
    end
    
   
    # def show
    #     teacher = Teacher.find(params[:id])
    #     render json: teacher, status: :ok
    # end

    # def show
    #     render json: @current_user
    # end

    def create
        teacher = Teacher.create!(teacher_params)
        session[:teacher_id] = teacher.id
        render json: teacher, status: :created
    end

    private

    def teacher_params
      params.permit(:name, :email, :username, :password, :password_confirmation)
    end

    # def render_not_found_response
    #     render json: {error: error.message}, status: :not_found
    # end
end
