class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.string :sender_name, null: false
      t.string :receiver_name, null: false
      t.text :body, null: false

      t.timestamps null: false
    end
  end
end
