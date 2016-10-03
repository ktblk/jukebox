Rails.application.routes.draw do
  get 'labels/index'

  get 'labels/show'

  get 'songs/index'

  get 'songs/show'

  get 'albums/index'

  get 'albums/show'

  get 'tune/index'

  get 'tune/show'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
