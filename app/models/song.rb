class Song < ApplicationRecord
  belongs_to :albums
  has_many :labels
end
