Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    get "things", to: "things#index"
    post "things", to: "things#create"
    put "like/:thing_id", to: "things#like"
    delete "things/:id", to: "things#destroy"
  end

  get "*other", to: "static#index"
end
