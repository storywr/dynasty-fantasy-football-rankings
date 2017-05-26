class CreateYahoolists < ActiveRecord::Migration[5.0]
  def change
    create_table :yahoolists do |t|
      t.string "name"
      t.string "pic"
      t.timestamps
    end
  end
end
