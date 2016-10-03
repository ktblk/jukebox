class Song < ApplicationRecord
  belongs_to :albums
  belongs_to :users
end
