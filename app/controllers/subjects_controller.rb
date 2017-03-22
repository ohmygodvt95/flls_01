class SubjectsController < ApplicationController
  before_action :authenticate_user!, only: [:create, :update, :destroy]
  before_action :find_user

  def index
    @subjects = if current_user && current_user.id == @user.id
      current_user.subjects
    else
      @user.subjects.public_subjects
    end
    render json: {
      status: 200,
      error: false,
      message: nil,
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
end
