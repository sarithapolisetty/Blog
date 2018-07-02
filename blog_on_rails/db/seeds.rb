# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.destroy_all

50.times do
    p= Post.create({
        title: Faker::Hacker.noun,
        body: Faker::Hacker.say_something_smart,
    })
end

puts "Created #{Post.count} Posts"

puts Cowsay.say("Posted #{Post.count} Posts", :elephant)


   