// 41. INCREMENT OPERATOR IN JAVA
import java.util.Scanner;
public class Test41 {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);

        System.out.println("Enter Num1 Value: ");
        int num1 = in.nextInt();
        System.out.println("Current Num1 Value: "+num1);
        System.out.println("Pre Increment ++Num1: "+(++num1));
        System.out.println("Update Num1 Value: "+num1);

        System.out.println("Enter Num2 Value: ");
        int num2 = in.nextInt();
        System.out.println("Current Num2 Value: "+num2);
        System.out.println("Post Increment Num2++: "+(num2++));
        System.out.println("Updated Num2 Value: "+num2);

        in.close();
    }
}