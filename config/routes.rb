Rails.application.routes.draw do

  resources :players do
    resources :comments, only: [:index, :show, :new, :create]
  end

  namespace :api do
    resources :players, only: [:index]
    resources :comments, only: [:index]
  end

end
