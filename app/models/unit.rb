class Unit < ApplicationRecord
  has_and_belongs_to_many :models
  has_and_belongs_to_many :faction_keywords
  has_and_belongs_to_many :wargear_options
end