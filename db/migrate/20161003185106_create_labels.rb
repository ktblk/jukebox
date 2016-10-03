class CreateLabels < ActiveRecord::Migration[5.0]
  def change
    create_table :labels do |t|
      t.string :song_label
      t.references :songs, foreign_key: true

      t.timestamps
    end
  end
end
