require_relative "robot"
require "pry"

puts "Robot 1: "

robot1 = Robot.new
puts robot1.name
puts robot1.name
puts robot1.name

puts "Robot 2: "

robot2 = Robot.new
puts robot2.name
puts robot2.name
puts robot2.name

puts "Robot 3: "

robot3 = Robot.new
puts robot3.name
puts robot3.name
puts "Resetting to factory settings"
robot3.reset
puts robot3.name
puts robot3.name
puts robot3.instruction_count
puts robot3.timers
binding.pry
