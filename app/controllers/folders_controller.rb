class FoldersController < ApplicationController
  before_action :authenticate_user!, only: [:create, :update, :destroy]
  before_action :find_user
  before_action :find_folder, only: [:show]
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

  def show
    @subjects = if current_user && current_user.id == @user.id
      @user.folders.find_by(id: params[:id]).subjects
    else
      @user.folders.find_by(id: params[:id]).subjects.public_subjects
    end
    render json: {
      status: 200,
      error: false,
      message: @folder.name,
      data: @subjects.as_json({include: :user})
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

  def find_folder
    @folder = Folder.find_by id: params[:id]
    unless @folder
      render json: {
        status: 404,
        error: true,
        message: t("folders.folder_not_found")
      }, status: 404
    end
  end
end
