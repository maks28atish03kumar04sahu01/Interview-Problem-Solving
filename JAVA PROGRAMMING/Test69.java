// 69. PERFECT SQUARE NUMBER
import java.util.Scanner;
public class Test {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter Num Value: ");
        int num = in.nextInt();

        int sqrtnum = (int)(Math.sqrt(num));
        boolean flag = (sqrtnum * sqrtnum == num);
        if(flag) {
            System.out.println(num+" Is Perfect Square Number.");
        } else {
            System.out.println(num+" Is Not Perfect Number.");
        }
        in.close();
    }
}