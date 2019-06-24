class CreateUnitAbilities < ActiveRecord::Migration[5.2]
  def change
    create_table :unit_abilities, id: false do |t|
      t.belongs_to :unit, index: true
      t.belongs_to :ability, index: true
    end
  end
end

