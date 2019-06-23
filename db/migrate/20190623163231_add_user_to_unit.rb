class AddUserToUnit < ActiveRecord::Migration[5.2]
  def change
    add_reference :units, :user, foreign_key: true
  end
end
