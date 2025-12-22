// 46. ROOT OF A NUMBER (n√A)
import java.util.Scanner;
public class Test {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter Base Value: ");
        double b = in.nextDouble();
        System.out.println("Enter Root Value: ");
        double r = in.nextDouble();
        double Res = Math.pow(b, 1 / r);
        System.out.println("Res: "+Res);
        in.close();
    }
}