class RenameMinisToModels < ActiveRecord::Migration[5.2]
  def change
    rename_table :minis, :models
  end
end
