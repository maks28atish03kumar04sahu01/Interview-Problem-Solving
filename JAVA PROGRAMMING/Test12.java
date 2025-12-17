// 12. PRINT WHETHER THE NUMBER IS POSITIVE, NEGATIVE OR ZERO
import java.util.Scanner;
public class Test12 {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);

        System.out.println("Enter Input Value: ");
        int ip = in.nextInt();

        if(ip > 0) {
            System.out.println(ip+" Is Positive Value.");
        } else if (ip < 0) {
            System.out.println(ip+" Is Negative Value.");
        } else {
            System.out.println(ip+" Is Zero Value.");
        }

        in.close();
    }
}