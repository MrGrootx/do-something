# FullName = "Groot"
# Age = 20
# gpa = 3.7
# isAlive = False
#
# print("My Name is : {FullName} .. Age : {Age}")
# print(f"GPA : {gpa} isAlive : {isAlive}")
#
#
# if isAlive:
#     print("Yes He is Alive")
# else:
#     print("sorry to say this he is dead!!")

name = input('Enter your name: ')
while name == "":
    name = input('Enter your name: ')


age = int(input("Enter you fucking age"))


while age < 0:
    print('Your age should be above 0 to join this tournament')
    age = int(input("Enter you fucking age"))



print(f"Hey wazzup {name}")
print(f"Age {age}")
