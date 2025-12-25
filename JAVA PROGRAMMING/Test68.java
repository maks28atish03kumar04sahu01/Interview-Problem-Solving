// 68. PERFECT NUMBER
import java.util.Scanner;
public class Test {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);

        System.out.println("Enter Num Value: ");
        int num = in.nextInt();

        int sum = 0;

        for(int i = 1; i < num; i++) {
            if(num % i == 0) {
                sum += i;
            }
        }

        if(num == sum) {
            System.out.println(num+" Is A Perfect Number.");
        } else {
            System.out.println(num+" Is Not A Perfect Number.");
        }

        in.close();
    }
}