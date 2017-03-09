class CreateMatches < ActiveRecord::Migration[5.0]
  def change
    create_table :matches do |t|
      t.references :user, foreign_key: true
      t.references :subject, foreign_key: true
      t.integer :score
      t.boolean :is_success
      t.datetime :created_at
      t.datetime :updated_at

      t.timestamps
    end
  end
end
