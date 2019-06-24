class FixSaveCollumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :models, :save, :armour_save
  end
end

