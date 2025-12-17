// 21. PRINT ODD NUMBERS FROM RANGE1 TO RANGE2
import java.util.Scanner;
public class Test21 {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);

        System.out.println("Enter Range1 Value: ");
        int range1 = in.nextInt();

        System.out.println("Enter Range2 Value: ");
        int range2 = in.nextInt();

        for(int i = range1; i <= range2; i++) {
            if(i % 2 != 0) {
                System.out.print(i+" ");
            }
        }
        in.close();
    }
}