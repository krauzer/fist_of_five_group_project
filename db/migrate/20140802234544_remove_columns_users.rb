class RemoveColumnsUsers < ActiveRecord::Migration
  def change
  	remove_column :users, :access_token
  	remove_column :users, :access_token_secret

  	add_column :users, :password, :string
  end
end
