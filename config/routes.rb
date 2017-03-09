Rails.application.routes.draw do
  resources :players

  scope '/api' do
    get :player, to: 'players#index'
  end

end
