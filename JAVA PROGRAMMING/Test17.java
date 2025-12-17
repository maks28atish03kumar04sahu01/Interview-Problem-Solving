// 17. PRINT NUMBERS FROM RANGE1 TO RANGE2 USING ANY LOOPING TECHNIQUE
import java.util.Scanner;
public class Test17 {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);

        System.out.println("Enter Range1: ");
        int range1 = in.nextInt();

        System.out.println("Enter Range2: ");
        int range2 = in.nextInt();

        for(int i = range1; i <= range2; i++) {
            System.out.print(i + " ");
        }
        in.close();
    }
}