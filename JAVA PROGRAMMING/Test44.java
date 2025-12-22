// 44. NTH TERM OF FIBONACCI SERIES
import java.util.Scanner;
public class Test {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter Range Value: ");
        int range = in.nextInt();

        int num0 = 0, num1 = 1, temp = 0;
        for(int i = 3; i <= range; i++) {
            temp = num0 + num1;
            num0 = num1;
            num1 = temp;
        }
        System.out.println(range+"th Value Of Fibonacci Series Is: "+temp);
        in.close();
    }
}