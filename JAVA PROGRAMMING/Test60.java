// 60. PRINT THE DIGITS OF A NUMBER (INPUT: 153 OUTPUT: 1 5 3)
import java.util.Scanner;
public class Test {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter Input: ");
        int ip = in.nextInt();
        int temp = 1;
        while(ip / temp >= 10) {
            temp *= 10;
        }
        while(temp > 0) {
            System.out.print(ip / temp+" ");
            ip %= temp;
            temp /= 10;
        }
        in.close();
    }
}