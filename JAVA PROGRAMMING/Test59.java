// 59. PRINT THE DIGITS OF A NUMBER (INPUT: 153 OUTPUT: 3 5 1)
import java.util.Scanner;
public class Test {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter Input Value: ");
        int num = in.nextInt();

        while(num != 0) {
            int rem = num % 10;
            System.out.print(rem+" ");
            num /= 10;
        }
        in.close();
    }
}