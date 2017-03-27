class CreateAdps < ActiveRecord::Migration[5.0]
  def change
    create_table :adps do |t|

      t.timestamps
    end
  end
end
