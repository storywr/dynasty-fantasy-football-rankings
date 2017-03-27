Rails.application.routes.draw do

  resources :adps
  resources :mflplayers
  resources :players
  
  namespace :api do
    resources :players, only: [:index, :create]
    resources :comments, only: [:index, :create]
    resources :mflplayers, only: [:index]
  end

end
