class Word < ApplicationRecord
  belongs_to :subject, optional: true
end
