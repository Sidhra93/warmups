def i33tspeak(str)
  # puts str.tr("aeio", "4310") # translates letter for letter
  puts str.gsub(/[aeio]/, "a" => 4, "e" => 3, "i" => 1, "o" => 0)
end

loop do
  puts "Speak to Daniel!"
  statement = gets.chomp
  if statement.split.first == "bro"
    i33tspeak(statement.gsub(/bro/, ""))
  elsif statement == ""
    puts "Fine! Be that way."
    break;
  elsif statement.split("").last == "?" # statement[-1] == "?"
    puts "Sure"
  elsif statement == statement.downcase
    puts "Whatever!"
  elsif statement == statement.upcase
    puts "Woah! Chill Out"
  end
end
