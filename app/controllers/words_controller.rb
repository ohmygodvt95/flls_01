class WordsController < ApplicationController
  before_action :authenticate_user!, only: [:create, :update, :destroy]
  before_action :find_subject, only: [:index]

  def index
    @words = @subject.words.offset(params[:record_id] || 0)
      .take Settings.limit_word_record
    render json: {
      status: 200,
      error: false,
      message: nil,
      data: @words.as_json
    }, status: 200
  end

  private
  def find_subject
    @subject = Subject.find_by id: params[:subject_id]
    unless @subject
      render json: {
        status: 404,
        error: true,
        message: t("subjects.error.subject_not_found")
      }, status: 404
    end
  end
end
