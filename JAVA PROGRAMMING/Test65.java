// 65. SUM OF DIGITS OF A NUMBER
import java.util.Scanner;
public class Test {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter Num Value: ");
        int num = in.nextInt();

        int sum = 0, NUM = num;
        while(num != 0) {
            int rem = num % 10;
            sum += rem;
            num /= 10;
        }
        System.out.println("Sum Of Digits Of "+NUM+" Is: "+sum);
        in.close();
    }
}