Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resource :session, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create, :edit, :update]
  get "/", to: 'posts#index', as: :root
  resources :posts do
  resources :comments, only: [:create, :destroy]
 end
#  get "/posts/new",         to: "posts#new",      as: :new_post
#  post "/posts",            to: "posts#create",   as: :posts
#  get "/posts/:id",         to: "posts#show",     as: :post
#  get "/posts",             to: "posts#index"
#  delete "/posts/:id",      to: "posts#destroy"
#  get "/posts/:id/edit",    to: "posts#edit",     as: :edit_post
#  patch "/posts/:id",       to: "posts#update"
#  put "/posts/:id",         to: "posts#update"
end
