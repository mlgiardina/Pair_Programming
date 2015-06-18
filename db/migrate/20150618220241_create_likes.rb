class CreateLikes < ActiveRecord::Migration
  def change
    create_table :likes do |t|
      t.integer :liked_id
      t.integer :liking_id

      t.timestamps null: false
    end
  end
end
