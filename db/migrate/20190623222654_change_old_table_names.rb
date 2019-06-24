class ChangeOldTableNames < ActiveRecord::Migration[5.2]
  def change
    rename_table :models_abilities, :model_abilities

    rename_table :models_keywords, :model_keywords

    rename_table :models_wargear_options, :model_wargear_options

    rename_table :units_faction_keywords, :unit_faction_keywords

    rename_table :units_models, :unit_models

    rename_table :units_wargear_options, :unit_wargear_options
  end
end
