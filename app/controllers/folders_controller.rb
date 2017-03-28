class FoldersController < ApplicationController
  before_action :authenticate_user!, only: [:create, :update, :destroy]
  before_action :find_user
  before_action :find_folder, only: [:show, :update]

  def index
    @folders = if current_user && current_user.id == @user.id
      current_user.folders.order id: :desc
    else
      @user.folders.public_folders.order id: :desc
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
      @user.folders.find_by(id: params[:id]).subjects.order id: :desc
    else
      @user.folders.find_by(id: params[:id]).subjects.public_subjects.order id: :desc
    end
    render json: {
      status: 200,
      error: false,
      message: @folder.name,
      data: @subjects.as_json({include: :user})
    }, status: 200
  end

  def create
    folder = current_user.folders.new folder_params
    if folder.save
      render json: {
        status: 200,
        error: false,
        message: t("folders.create.created_folder") + params[:name],
        data: folder.as_json({include: :user})
      }, status: 200
    else
      render json: {
        status: 500,
        error: true,
        message: t("folders.create.cant_create_folder"),
        data: nil
      }, status: 500
    end
  end

  def update
    if current_user && current_user.id == @user.id
      if @folder.update_attributes folder_params
        render json: {
          status: 200,
          error: false,
          message: t("folders.update.success") + @folder.name,
          data: @folder.as_json({include: :user})
        }, status: 200
      else
        render json: {
          status: 500,
          error: true,
          message: t("folders.update.failure"),
          data: nil
        }, status: 500
      end
    else
      render json: {
        status: 401,
        error: true,
        message: t("users.error.unauthorized"),
        data: nil
      }, status: 401
    end
  end

  private
  def folder_params
    params.require(:folder).permit :name, :permission
  end

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
    @folder = @user.folders.find_by id: params[:id]
    unless @folder
      render json: {
        status: 404,
        error: true,
        message: t("folders.folder_not_found")
      }, status: 404
    end
  end
end
