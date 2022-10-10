# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Review.destroy_all
User.destroy_all
Car.destroy_all


puts "seeding users" 
u1 = User.create(username: "Jeffery", password: "53ugfgsefhge")
u2 = User.create(username: "Elon", password: "passwerd")
u3 = User.create(username: "Mark", password: "Meta1212")
u4 = User.create(username: "Tim", password: "Spam696969")
u5 = User.create(username: "Steve", password: "Sleak1uno")

puts "seeding cars"
c1 = Car.create(year: 1965, make: "Shelby", model: "Mustang", url: "https://cdn1.mecum.com/auctions/sc0520/sc0520-414695/images/01-1583864567028@2x.jpg?1592249933000")
c2 = Car.create(year: 1985, make: "Chevy", model: "Impala", url:"https://static.wikia.nocookie.net/supernatural/images/7/7e/Chevy-impala.jpg/revision/latest?cb=20110527194444")
c3 = Car.create(year: 1920, make: "Rolls-Royce", model: "Phantom", url: "https://designyoutrust.com/wp-content/uploads/2019/02/Rolls-Royce-Phantom-I-Jonckheere-Coupe.jpg")
c4 = Car.create(year: 2001, make: "Ferarri", model: "Prosangue", url:"https://carconfigurator.ferrari.com/assets/cars/portofinom/packages/default/car-ferrari-portofino-m_splash.jpg")
c5 = Car.create(year: 1991, make: "Jaguar", model: "Type E", url: "https://robbreport.com/wp-content/uploads/2020/10/1961-Jaguar-E-Type-Series-1-Roadster-4.png")
c6 = Car.create(year: 1970, make: "Alpha Romeo", model: "8C", url:"https://upload.wikimedia.org/wikipedia/commons/5/59/1938_Alfa_Romeo_8C_2900_B_Lungo.jpg")
c7 = Car.create(year: 2018, make: "Tesla", model: "Roadster", url:"https://cdn.motor1.com/images/mgl/VA0z9/s3/tesla-roadster.jpg")

puts "seeding reviews"
r1 = Review.create(rating: 4, review: "I loved it. Can't recomend enough!", user_id: u1.id, car_id:c3.id)
r2 = Review.create(rating: 3, review: "Ok, I guess.", user_id: u2.id, car_id: c5.id)
r3 = Review.create(rating: 2, review: "Not so great.", user_id: u3.id, car_id: c7.id)
r4 = Review.create(rating: 5, review: "Amazing! Simply Amazing!", user_id: u4.id, car_id: c1.id)
r5 = Review.create(rating: 5, review: "F@#KING Fantistic! ", user_id: u5.id, car_id: c2.id)
r6 = Review.create(rating: 1, review: "OMG! It suuuuuuuuuucked!", user_id: u1.id, car_id: c7.id)

puts "Done seeding"

