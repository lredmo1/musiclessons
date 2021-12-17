class SessionsController < ApplicationController
skip_before_action :authorize, only: :create


def create
    teacher = Teacher.find_by(username: params[:username])
    if teacher&.authenticate(params[:password])
      session[:teacher_id] = teacher.id
      render json: teacher
    else
      render json: { errors: ["Invalid username or password"] }, status: :unauthorized
    end
end
  
def destroy
    session.delete :teacher_id
    head :no_content
end
    
end
