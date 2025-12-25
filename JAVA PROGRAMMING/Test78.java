// 78. CONVERT CELSIUS TO FAHRENHEIT IN JAVA
import java.util.Scanner;
public class Test {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);

        System.out.print("Enter Celsius Value: ");
        double cel = in.nextDouble();

        System.out.print("Enter Fahrenheit Value: ");
        double fah = in.nextDouble();

        double cToF = (cel * 9.0 / 5.0) + 32;
        double fToC = (fah - 32) * 5.0 / 9.0;

        System.out.println("Celsius To Fahrenheit: " + cToF);
        System.out.println("Fahrenheit To Celsius: " + fToC);

        in.close();
    }
}