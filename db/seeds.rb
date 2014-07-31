User.create(first_name: "Anthony", last_name: "Edwards", role_type: "student", email: "anthony.edwardsjr@gmail.com", token: "test")
User.create(first_name: "Molly", last_name: "Huerster", role_type: "student", email: "mary.huerster@gmail.com", token: "test")
User.create(first_name: "Vivek", last_name: "George", role_type: "student", email: "vivek.m.george@gmail.com", token: "test")
User.create(first_name: "John", last_name: "Berry", role_type: "student", email: "jpberry0623@gmail.com", token: "test")
User.create(first_name:"Dylan", last_name: "Krause", role_type: "student", email: "dykrause@gmail.com", token: "test")
User.create(first_name: "Cassie", last_name: "Moy", role_type: "student", email: "moy.cassie@gmail.com", token: "test")
User.create(first_name: "Farheen", last_name: "Malik", role_type: "student", email: "farheen.m.malik@gmail.com", token: "test")

User.create(first_name: "Mo", last_name: "Ramchandani", role_type: "coach", email: "mo@devbootcamp.com", token: "test")

@categories = ["ActiveRecord", "Sinatra", "RESTful routing", "AJAX", "OOJS", "jQuery", "CSS"]

User.all.each do |user|
	3.times { user.tickets << Ticket.create(description: "test ticket", category: @categories.sample) }
end