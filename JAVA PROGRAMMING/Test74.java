// 74. CONVERT DECIMAL NUMBER TO ANY BASE OF NUMBER
import java.util.Scanner;
public class Test {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);

        System.out.println("Enter Decimal Value: ");
        int num = in.nextInt();

        System.out.println("Decimal To Binary Number: "+Integer.toBinaryString(num));
        System.out.println("Decimal To Octal Number: "+Integer.toOctalString(num));
        System.out.println("Decima To Hexadecimal Number: "+Integer.toHexString(num));
        
        in.close();
    }
}