class User < ActiveRecord::Base
  # Remember to create a migration!
  has_many :student_tickets, :class_name => "Ticket", foreign_key: "student_id"
  has_many :coach_tickets, :class_name => "Ticket", foreign_key: "coach_id"
end
