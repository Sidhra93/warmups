require "pry"

str = "title=jaws&page=5"
strArray = str.split(/\W/)

strHash = {}
strHash[strArray[0]] = strArray[1]
strHash[strArray[2]] = strArray[3].to_i

binding.pry
