class CreateTableUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :username
      t.string :role_type
      t.string :email
      t.string :access_token
      t.string :access_token_secret
      t.timestamps
    end
  end
end
