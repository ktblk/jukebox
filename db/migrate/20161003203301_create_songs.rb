class CreateSongs < ActiveRecord::Migration[5.0]
  def change
    create_table :songs do |t|
      t.references :albums, foreign_key: true
      t.string :song_name
      t.integer :song_order
      t.string :song_duration
      t.references :users, foreign_key: true

      t.timestamps
    end
  end
end
