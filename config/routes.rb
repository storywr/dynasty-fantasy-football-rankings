Rails.application.routes.draw do


  resources :yahoolists
  resources :scores
  resources :profiles
  resources :rosters
  resources :leagues
  namespace :api do
    get '/mflplayers/', to: 'mflplayers#players'
    get '/adp/', to: 'adps#adp'
    get '/league/', to: 'leagues#league'
    get '/roster/', to: 'rosters#roster'
    get '/yahoolists/', to: 'yahoolists#yahoolists'
    post '/profiles/', to: 'profiles#profile'
    post '/scores/', to: 'scores#score'
    post '/players/', to: 'players#update'
    resources :players, only: [:index, :create, :update]
    resources :comments, only: [:index, :create]
    resources :mflplayers, only: [:index]
  end

end
