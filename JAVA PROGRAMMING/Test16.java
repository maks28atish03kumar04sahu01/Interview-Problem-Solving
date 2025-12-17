// 16. PRINT NUMBERS FROM 0 TO N USING ANY LOOPING TECHNIQUE
import java.util.Scanner;
public class Test16 {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);

        System.out.println("Enter Range Value: ");
        int range = in.nextInt();

        for(int i = 0; i <= range; i++) {
            System.out.print(i+" ");
        }
        in.close();
    }
}