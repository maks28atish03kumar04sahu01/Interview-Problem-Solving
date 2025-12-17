// 14. PRINT THE LARGEST NUMBER BETWEEN TWO NUMBERS
import java.util.Scanner;
public class Test14 {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);

        System.out.println("Enter Input1 Value: ");
        int ip1 = in.nextInt();

        System.out.println("Enter Input2 Value: ");
        int ip2 = in.nextInt();

        String res = (ip1 > ip2) ? "Input1 Greater Than Input2" : "Input2 Greater Than Input1";
        System.out.println("Res: "+res);

        in.close();
    }
}