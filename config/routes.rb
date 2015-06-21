Rails.application.routes.draw do

  get 'messages/inbox', to: 'messages#index'
  get 'users/single', to: 'users#show'
  get 'session', to: 'sessions#show'
  put 'users', to: 'users#update'

  resources :users
  resources :answers
  resources :likes
  resources :messages

  get 'login', to: 'sessions#new', as: 'login'
  post 'login', to: 'sessions#create', as: 'create_session'
  get 'logout', to: 'sessions#destroy', as: 'logout'

  root 'application#index'

end
