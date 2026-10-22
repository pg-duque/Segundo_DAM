// EJERCICIO 1
fun main() {
    val pesos = listOf(0, 5, 33, 100)
    var total = 0
    for (p in pesos) {
        val lb = p * 22 / 10
        println("$p  kg = $lb lb")
        total += p
    }
    val media = total.toDouble() / pesos.size
    println("Suma: $total")
    println("Media: $media")
    
}

main()
