// 22. ARITHMETIC OPERATION CALCULATOR IN PROGRAMMING
import java.util.Scanner;

public class Test22 {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);

        System.out.println("Enter Input1: ");
        int ip1 = in.nextInt();

        System.out.println("Enter Input2: ");
        int ip2 = in.nextInt();

        while (true) {
            System.out.println("Enter Operation: ");
            String op = in.next();
            switch (op) {
                case "+":
                    System.out.println("Result: " + (ip1 + ip2));
                    break;
                case "-":
                    System.out.println("Result: " + (ip1 - ip2));
                    break;
                case "*":
                    System.out.println("Result: " + (ip1 * ip2));
                    break;
                case "/":
                    if (ip2 == 0) {
                        System.out.println("Division by zero not allowed");
                    } else {
                        System.out.println("Result: " + (ip1 / ip2));
                    }
                    break;
                case "%":
                    if (ip2 == 0) {
                       System.out.println("Modulo by zero not allowed"); 
                    } else {
                        System.out.println("Result: " + (ip1 % ip2));
                    }
                    break;
                default:
                    System.out.println("Invalid Operation! Program Terminated.");
                    in.close();
                    System.exit(0);
            }
        }
    }
}