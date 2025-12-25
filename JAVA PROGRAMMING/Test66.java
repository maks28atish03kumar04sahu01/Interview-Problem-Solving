// 66. PALINDROME NUMBER
import java.util.Scanner;
public class Test {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter Num Value: ");
        int num = in.nextInt();

        int NUM = num, rev = 0;
        while(num != 0) {
            int rem = num % 10;
            rev = (rev * 10) + rem;
            num /= 10;
        }
        String res = (NUM == rev) 
            ? NUM+" is a palindrome number." : NUM+" is not a palindrome number.";
        System.out.println(res);
        in.close();
    }
}