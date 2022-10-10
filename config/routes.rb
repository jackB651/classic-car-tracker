Rails.application.routes.draw do
  resources :users, only: [:index, :show, :create]
  resources :reviews, only: [:index, :show, :create, :update, :destroy]
  resources :cars, only: [:index, :show, :create, :destroy]
  
  # get '/hello', to: 'application#hello_world'
  # # Routing logic: fallback requests for React Router.
  # # Leave this here to help deploy your app later!
  
  post "/signup", to: "users#create"

  get "/me" , to: "users#show"

  post "/login", to: "sessions#create"
  
  delete "/logout", to: "sessions#destroy"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
