class CreateShares < ActiveRecord::Migration[5.0]
  def change
    create_table :shares do |t|
      t.integer :type
      t.references :user, foreign_key: true
      t.references :folder, foreign_key: true
      t.references :subject, foreign_key: true
      t.string :token
      t.timestamps
    end
  end
end
