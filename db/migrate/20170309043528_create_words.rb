class CreateWords < ActiveRecord::Migration[5.0]
  def change
    create_table :words do |t|
      t.string :word_content
      t.integer :word_image
      t.string :definition_content
      t.integer :definition_image
      t.references :subject, foreign_key: true
      t.timestamps
    end
  end
end
