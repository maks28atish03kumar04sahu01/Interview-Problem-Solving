// 10. QUESTIONS BASED ON RELATIONAL OPERATORS
import java.util.Scanner;
public class Test10 {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);

        System.out.println("Enter Input: ");
        int input = in.nextInt();

        if(input >= 90) {
            System.out.println("Grade A");
        } else if (input >= 80 && input < 90) {
            System.out.println("Grade B");
        } else if(input >= 70 && input < 80) {
            System.out.println("Grade C");
        } else {
            System.out.println("Grade D");
        }

        in.close();
    }
}