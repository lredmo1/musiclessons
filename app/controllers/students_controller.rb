class StudentsController < ApplicationController
    def index
        students = Student.all
        render json: students, status: :ok
    end
end
