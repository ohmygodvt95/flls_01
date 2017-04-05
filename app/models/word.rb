class Word < ApplicationRecord
  belongs_to :subject, optional: true
  belongs_to :word_image_data, class_name: Image.name, foreign_key: :word_image, optional: true
  belongs_to :define_image_data, class_name: Image.name, foreign_key: :definition_image, optional: true
end
