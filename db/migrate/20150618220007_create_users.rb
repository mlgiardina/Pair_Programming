class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :picture, null: false
      t.string :email, null: false
      t.text :bio, null: false
      t.string :password_digest, null: false
      t.string :name, null: false

      t.timestamps null: false
    end
  end
end
