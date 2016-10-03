Rails.application.routes.draw do
  get 'songs/index'

  get 'songs/show'

  get 'users/index'

  get 'users/show'

  get 'tune/index'

  get 'tune/show'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
