puts "🌱 Seeding music..."
puts "Deleteing previous data..."
Song.destroy_all
Student.destroy_all
Teacher.destroy_all

puts "Creating teachers..."
Teacher.create(
    name: Faker::Name.name, 
    email: Faker::Internet.email, 
    username: Faker::Internet.username, 
    password: "password"
)
Teacher.create(
    name: Faker::Name.name, 
    email: Faker::Internet.email, 
    username: Faker::Internet.username, 
    password: "password"
)


puts "Creating students..."
20.times do 
Student.create(
    name: Faker::Name.name, 
    student_id: Faker::Number.number(digits: 6), 
    username: Faker::Internet.username, 
    password: "password",
    teacher_id: Teacher.all.sample.id
)
end
    

puts "Creating songs..."
40.times do 
    Song.create(
        name: Faker::Name.name, 
        data: "info", 
        student_id: Student.all.sample.id  
    )
end

puts "✅ Done seeding!"
