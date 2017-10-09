require "pry"

hex = "0xAB"

def pronounce(hex)
  hex_array = hex.split("").pop(2)
  binding.pry
  hex_array.each do |elem|
    if elem == "A"
      elem = "atta"
    elsif elem == "B"
      elem = "bibbity"
    elsif elem == "C"
      elem = "city"
    elsif elem == "D"
      elem = "dickety"
    elsif elem == "E"
      elem = "ebbity"
    elsif elem == "F"
      elem = "fleventy"
    end
  end
  hex_array
end

puts pronounce(hex)
puts "worked"
