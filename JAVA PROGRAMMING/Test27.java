// 27. PRINT SUM OF ALL ODD NUMBER BETWEEN 0 TO N
import java.util.Scanner;
public class Test27 {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter Range Value: ");
        int range = in.nextInt();
        int sum = 0;
        for(int i = 0; i <= range; i++) {
            if(i % 2 != 0) {
                sum += i;
            }
        }
        System.out.println("Sum Of All Odd Number From 0 to "+range+" is: "+sum);
        in.close();
    }
}