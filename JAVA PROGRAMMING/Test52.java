// 52. TERNARY OPERATOR
import java.util.Scanner;
public class Test {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);

        System.out.println("Enter Num1 Value: ");
        int num1 = in.nextInt();

        System.out.println("Enter Num2 Value: ");
        int num2 = in.nextInt();

        String res = (num1 > num2) ? "Num1 Greater Than Num2" : "Num2 Greater Than Num1";
        System.out.println(res);

        in.close();
    }
}