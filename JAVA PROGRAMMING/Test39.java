// 39. PRINT WHETHER THE GIVEN YEAR VALUE IS A LEAP YEAR OR NOT
import java.util.Scanner;
public class Test39 {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter Year Value: ");
        int year = in.nextInt();
        if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
            System.out.println("Year "+year+" Is Leap Year.");
        } else {
            System.out.println("Year "+year+" Is Not Leap Year.");
        }
        in.close();
    }
}