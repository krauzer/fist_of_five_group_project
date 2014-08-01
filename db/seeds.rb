User.create(first_name: "Anthony", last_name: "Edwards", role_type: "student", email: "anthony.edwardsjr@gmail.com", access_token: "test", access_token_secret: "test")
User.create(first_name: "Molly", last_name: "Huerster", role_type: "student", email: "mary.huerster@gmail.com", access_token: "test", access_token_secret: "test")
User.create(first_name: "Vivek", last_name: "George", role_type: "student", email: "vivek.m.george@gmail.com", access_token: "test", access_token_secret: "test")
User.create(first_name: "John", last_name: "Berry", role_type: "student", email: "jpberry0623@gmail.com", access_token: "test", access_token_secret: "test")
User.create(first_name:"Dylan", last_name: "Krause", role_type: "student", email: "dykrause@gmail.com", access_token: "test", access_token_secret: "test")
User.create(first_name: "Cassie", last_name: "Moy", role_type: "student", email: "moy.cassie@gmail.com", access_token: "test", access_token_secret: "test")
User.create(first_name: "Farheen", last_name: "Malik", role_type: "student", email: "farheen.m.malik@gmail.com", access_token: "test", access_token_secret: "test")

User.create(first_name: "Mo", last_name: "Ramchandani", role_type: "coach", email: "mo@devbootcamp.com", access_token: "test", access_token_secret: "test")

@categories = ["ActiveRecord", "Sinatra", "RESTful routing", "AJAX", "OOJS", "jQuery", "CSS"]

User.where(role_type: "student").each do |student|
	3.times { student.student_tickets << Ticket.create(description: "test ticket", category: @categories.sample) }
end
