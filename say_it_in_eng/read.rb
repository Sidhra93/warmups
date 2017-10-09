require 'pry'

class Say
  def initialize(number)
    @number = number
  end

  def in_english
    ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    tens = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
    teens = ["", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]

    if @number >= 0 && @number < 100
      number = @number.to_s
      if @number >= 20
        "#{tens[number[0].to_i]} #{ones[number[1].to_i]}"
      elsif @number > 10
        "#{teens[number[1].to_i]}"
      elsif @number == 10
        "#{tens[number[0].to_i]}"
      elsif @number > 0
        "#{ones[number[0].to_i]}"
      else
        "zero"
      end
    else
      "Number must be between 0 and 99!"
    end
  end
end

binding.pry
puts "done"
