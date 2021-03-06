class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username],params[:user][:password])
    if @user
      login(@user)
      render json: @user
    else
      render json: {errors: 'invalid credentails'}, status: 422
      # redirect_to
    end
  end

  def destroy
    if current_user
      logout
      render json: { }
    else
      render json: {errors: 'no current user - 404'}, status: 404
      # render "error 404"
    end

    # redirect_to :index
  end
end
