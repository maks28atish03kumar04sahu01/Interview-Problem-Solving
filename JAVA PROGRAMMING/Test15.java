// 15. PRINT THE LARGEST NUMBER BETWEEN THREE NUMBERS
import java.util.Scanner;
public class Test15 {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);

        System.out.println("Enter Input1: ");
        int ip1 = in.nextInt();

        System.out.println("Enter Input2: ");
        int ip2 = in.nextInt();

        System.out.println("Enter Input3: ");
        int ip3 = in.nextInt();

        if(ip1 > ip2 && ip1 > ip3) {
            System.out.println(ip1 + " Greatest Between Three Number.");
        } else if(ip2 > ip1 && ip2 > ip3) {
            System.out.println(ip2 + " Greatest Between Three Number.");
        } else {
            System.out.println(ip3 + " Greatest Between Three Number.");
        }

        in.close();
    }
}