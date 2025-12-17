// 31. PRINT THOSE NUMBER FROM 0 TO N WHICH ARE DIVISIBLE BY THE GIVEN TARGET
import java.util.Scanner;
public class Test31 {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter Range Value: ");
        int range = in.nextInt();
        System.out.println("Enter Target Value: ");
        int target = in.nextInt();
        for(int i = 0; i <= range; i++) {
            if(i % target == 0) {
                System.out.print(i+" ");
            }
        }
        in.close();
    }
}