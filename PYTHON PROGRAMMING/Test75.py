# 75. CONVERT CELSIUS TO FAHRENHEIT IN JAVA
def celfah(cel, fah):
    CtoF = (cel * 9.0 / 5.0) + 32
    FtoC = (fah - 32) * 5.0 / 9.0
    print(f"Celsius To Fahrenheit: {CtoF}")
    print(f"Fahrenheit To Celsius: {FtoC}")
celfah(10, 50)
celfah(60, 80)