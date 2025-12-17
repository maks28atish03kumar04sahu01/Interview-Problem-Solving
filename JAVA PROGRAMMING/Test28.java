// 28. PRINT SUM OF ALL ODD NUMBER BETWEEN RANGE1 TO RANGE2
import java.util.Scanner;
public class Test28 {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter Range1 Value: ");
        int range1 = in.nextInt();
        System.out.println("Enter Range2 Value: ");
        int range2 = in.nextInt();
        int sum = 0;
        for(int i = range1; i <= range2; i++) {
            if(i % 2 != 0) {
                sum += i;
            }
        }
        System.out.println("Sum Of All Odd Numbers From "+range1+" To "+range2+" Is: "+sum);
        in.close();
    }
}