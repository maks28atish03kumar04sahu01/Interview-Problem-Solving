// 9. ARITHMETIC OPERATIONS IN PROGRAMMING
import java.util.Scanner;
public class Test9 {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);

        System.out.println("Enter Input1 Value: ");
        int input1 = in.nextInt();

        System.out.println("Enter Input2 Value: ");
        int input2 = in.nextInt();

        System.out.println("Addition: "+(input1 + input2));
        System.out.println("Subtraction: "+(input1 - input2));
        System.out.println("Multiplication: "+(input1 * input2));
        System.out.println("Division: "+(input1 / input2));
        System.out.println("Modulo: "+(input1 % input2));

        in.close();
    }
}