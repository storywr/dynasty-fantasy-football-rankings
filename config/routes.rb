Rails.application.routes.draw do

  resources :adps
  resources :mflplayers
  resources :players

  namespace :api do
    post '/players/', to: 'players#update'
    resources :players, only: [:index, :create, :update]
    resources :comments, only: [:index, :create]
    resources :mflplayers, only: [:index]
  end

end
