class AddFavoriteToSongs < ActiveRecord::Migration[5.0]
  def change
    add_column :songs, :favorite, :boolean
  end
end
