// 54. PRINT THE RANGE1 TO RANGE2 IN THR FORM OF (A^2)
import java.util.Scanner;
public class Test {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter Range1 Value: ");
        int range1 = in.nextInt();
        System.out.println("Enter Range2 Value: ");
        int range2 = in.nextInt();
        for(int i = range1; i <= range2; i++) {
            System.out.print(i * i+" ");
        }
        in.close();
    }
}