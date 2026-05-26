# TASK M

# Array ichidagi har bir raqam uchun raqamning o'zi va uning kvadratidan tashkil topgan object hosil qilib qaytarsin.

# Masalan: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, ...]


# JAVOB:


def getSquareNumbers(a):
    result = []

    for num in a:
        obj = {
            "numb": num,
            "squr": num ** 2
        }
        result.append(obj)

    return result


print(getSquareNumbers([1, 2, 3]))


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
