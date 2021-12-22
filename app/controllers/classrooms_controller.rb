class ClassroomsController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]
    
    def index
        classrooms = Classroom.all
        render json: classrooms, status: :ok
    end
end
