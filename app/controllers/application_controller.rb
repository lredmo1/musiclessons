class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    before_action :authorize


    private

    
    def authorize
        # session[:init] = true
        @current_teacher = Teacher.find_by(id: session[:teacher_id])
        render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_teacher
    end

    def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

end
