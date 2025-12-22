// 49. PRINT AND CHECK WHETHER THE NUMBER IS PERFECT SQUARE OR NOT
import java.util.Scanner;
public class Test {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter IP Value: ");
        int ip = in.nextInt();
        int sqrt_ip = (int)(Math.sqrt(ip));
        System.out.println(sqrt_ip);
        int testip = sqrt_ip * sqrt_ip;
        System.out.println(testip);
        if(testip == ip) {
            System.out.println(true);
        } else {
            System.out.println(false);
        }
        in.close();

    }
}