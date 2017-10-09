require 'pry'

num_array = [4, 1, 16, 1, 10, 35, 22]

def get_squares(num_array)
  square_array = []
  num_array.each do |number|
    square = Math.sqrt(number)
    if square % 1 == 0
      square_array.push(number)
    end
  end
  square_array.uniq.sort
end

binding.pry
