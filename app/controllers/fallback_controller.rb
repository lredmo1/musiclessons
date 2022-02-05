class FallbackController < ActionController::Base
    def index
        puts `this is fallback controller. #{[params:path]}`
        render file: 'client/public/index.html'
    end
end