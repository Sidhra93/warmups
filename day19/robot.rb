class Robot
  def initialize
    @name = name_generator
    @instruction_count = 0
    @create_time = Time.now
    @boot_time = nil
  end

  def name_generator
    letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    random_letters = letters.split("").sample + letters.split("").sample
    random_numbers = rand(100..999).to_s
    name = random_letters + random_numbers
  end

  def name
    @instruction_count += 1
    @name
  end

  def reset
    @instruction_count += 1
    @boot_time = Time.now
    @name = name_generator
  end

  def instruction_count
    @instruction_count
  end

  def timers
    "#{(Time.now).to_i - @boot_time.to_i} seconds since last boot, #{(Time.now).to_i - @create_time.to_i} seconds since creation"
  end
end
