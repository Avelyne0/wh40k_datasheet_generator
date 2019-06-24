class DropModelWargearOptions < ActiveRecord::Migration[5.2]
  def change
    drop_table :model_wargear_options
    drop_table :unit_wargear_options
    add_reference :wargear_options, :model, foreign_key: true
    add_reference :wargear_options, :unit, foreign_key: true
  end
end
