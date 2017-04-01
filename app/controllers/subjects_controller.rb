class SubjectsController < ApplicationController
  before_action :authenticate_user!, only: [:create, :update, :destroy]
  before_action :find_user, only: [:index]

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

  def create
    subject = Subject.new new_params
    if subject.save!
      render json: {
        status: 200,
        error: false,
        message: nil,
        data: subject.as_json({include: :words})
      }, status: 200
    else
      render json: {
        status: 500,
        error: true,
        message: nil,
        data: nil
      }, status: 500
    end

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

  def new_params
    params.require(:subject)
      .permit :name, :permission, :user_id,
        words_attributes: [:word_content, :word_image, :definition_content, :definition_image]
  end
end
