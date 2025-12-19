# 40. FIND YOUR AGE
from datetime import date

today = date.today()

day = today.day
month = today.month
year = today.year

print("Current Day:", day)
print("Current Month:", month)
print("Current Year:", year)

print("-------------------------------------------")

Day = int(input("Enter Your Birth Day: "))
Month = int(input("Enter Your Birth Month: "))
Year = int(input("Enter Your Birth Year: "))

age = day - Day
mon = month - Month
yr = year - Year

if age < 0:
    sol1 = -age
    print("Day:", sol1)
else:
    print("Day:", age)

if mon < 0:
    sol2 = -mon
    print("Month:", sol2)
else:
    print("Month:", mon)

print("Year:", yr)
