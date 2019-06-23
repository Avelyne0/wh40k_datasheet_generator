class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users, id: :serial, force: :cascade do |t|
      t.string :email, index: true, unique: true
      t.string :password_digest
      t.string :name

      t.timestamps
    end
  end
end