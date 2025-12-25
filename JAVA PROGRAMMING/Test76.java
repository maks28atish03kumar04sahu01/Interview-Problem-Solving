// 76. PRINT NUMBERS FROM RANGE1 TO RANGE2 AND DISPLAY THOSE NUMBERS WHICH ARE MULTIPLES OF A GIVEN NUMBER
import java.util.Scanner;
public class Test {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter Range1 Input: ");
        int range1 = in.nextInt();

        System.out.println("Enter Range2 Input: ");
        int range2 = in.nextInt();

        System.out.println("Enter Target: ");
        int target = in.nextInt();

        for(int i = range1; i <= range2; i++) {
            if(i % target == 0) {
                System.out.print(i+" ");
            }
        }
        in.close();
    }
}