// EJERCICIO 3

fun main () {
    val pimpam = (1..12).joinToString(" ") {
        when {
            it % 6 == 0 -> "PimPam"
            it % 2 == 0 -> "Pim"
            it % 3 == 0 -> "Pam"
            else -> it.toString()
        }
    }
    println(pimpam)
    
    val cuenta = (20 downTo 5 step 5).joinToString(" ")
    println("Cuenta atrás: $cuenta")
    
    var suma = 0
    for (i in 5..100 step 5) suma += i
    println("Suma de múltiplos de 5: $suma")
}

main()