class ImagesController < ApplicationController
  before_action :authenticate_user!, only: [:index, :create, :destroy]
  before_action :find_image, only: [:show, :destroy]

  def index
    images = current_user.images.order(id: :desc)
      .paginate page: params[:page], per_page: Settings.limit_images
    render json: {
      status: 200,
      error: false,
      message: nil,
      data: {
        count_images: current_user.images.count,
        total_pages: images.total_pages,
        current_page: images.current_page,
        next_page: images.next_page,
        prev_page: images.previous_page,
        images: images.as_json
      }
    }, status: 200
  end

  def show
    render json: {
      status: 200,
      error: false,
      message: nil,
      data: @image.as_json
    }, status: 200
  end

  def create
    image = current_user.images.new src: params[:file]
    if image.save
      render json: {
        status: 200,
        error: false,
        message: nil,
        data: image.as_json
      }, status: 200
    else
      render json: {
        status: 500,
        error: true,
        message: t("images.cant_upload_image"),
        data: nil
      }, status: 500
    end
  end

  def destroy
    @image.destroy
    render json: {
      status: 200,
      error: false,
      message: t("images.delete_success"),
      data: nil
    }, status: 200
  end

  private
  def find_image
    @image = Image.find_by id: params[:id]
    unless @image
      render json: {
        status: 404,
        error: true,
        message: nil,
        data: nil
      }, status: 404
    end
  end
end
