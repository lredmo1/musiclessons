Rails.application.routes.draw do
  resources :classrooms
  resources :users
  resources :songs, only: [:index, :show]
  resources :students, only: [:index, :show]
  resources :teachers, only: [:index, :show]

  post "/signup", to: "users#create"
  post "/signup/student", to: "users#newStudent"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
  # get "/users/:student_id", to: "users#show"
end
