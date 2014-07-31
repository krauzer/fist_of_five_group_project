class Ticket < ActiveRecord::Base
  # Remember to create a migration!
  belongs_to :coach, :class_name => "User"
  belongs_to :student, :class_name => "User"

end
