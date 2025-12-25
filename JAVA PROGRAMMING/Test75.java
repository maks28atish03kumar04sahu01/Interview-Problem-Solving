// 75. PRINT NUMBERS FROM 1 TO N AND DISPLAY THOSE NUMBERS WHICH ARE MULTIPLES OF A GIVEN NUMBER
import java.util.Scanner;
public class Test {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter Range Input: ");
        int range = in.nextInt();

        System.out.println("Enter Target: ");
        int target = in.nextInt();

        for(int i = 0; i <= range; i++) {
            if(i % target == 0) {
                System.out.print(i+" ");
            }
        }
        in.close();
    }
}