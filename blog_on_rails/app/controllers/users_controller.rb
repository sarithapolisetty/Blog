class UsersController < ApplicationController
    before_action :find_user
#   before_action :authorize_user!, only: [:edit, :update]
    before_action :authenticate_user!


    def new
        @user = User.new
    end

    def create
        @user = User.new user_params
        if @user.save
            session[:user_id] = @user.id
            redirect_to root_path
        else
            render :new
        end
    end

    def edit
        
    end

    def update
      if @user.update edit_user_params
      flash[:success] = "Changes saved"
      else
      flash[:alert] = @user.errors.full_messages.join(", ")
      end
        redirect_to edit_user_path(@user)
    end

    def pw_edit
    end

    def pw_update
       current_password = params[:user][:current_password]
       new_password = params[:user][:new_password]
       user = current_user&.authenticate(current_password)
       if @user && user
        if new_password == params[:user][:new_password_confirmation]
          @user.update(password: new_password)
          flash[:success] = "Password Updated"
          redirect_to edit_user_path
        else
         flash[:alert] = "Passwords Do Not Match"
         redirect_to pw_edit_user_path
        end
      else
       flash[:alert] = "Current Password is Incorrect" 
       redirect_to pw_edit_user_path
      end
    end

    private

    def find_user
    @user = User.find params[:id] if params[:id].present?
    end

    def edit_user_params
    params.require(:user).permit(:name, :email)
    end

    def pw_params
        params.require(:user).permit(
            :current_password, 
            :new_password, 
            :new_password_confirmation
            )
    end

    def user_params
        params.require(:user).permit(
         :name, 
         :email, 
         :password, 
         :password_confirmation
        )
    end
end
