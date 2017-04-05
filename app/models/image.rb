class Image < ApplicationRecord
  belongs_to :user
  mount_uploader :src, ImageUploader
end
