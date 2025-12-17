// 13. PRINT WHETHER THE NUMBER IS EVEN OR ODD
import java.util.Scanner;
public class Test13 {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);

        System.out.println("Enter Input Value: ");
        int input = in.nextInt();

        String res = (input % 2 == 0) ? "Even Number" : "Odd Number";
        System.out.println(input+" Is "+res);
        in.close();
    }
}