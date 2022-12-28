
class Koffeemachine :
    weight= 0
    color = ""
    brand = ""

machine1 = Koffeemachine()
machine2 = Koffeemachine()

machine1.color = "Yellow"
machine2.color = "Red"
machine1.brand ="Nestlé"
machine2.brand = "Godrege"
machine2.weight = 2.3
machine1.weight = 1.2

print("My first coffee machine's is from " +  machine1.brand + " company & it was " + machine1.color + ".")
print("Now my coffee machine's is from " +  machine2.brand + " company & it is " + machine2.color + ".")