Rails.application.routes.draw do
  resources :songs, only: [:index, :show]
  resources :students, only: [:index, :show]
  resources :teachers, only: [:index, :show]

  post "/signup", to: "teachers#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "teachers#show"

end
