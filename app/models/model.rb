class Model < ApplicationRecord
  has_and_belongs_to_many :abilities
  has_and_belongs_to_many :keywords
  has_and_belongs_to_many :wargear_options
  has_and_belongs_to_many :weapons
  has_and_belongs_to_many :units
end