// 38. PRINT SUM OF THOSE NUMBER FROM RANGE1 TO RANGE2 WHICH ARE NOT DIVISIBLE BY THE GIVEN TARGET
import java.util.Scanner;
public class Test38 {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter Range1 Value: ");
        int range1 = in.nextInt();
        System.out.println("Enter Range2 Value: ");
        int range2 = in.nextInt();
        System.out.println("Enter Target Value: ");
        int target = in.nextInt();
        int sum = 0;
        for(int i = range1; i <= range2; i++) {
            if(i % target != 0) {
                sum += i;
            }
        }
        System.out.println("Sum Of Those Number From "+range1+" To "+range2+" Which Are Not Divisible By "+target+" Is: "+sum);
        in.close();
    }
}