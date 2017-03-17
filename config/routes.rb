Rails.application.routes.draw do

  namespace :api do
    resources :players, only: [:index]
  end

end
