# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Todo.destroy_all
todo_1 = Todo.create({ title: 'one', body: 'this is the first one', done: false })
todo_2 = Todo.create({ title: 'two', body: 'this is the second one', done: false })
todo_3 = Todo.create({ title: 'three', body: 'this is the third one', done: false })
