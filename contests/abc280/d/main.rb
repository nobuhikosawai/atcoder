# require 'prime'
#
cache = {}
def kaijo(num, cache)
  if (num == 1)
    return num
  end

  if !!cache[num]
    return cache[num]
  end
  res = num * kaijo(num-1, cache)
  cache[num] = res
  res
end

input = gets.to_i
#
# div = input.prime_division
#
# max_prime = div[-1][0]
#
# if (max_prime == input)
#   puts(input)
#   return
# end
#
# tmp = kaijo(max_prime, cache)
#
# while(tmp < input) do
#   max_prime = max_prime + 1
#   tmp = kaijo(max_prime, cache)
# end
#
# puts(max_prime)
#

kaijo_results = []
(1..15).each do |i|
  res = kaijo(i, cache)
  kaijo_results.push(res)
end

res = kaijo_results.find_index do |r|
  r >= input && r % input == 0
end

if res.nil? || res == 14
  puts input
else
  puts res + 1
end
