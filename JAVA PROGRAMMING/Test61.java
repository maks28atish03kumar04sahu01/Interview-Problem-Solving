// 61. ARMSTRONG NUMBER
import java.util.Scanner;
public class Test {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);

        System.out.println("Enter Input: ");
        int num = in.nextInt();

        int NUM = num, res = num, rem1 = 0, rem2 = 0, count = 0, sum = 0;

        while (num != 0) {
            rem1 = num % 10;
            count++;
            num /= 10;
        }
        while (NUM != 0) {
            rem2 = NUM % 10;
            sum += Math.pow(rem2, count);
            NUM /= 10;
        }
        if(res == sum) {
            System.out.println(sum+" Is An Armstrong Number.");
        } else {
            System.out.println(res+" Is Not An Armstrong Number.");
        }
        in.close();
    }
}