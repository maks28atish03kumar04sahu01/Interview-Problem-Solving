// 71. PRIME NUMBER
import java.util.Scanner;

public class Test {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter Num Value: ");
        int num = in.nextInt();

        boolean flag = true;
        for (int i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                flag = false;
            }
        }
        if (!flag) {
            System.out.println(num + " Is Not A Prime Number.");
        } else {
            System.out.println(num + " Is A Prime Number.");
        }
        in.close();
    }
}