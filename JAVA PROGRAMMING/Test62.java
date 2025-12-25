// 62. REVERSE NUMBER
import java.util.Scanner;
public class Test {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);

        System.out.println("Enter Input Value: ");
        int num = in.nextInt();

        int rev = 0, NUM = num;

        while (num != 0) {
            int rem = num % 10;
            rev = (rev * 10) + rem;
            num /= 10;
        }
        System.out.println("Reverse Of "+NUM+" Is : "+rev);

        in.close();
    }
}