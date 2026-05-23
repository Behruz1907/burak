# TASK L

# So'zlarni ketma-ketligini buzmasdan har bir so'zni alohida teskarisiga o'girib beradigan function tuzing.

# Masalan: reverseSentence("we like coding!") return "ew ekil !gnidoc"

message = "we like coding!"


def reverseSentence(a):
    message = a.split(" ")
    new_words = []
    for word in message:
        new_words.append(word[::-1])

    return " ".join(new_words)


reverseSentence("we like coding!")
print(reverseSentence("we like coding!"))

#      // JAVOB:

# // const message = "assalomu alaykum";

# // function getReverse(a) {
#     // const message = a.split("").reverse().join("")
#     // return message

#     // }

# // const yakun = getReverse("assalomu alaykum")
# // console.log(yakun)
