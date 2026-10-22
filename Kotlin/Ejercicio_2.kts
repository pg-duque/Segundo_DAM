// EJERCICIO 2

fun categoria(edad: Int): String = when (edad) {
    in 0..12 -> "Niño"
    in 13..17 -> "Adolescente"
    in 18..64 -> "Adulto"
    in 65..120 -> "Mayor"
    else -> "Matusalen"
}

fun main() {
    val edades = listOf(5, 13, 30, 65, 17, 120, 150)
    for (e in edades) println("$e -> ${categoria(e)}")
    val mayores_de_edad = edades.count {it in 18..120}
    println("Mayores de edad: $mayores_de_edad de ${edades.size}")
}

main()