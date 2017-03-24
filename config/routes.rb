Rails.application.routes.draw do

  resources :players

  namespace :api do
    resources :players, only: [:index, :create]
    resources :comments, only: [:index]
  end

end
