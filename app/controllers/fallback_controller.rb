class FallbackController < ActionController::Base
    def index
        puts `this is fallback controller. #{params[:path]}`
        render file: 'public/index.html'
    end
end