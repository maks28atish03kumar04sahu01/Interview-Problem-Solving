// 67. FACTORS OF A NUMBER
import java.util.Scanner;
public class Test {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);

        System.out.println("Enter Num Value: ");
        int num = in.nextInt();

        for(int i = 1; i < num; i++) {
            if(num % i == 0) {
                System.out.print(i+" ");
            }
        }
        in.close();
    }
}