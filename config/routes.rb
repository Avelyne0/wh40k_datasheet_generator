Rails.application.routes.draw do
  resources :abilities
  get 'sessions/new'
  resources :faction_keywords
  resources :keywords
  resources :models
  resources :units
  resources :users
  resources :wargear_options
  resources :weapons
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'application#hello'
  #root '/login' => "sessions#new"
  get '/signup' => 'users#new'
  post '/signup' => 'users#create'
  get '/login' => 'sessions#new', as: :login
  post '/login' => 'sessions#create'
  get 'sessions/destroy', as: :logout
end
