class Dice
  def initialize
    @numbers = []
  end

  def Dice.roll(*times)
    @numbers = []
    i = 1
    if times == []
      @numbers = rand(1..6)
    else
      while i <= times[0] do
        @numbers.push(rand(1..6))
        i += 1
      end
    end
    self
  end

  def Dice.sum
    sum = 0
    sum_array = []
    @numbers.each do |number|
      sum += number
    end
    sum_array = [@numbers, sum]
  end
end
