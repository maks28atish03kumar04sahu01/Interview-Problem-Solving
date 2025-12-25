// 70. AUTOMORPHIC NUMBER
import java.util.Scanner;
public class Test {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter Num Value: ");
        int a = in.nextInt();

        if (a < 0)
            a = -a;
        int squareNum = a * a;
        int temp = a;
        int count = 0;
        while (temp > 0) {
            count++;
            temp = temp / 10;
        }
        int lastDigit = squareNum % (int) Math.pow(10, count);

        if (lastDigit == a)
            System.out.print("Automorphic");
        else
            System.out.print("Not Automorphic");

        in.close();
    }
}