class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :remember_token
      t.string :avatar
      t.date :date_of_birth
      t.boolean :admin
      t.integer :account

      t.timestamps
    end
  end
end
