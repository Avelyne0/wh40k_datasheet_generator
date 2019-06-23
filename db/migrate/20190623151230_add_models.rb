class AddModels < ActiveRecord::Migration[5.2]
  def change
    create_table :models do |t|
      t.string :name
      t.integer :movement
      t.integer :weapon_skill
      t.integer :ballistic_skill
      t.integer :strength
      t.integer :toughness
      t.integer :wounds
      t.integer :attacks
      t.integer :leadership
      t.integer :save

      t.timestamps
    end

    create_table :abilities do |t|
      t.string :name
      t.string :content
    end

    create_table :weapons do |t|
      t.string :weapon_name
      t.integer :weapon_range
      t.string :weapon_type
      t.integer :weapon_strength
      t.integer :armour_piercing
      t.string :weapon_damage
      t.string :weapon_ability

      t.timestamps
    end

    create_table :units do |t|
      t.text :composition

      t.timestamps
    end

    create_table :faction_keywords do |t|
      t.string :name

      t.timestamps
    end

    create_table :keywords do |t|
      t.string :name

      t.timestamps
    end

    create_table :wargear_options do |t|
      t.string :option

      t.timestamps
    end

    create_table :models_weapons, id: false do |t|
      t.belongs_to :model, index: true
      t.belongs_to :weapon, index: true
    end

    create_table :models_wargear_options, id: false do |t|
      t.belongs_to :model, index: true
      t.belongs_to :wargear_option, index: true
    end

    create_table :units_wargear_options, id: false do |t|
      t.belongs_to :unit, index: true
      t.belongs_to :wargear_option, index: true
    end

    create_table :units_models, id: false do |t|
      t.belongs_to :unit, index: true
      t.belongs_to :model, index: true
    end

    create_table :models_keywords, id: false do |t|
      t.belongs_to :model, index: true
      t.belongs_to :keyword, index: true
    end

    create_table :units_faction_keywords, id: false do |t|
      t.belongs_to :unit, index: true
      t.belongs_to :faction_keyword, index: true
    end

    create_table :models_abilities, id: false do |t|
      t.belongs_to :model, index: true
      t.belongs_to :ability, index: true
    end
  end
end