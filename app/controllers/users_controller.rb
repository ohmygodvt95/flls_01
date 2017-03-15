class UsersController < ApplicationController
  before_action :find_user, only: [:show]

  def show
    render json: @user
  end

  private
  def find_user
    @user = User.find_by id: params[:id]
  end
end
