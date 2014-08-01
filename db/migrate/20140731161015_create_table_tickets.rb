class CreateTableTickets < ActiveRecord::Migration
  def change
    create_table :tickets do |t|
      t.references :student
      t.references :coach
      t.text :description
      t.string :category
      t.boolean :resolved, default: :false
      t.timestamps
    end
  end
end
