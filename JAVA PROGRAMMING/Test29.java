// 29. PRINT MULTIPLICATION TABLE
import java.util.Scanner;
public class Test29 {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter Input1 Value: ");
        int ip1 = in.nextInt();
        System.out.println("Enter Input2 Value: ");
        int ip2 = in.nextInt();
        for(int i= 0; i <= ip2; i++) {
            System.out.println(ip1+" X "+i+" = "+(ip1 * i));
        }
        in.close();
    }
}