class AddNameToUnits < ActiveRecord::Migration[5.2]
  def change
    add_column :units, :name, :text
  end
end
