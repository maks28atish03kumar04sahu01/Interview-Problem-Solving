// 47. FACTORIAL OF A NUMBER
import java.util.Scanner;
public class Test {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);

        System.out.println("Enter Input Value: ");
        int ip = in.nextInt();
        int temp = 1;
        for(int i = 1; i <= ip; i++) {
            temp *= i;
        }
        System.out.println("Factorial Of "+ip+" Is: "+temp);

        in.close();
    }
}