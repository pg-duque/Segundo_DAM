fun logLine(msg: String, level: String = "INFO", brackets: Boolean = false): String = 
    if (brackets) "[$level] $msg" else "$level $msg"

fun sumTo(start: Int = 1, end: Int): Int {
 
    var suma = 0
    
    for (i in start..end) {
        suma += i
    }
    return suma
}

fun isPerfect() {
    //No tengo ni idea de cómo hacerlo con repeat
    
    //Hacemos una lista en la que guardar los números
    val perfectos = mutableListOf<Int>()
    
    //Comprobamos cuales son perfectos
    for (numero in 1..500) {
        var sumaDivisores = 0
        
        for (i in 1 until numero) {
            if (numero % i == 0) {
                sumaDivisores += i
            }
        }
        
        //Si es perfecto, lo guardamos
        if (sumaDivisores == numero) {
            perfectos.add(numero)
        }
    }
    println("Perfectos hasta 500: $perfectos")
}

fun main() {
    println(logLine("Arranque"))
    println(logLine("Disco lleno", "WARN"))
    println(logLine("Fallo", brackets = true))
    println(sumTo(end = 10))
    println(sumTo(5,8))
    println(sumTo(end = 100, start = 98))
    isPerfect()
}

main()


