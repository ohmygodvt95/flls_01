class Folder < ApplicationRecord
  belongs_to :user
  has_many :subjects, dependent: :destroy

  scope :public_folders, -> {where permission: 0}
end
