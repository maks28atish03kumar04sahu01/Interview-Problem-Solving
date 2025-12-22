// 48. nCr & nPr IN JAVA
import java.util.Scanner;
public class Test {
    public static int factorial(int n) {
        int temp = 1;
        for(int i = 1; i <= n; i++) {
            temp *= i;
        }
        return temp;
    }
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);

        System.out.println("Enter N Value: ");
        int n = in.nextInt();

        System.out.println("Enter R Value: ");
        int r = in.nextInt();

        int factn = factorial(n);
        int factr = factorial(r);
        int factnr = factorial(n-r);

        int nCr = (factn / (factr * factnr));
        int nPr = (factn / factnr);

        System.out.println(n+"C"+r+" Is: "+nCr);
        System.out.println(n+"P"+r+" Is: "+nPr);

        in.close();
    }
}
