class CreateScreenSettings < ActiveRecord::Migration[5.0]
  def change
    create_table :screen_settings do |t|
      t.string :screen_name
      t.string :color
      t.string :title
      t.string :font

      t.timestamps
    end
  end
end
