Rails.application.routes.draw do
  root :to => 'tune#index'

  get 'tune/show'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
