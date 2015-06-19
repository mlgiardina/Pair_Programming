class ChangeMessagesTableFromIdsToNames < ActiveRecord::Migration
  def change
    change_column(:messages, :sender_id, :string)
    change_column(:messages, :receiver_id, :string)
    rename_column(:messages, :sender_id, :sender_name)
    rename_column(:messages, :receiver_id, :receiver_name)
  end
end
