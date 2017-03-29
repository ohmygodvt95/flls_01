class Subject < ApplicationRecord
  belongs_to :user
  belongs_to :folder
  has_many :words, dependent: :destroy

  scope :public_subjects, -> {where permission: 0}
end
