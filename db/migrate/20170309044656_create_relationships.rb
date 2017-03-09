class CreateRelationships < ActiveRecord::Migration[5.0]
  def change
    create_table :follows do |t|
      t.integer :follwer_id
      t.integer :followed_id
      t.datetime :created_at
      t.datetime :updated_at

      t.timestamps
    end
    add_index :relationships, :follower_id
    add_index :relationships, :followed_id
    add_index :relationships, [:follower_id, :followed_id], unique: true
  end
end
