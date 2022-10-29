input = gets.to_i

def calc(num)
  if num == 0
    return 1
  end

  return calc((num / 2).floor) + calc((num / 3).floor)
end

res = calc(input)

p res