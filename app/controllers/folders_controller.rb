class FoldersController < ApplicationController
  before_action :authenticate_user!, only: [:create, :update, :destroy]
  before_action :find_user

  def index
    @folders = if current_user && current_user.id == @user.id
      current_user.folders
    else
      @user.folders.public_folders
    end
    render json: {
      status: 200,
      error: false,
      message: nil,
      data: @folders.as_json({include: :user})
    }, status: 200
  end

  private
  def find_user
    @user = User.find_by id: params[:user_id]
    unless @user
      render json: {
        status: 404,
        error: true,
        message: t("users.error.user_not_found")
      }, status: 404
    end
  end
end
