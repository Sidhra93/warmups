class Coffee
  def initialize (type, sugar, size, name)
    @name = name
    @size = size
    @type = type
    @sugar = sugar
    @time =
  end

  def name_spelling
    letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    vowels = "aeiouy".split("")
    @name[0] = letters[rand(0..letters.size)]
    @name = @name.gsub(/[aeiou]/, vowels[rand(0..vowels.size)])
  end

  def ready?
  end

  def to_s
    @name = name_spelling
    "#{@name}'s #{@type}, #{@size}, #{@sugar}"
  end
end
