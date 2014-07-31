class CreateTableTickets < ActiveRecord::Migration
  def change
    create_table :tickets do |t|
      t.belongs_to :student
      t.integer :coach_id
      t.text :description
      t.string :category
      t.boolean :resolved, default: :false
      t.timestamps
    end
  end
end
