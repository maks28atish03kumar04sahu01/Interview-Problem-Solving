// 57. PRINT THE 0 TO N IN THE FORM OF (A^p)
import java.util.Scanner;
public class Test {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter Range Value: ");
        int range = in.nextInt();
        System.out.println("Enter Power Value: ");
        int power = in.nextInt();
        for(int i = 0; i <= range; i++) {
            System.out.print((int)(Math.pow(i, power))+" ");
        }
        in.close();

    }
}