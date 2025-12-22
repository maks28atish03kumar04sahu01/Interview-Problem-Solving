// 50. PRINT PERFECT SQUARE NUMBERS FROM 0 TO N
import java.util.Scanner;
public class Test {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter Range Value: ");
        int range = in.nextInt();

        for(int i = 0; i * i <= range; i++) {
            System.out.print(i * i+" ");
        }

        in.close();
    }
}