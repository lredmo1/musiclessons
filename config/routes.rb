Rails.application.routes.draw do
  resources :classrooms
  resources :users
  resources :songs, only: [:index, :show, :create]
  # resources :students, only: [:index, :show]
  # resources :teachers, only: [:index, :show]

  post "/signup", to: "users#create"
  post "/signup/student", to: "users#newStudent"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
  patch "/edit/:id", to: "users#update"

end

