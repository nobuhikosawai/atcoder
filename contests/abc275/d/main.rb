input = gets.to_i

def calc(num, cache)
  if num == 0
    return 1
  end

  if cache[num]
    return cache[num]
  end

  res = calc((num / 2).floor, cache) + calc((num / 3).floor, cache)
  cache[num] = res
end

res = calc(input, {})

p res