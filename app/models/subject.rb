class Subject < ApplicationRecord
  belongs_to :user
  belongs_to :folder, optional: true
  has_many :words, dependent: :destroy

  accepts_nested_attributes_for :words, reject_if: :reject_words

  scope :public_subjects, -> {where permission: 0}

  def reject_words attributes
    attributes[:word_content].blank?
  end

  def words_limit
    self.words.take Settings.limit
  end

  def count_words
    self.words.count
  end
end
