class Subject < ApplicationRecord
  belongs_to :user
  belongs_to :folder

  scope :public_subjects, -> {where permission: 0}
end
