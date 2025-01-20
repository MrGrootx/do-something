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

-- print('hi')


local function Sum(...)

   local sums = 0

   for _, value in ipairs({...}) do
      -- if type(value) == 'number' then
      --    print('yes it is a number')
      --    break
      -- end

      if value == 1 then
         print('yes it is 1')
         break
      elseif value == 2 then
         print('yes this value has 2 also')
      else
         print('no it is not a number')
         break
      end
   end
   
end

Sum(2,3,4,5,6,7,8,9,10,55)