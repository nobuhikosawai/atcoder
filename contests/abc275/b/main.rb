input = gets.split(" ")

a = input[0].to_i
b = input[1].to_i
c = input[2].to_i
d = input[3].to_i
e = input[4].to_i
f = input[5].to_i

def get_res(num)
  return num % 998244353
end

resA = get_res(a)
resB = get_res(b)
resC = get_res(c)
resD = get_res(d)
resE = get_res(e)
resF = get_res(f)

res = get_res(resA * resB * resC - resD * resE * resF)

p res
