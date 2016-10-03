class CreateLabels < ActiveRecord::Migration[5.0]
  def change
    create_table :labels do |t|
      t.references :songs, foreign_key: true
      t.string :song_label

      t.timestamps
    end
  end
end
