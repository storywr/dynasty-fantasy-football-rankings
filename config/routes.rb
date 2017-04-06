Rails.application.routes.draw do

  resources :leagues
  namespace :api do
    post '/players/', to: 'players#update'
    resources :players, only: [:index, :create, :update]
    resources :comments, only: [:index, :create]
    resources :mflplayers, only: [:index]
  end

end
