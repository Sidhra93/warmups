require "pry"

orders = {}


def new_order(orders)
  puts "Name for Order:"
  name =  gets.chomp

  answer = ""
  items = []

  still_ordering = true
  while still_ordering do
    puts "#{name} wants to order:"
    items.push(gets.chomp)

    puts "And another item to your order? (y/n)"
    still_ordering = gets.chomp == 'y'
    # if (gets.chomp == 'y') {
    #   still_ordering = true
    # } else {
    #   still_ordering = false
    # }
  end
  orders[name] = items
end
binding.pry
