Rails.application.routes.draw do
  root "static_pages#index"
  get "about" => "static_pages#about"
  get "help" => "static_pages#help"

  devise_for :users, controllers: {omniauth_callbacks: "auths/omniauth_callbacks#create"}

  scope :api do
    scope :v1 do
      resources :users, only: [:show] do
        resources :folders, only: [:index, :create]
        resources :subjects, only: [:index, :create]
      end
    end
  end
end
