// 43. FIBONACCI SERIES
import java.util.Scanner;
public class Test43 {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter Range Value: ");
        int range = in.nextInt();

        int num0 = 0, num1 = 1, temp = 0;
        System.out.print(num0+" "+num1+" ");
        for(int i = 3; i <= range; i++) {
            temp = num0 + num1;
            num0 = num1;
            num1 = temp;
            System.out.print(temp+" ");
        }
        in.close();
    }
}