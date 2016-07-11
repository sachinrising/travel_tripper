Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :screen_settings
  root :to => 'screen_settings#home'

end
