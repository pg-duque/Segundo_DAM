// EJERCICIO 5

fun main() {
    val nombres = listOf("Lucía", "Alejandro", "Ana", "Marta", "Iván")

    println("Total: ${nombres.size}") 
	println("Más largo: ${nombres.maxByOrNull{it.length}}") 
	println("Cortos: ${nombres.filter { it.length <= 4 }}") 
	println("Ordenadas: ${nombres.sorted()}") 
	println("Longitudes: ${nombres.associateWith{it.length}}")

    val frecuencias = "mississippi".groupBy{it}.mapValues{it.value.size}

    println("Frecuencias en mississipi: $frecuencias")
}

main()