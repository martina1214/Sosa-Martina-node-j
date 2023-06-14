public static int[] divisibles(int[] numeros, int divisor) {
    // Creamos un arreglo para almacenar los números divisibles
    int[] divisibles = new int[numeros.length];
    int contador = 0;
    
    // Iteramos sobre el arreglo de números
    for (int i = 0; i < numeros.length; i++) {
        // Si el número es divisible por el divisor, lo agregamos al arreglo de divisibles
        if (numeros[i] % divisor == 0) {
            divisibles[contador] = numeros[i];
            contador++;
        }
    }
    
    // Creamos un nuevo arreglo con la longitud correcta (sin elementos vacíos)
    int[] resultado = new int[contador];
    for (int i = 0; i < contador; i++) {
        resultado[i] = divisibles[i];
    }
    
    // Retornamos el arreglo con los números divisibles
    return resultado;
}

int[] numeros = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
int divisor = 2;
int[] resultado = divisibles(numeros, divisor);