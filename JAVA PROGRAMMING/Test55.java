// 55. PRINT THE THE FOLLOWING SERIES 0 1 8 27 64 125 216... N
import java.util.Scanner;
public class Test {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter Range Value: ");
        int range = in.nextInt();
        for(int i = 0; i <= range; i++) {
            System.out.print(i * i * i+" ");
        }
        in.close();

    }
}