// 51. PRINT PERFECT SQUARE NUMBERS FROM RANGE1 TO RANGE2
import java.util.Scanner;
public class Test51 {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter Range1 Value: ");
        int range1 = in.nextInt();

        System.out.println("Enter Range2 Value: ");
        int range2 = in.nextInt();

        int start = (int) Math.ceil(Math.sqrt(range1));

        for(int i = start; i * i <= range2; i++) {
            System.out.print(i * i+" ");
        }
        in.close();
    }
}