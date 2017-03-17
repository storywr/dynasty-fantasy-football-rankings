Rails.application.routes.draw do
  
  resources :players

  namespace :api do
    resources :players, only: [:index]
  end

end
