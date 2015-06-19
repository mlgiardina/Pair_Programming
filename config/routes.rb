Rails.application.routes.draw do
  resources :users
  resources :answers
  resources :likes
  resources :messages
  root 'application#index'
end
