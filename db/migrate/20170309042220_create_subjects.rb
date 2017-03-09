class CreateSubjects < ActiveRecord::Migration[5.0]
  def change
    create_table :subjects do |t|
      t.string :name
      t.enum :permission
      t.datetime :created_at
      t.datetime :updated_at
      t.references :user, foreign_key: true
      t.references :folder, foreign_key: true
      t.integer :fork_from

      t.timestamps
    end
  end
end
