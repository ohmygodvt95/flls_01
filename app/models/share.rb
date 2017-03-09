class Share < ApplicationRecord
  belongs_to :user
  belongs_to :folder
  belongs_to :subject
end
