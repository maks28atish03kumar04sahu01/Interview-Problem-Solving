// 23. PRINT SUM OF ALL NUMBERS BETWEEN 0 TO N
import java.util.Scanner;
public class Test23 {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);

        System.out.println("Enter Range Value: ");
        int range = in.nextInt();

        int sum = 0;
        for(int i = 0; i <= range; i++) {
            sum += i;
        }
        System.out.println("Sum Of 0 To "+range+" Is: "+sum);
        in.close();
    }
}