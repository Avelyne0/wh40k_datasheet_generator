class AddPointsToWeapon < ActiveRecord::Migration[5.2]
  def change
    add_column :weapons, :points, :integer
  end
end
