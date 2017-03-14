Rails.application.routes.draw do

  root "static_pages#index"
  get "about" => "static_pages#about"
  get "help" => "static_pages#help"
end
