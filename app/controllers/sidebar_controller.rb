class SidebarController < ApplicationController
  before_action :authenticate_user!, only: [:index]
  before_action :find_user

  def index
    @folders = @user.folders.limit Settings.limit
    @subjects = @user.subjects.limit Settings.limit
    render json: {
      status: 200,
      error: false,
      message: nil,
      data: {
        folders: @folders,
        subjects: @subjects
      }
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
