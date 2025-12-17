// 30. PRINT WHETHER THE NUMBER IS DIVISIBLE BY THE GIVEN TARGET OR NOT
import java.util.Scanner;
public class Test30 {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter Input Value: ");
        int ip = in.nextInt();
        System.out.println("Enter Target Value: ");
        int target = in.nextInt();
        if(ip % target == 0) {
            System.out.println(ip+" Is Divisible By "+target);
        } else {
            System.out.println(ip+" Is Not Divisible By "+target);
        }
        in.close();
    }
}