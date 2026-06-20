# npm run train!!!!!
# TASK V

# Stringdagi har bir harf necha marta takrorlanganini object sifatida qaytarsin.

# Masalan: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}

def countChars(a):
    result = {}
    for chars in a:
        if chars in result:
            result[chars] = result[chars] + 1
        else:
            result[chars] = 1
    return result


print(countChars("hello"))
# TASK T

# Ikkita arrayni qabul qilib, ularni birlashtirib tartiblangan holda qaytarsin.

# Masalan: mergeSortedArrays([0, 3, 4], [4, 6]) return [0, 3, 4, 4, 6]


# def mergeSortedArrays(a, b):

#     arr = a + b
#     arr.sort()
#     return arr


# print(mergeSortedArrays([0, 3, 4], [4, 6]))


# TASK S

# Array ichidagi tushib qolgan sonni topib qaytarsin.

# Masalan: missingNumber([3, 0, 1]) return 2


# def missNumb(numbs):
#     a = len(numbs)

#     for b in range(a + 1):
#         if b not in numbs:
#             return b


# print(missNumb([3, 0, 1]))


# TASK R

# "1 + 2" ko'rinishidagi stringni hisoblab number qaytarsin.

# Masalan: calculate("1 + 3") return 4
# def calculate(a):

#     str = a.split()
#     print(str)


# print(calculate("1 + 3"))


# def calculate(strnumb):
#     a, b, c = strnumb.split()

#     a = int(a)
#     c = int(c)

#     if b == "+":
#         return a + c
#     elif b == "-":
#         return a - c
#     elif b == "*":
#         return a * c
#     elif b == "/":
#         return a / c


# print(calculate("1 + 3"))


# TASK Q

# Objectda berilgan string propertysi borligini tekshirsin.

# Masalan: hasProperty({name: "BMW"}, "name") return true


# def hasProperty(a, b):

#     if b in a:
#         return True

#     return False


# print(hasProperty({"name": "BMW"}, "name"))


# TASK P

# Objectni nested array sifatida convert qilib qaytarsin.

# Masalan: objectToArray({a: 10, b: 20}) return [["a", 10], ["b", 20]]

# def objectToArray(obj):

#     array = []
#     for key, value in obj.items():
#         item = [key, value]
#         array.append(item)
#     return array


# print(objectToArray({"a": 10, "b": 20}))


# def objectToArray(array):
#     obj = {
#         "a": 10,
#         "b": 20,
#     }

#     array = []
#     for key, value in obj.items():
#         item = [key, value]
#         array.append(item)
#     return array


# print(objectToArray({"a": 10, "b": 20}))


# def calculateSumOfNumbers(arr):
#     result = 0

#     for item in arr:
#         if type(item) in [int, float]:
#             result += item

#     return result


# print(calculateSumOfNumbers([10, "10", {"son": 10}, True, 35]))

# TASK O

# Array ichidagi har xil qiymatlardan faqat sonlar yig'indisini hisoblab qaytarsin.

# Masalan: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45


# TASK N

# Stringni palindrom ekanligini aniqlab true yoki false qaytarsin.

# Masalan: palindromCheck("dad") return true


# def palindromCheck(a):
#     if a == a[::-1]:
#         return True
#     else:
#         return False


# print(palindromCheck("dad"))


#     return " ".join(new_words)

# TASK M

# Array ichidagi har bir raqam uchun raqamning o'zi va uning kvadratidan tashkil topgan object hosil qilib qaytarsin.

# Masalan: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, ...]


# JAVOB:


# def getSquareNumbers(a):
#     result = []

#     for num in a:
#         obj = {
#             "numb": num,
#             "squr": num ** 2
#         }
#         result.append(obj)

#     return result


# print(getSquareNumbers([1, 2, 3]))


# TASK L

# So'zlarni ketma-ketligini buzmasdan har bir so'zni alohida teskarisiga o'girib beradigan function tuzing.

# Masalan: reverseSentence("we like coding!") return "ew ekil !gnidoc"

# message = "we like coding!"


# def reverseSentence(a):
#     message = a.split(" ")
#     new_words = []
#     for word in message:
#         new_words.append(word[::-1])

#     return " ".join(new_words)


# reverseSentence("we like coding!")
# print(reverseSentence("we like coding!"))

#      // JAVOB:

# // const message = "assalomu alaykum";

# // function getReverse(a) {
#     // const message = a.split("").reverse().join("")
#     // return message

#     // }

# // const yakun = getReverse("assalomu alaykum")
# // console.log(yakun)
# // console.log("EXUCUTED!")

# // import moment from 'moment'

# // const currentTime = moment().format('YYYY MM DD')
# // console.log(currentTime)

# // const person: string = "Ryan"
# // const count: number = 100


# // Architectural pattern: MVC, DI, MVP
# // bizni backendimiznig suyagi backenddagi malumotlar oqimini tartibga soladigan vositachi

# // MVC == == Module View Controller = > Asosan bu backenda ishlatiladi
# // Dependency injection Architectural pattern == > Asosan bu modullar ishaltish tizimisda ishlatiladi(NESTJS)


# // Design pattern: Middleware, Decorator
# // backenddi malum bir bolaklarini strukturasini yechishda xizmat qiladiagn pattern

# // Design pattern: 3 qismga yani creational, structural, behaivoral bolimlarga bolidani
