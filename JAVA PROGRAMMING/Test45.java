// 45. POWER & BASE (A^n)
import java.util.Scanner;
public class Test {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter Base Value: ");
        double b = in.nextDouble();
        System.out.println("Enter Power Value: ");
        double p = in.nextDouble();
        int Res = (int)(Math.pow(b, p));
        System.out.println("Res: "+Res);
        in.close();
    }
}