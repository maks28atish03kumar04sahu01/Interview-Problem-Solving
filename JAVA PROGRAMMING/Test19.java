// 19. PRINT ODD NUMBERS FROM 0 TO N
import java.util.Scanner;
public class Test19 {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);

        System.out.println("Enter Range Value: ");
        int range = in.nextInt();

        for(int i = 0; i <= range; i++) {
            if(i % 2 != 0) {
                System.out.print(i+" ");
            }
        }
        in.close();
    }
}