puts "🌱 Seeding musiclessons..."
puts "Deleteing previous data..."
# Song.destroy_all
Classroom.destroy_all
User.destroy_all



20.times do 
puts "Creating  users..."
User.create(
    name: Faker::Name.name, 
    email: Faker::Internet.email, 
    username: Faker::Internet.username, 
    password: "password",
)
end



puts "Creating classrooms..."
10.times do 
    Classroom.create(
        teacher_id: User.create(
            name: Faker::Name.name, 
            email: Faker::Internet.email, 
            username: Faker::Internet.username, 
            password: "password").id,
        student_id: User.all.sample.id  
    )
end

10.times do 
    Classroom.create(
        teacher_id: User.create(
            name: Faker::Name.name, 
            email: Faker::Internet.email, 
            username: Faker::Internet.username, 
            password: "password").id,
        student_id: User.all.sample.id  
    )
end

# Songs?

puts "✅ Done seeding!"
