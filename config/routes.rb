Rails.application.routes.draw do
  root "static_pages#index"
  get "about" => "static_pages#about"
  get "help" => "static_pages#help"

  devise_for :users, controllers: {omniauth_callbacks: "auths/omniauth_callbacks#create"}

  scope :api do
    scope :v1 do
      resources :users, only: [:show] do
        resources :folders, except: [:edit, :new]
        resources :subjects, only: [:index]
        resources :sidebar, only: [:index]
      end
      resources :subjects, only: [:show, :create] do
        resources :flash_card, only: [:show]
        resources :words, only: [:index, :show]
      end
    end
  end
end
