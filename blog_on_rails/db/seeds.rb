# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
PASSWORD = "moral"

Comment.delete_all
Post.delete_all
User.delete_all

associate_user = User.create(
  name: "sarithapolisetty",
  email: "sp@gmail.com",
  password: PASSWORD,
  admin: true
)

10.times do
  name = Faker::Name.name

  User.create(
    name: name,
    email: "#{name.downcase}@example.com",
    password: PASSWORD
  )
end

users = User.all

puts Cowsay.say "Created #{users.count}users", :dragon

50.times do
    p= Post.create({
        title: Faker::Hacker.noun,
        body: Faker::Hacker.say_something_smart,
        user: users.sample
    })
    if p.valid?
    rand(0..10).times do
      Comment.create(
        body: Faker::Matz.quote,
        post: p,
        user: users.sample
      )
    end
end
end

posts = Post.all
comments = Comment.all

puts "Created #{Post.count} Posts"

puts Cowsay.say("Posted #{posts.count} posts", :elephant)

puts Cowsay.say("Commented #{comments.count} comments", :cow)




   