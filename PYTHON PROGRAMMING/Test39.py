# 39 PRINT WHETHER THE GIVEN YEAR VALUE IS A LEAP YEAR OR NOT
def func(year):
    if ((year % 4 == 0 and year % 100 != 0) or year % 400 == 0):
        print(f"{year} Is Leap Year!")
    else:
        print(f"{year} Is Not Leap Year!")
func(2004)
func(2005)
func(2016)
func(2024)
func(2025)