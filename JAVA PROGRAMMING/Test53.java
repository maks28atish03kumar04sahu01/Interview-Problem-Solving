// 53. PRINT THE FOLLOWING SERIES 0 1 4 9 16 25 36... N
import java.util.Scanner;
public class Test {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter Range Value: ");
        int range = in.nextInt();
        for(int i = 0; i <= range; i++) {
            System.out.print(i * i+" ");
        }
        in.close();

    }
}