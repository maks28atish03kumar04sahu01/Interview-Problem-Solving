// 7. SWAPPING OF TWO VARIABLES' VALUE USING THIRD VARIABLE
import java.util.Scanner;
public class Test7 {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);

        System.out.println("Enter Num1: ");
        int num1 = in.nextInt();

        System.out.println("Enter Num2: ");
        int num2 = in.nextInt();

        System.out.println("Num1: "+num1);
        System.out.println("Num2: "+num2);

        int temp = num1;
        num1 = num2;
        num2 = temp;
        System.out.println("Num1: "+num1);
        System.out.println("Num2: "+num2);

        in.close();
    }
}