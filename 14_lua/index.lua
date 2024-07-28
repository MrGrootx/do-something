-- local age =  15
-- local name =  age > 18 and 'Groot' or "Abi"
-- print(name)


-- LOOPS
--[[for i = 1, 100 do
   print(i)
end
]]--

-- TO CREATE A FILE
--[[
io.output('random.txt')
io.write('Hi  this is the great developer Abishek')
io.close()


io.input('random.txt')

local file =  io.read('*all')
print(file)

io.close()


local file = io.open('random.txt', 'w')
if file ~= nil then
   file:write('Hi this is the great developer Abishek')
   file:close()
else
   print("file doesn't exist")
end
]]--