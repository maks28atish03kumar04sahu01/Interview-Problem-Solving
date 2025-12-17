// 36. PRINT SUM OF THOSE NUMBER FROM 0 TO N WHICH ARE NOT DIVISIBLE BY THE GIVEN TARGET
import java.util.Scanner;
public class Test36 {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter Range Value: ");
        int range = in.nextInt();
        System.out.println("Enter Target Value: ");
        int target = in.nextInt();
        int sum = 0;
        for(int i = 0; i <= range; i++) {
            if(i % target != 0) {
                sum += i;
            }
        }
        System.out.println("Sum Of Those Number From 0 To "+range+" Which Are Not Divisible By "+target+" Is: "+sum);
        in.close();
    }
}