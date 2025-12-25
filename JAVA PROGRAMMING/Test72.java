// 72. PRIME NUMBERS FROM 0 TO N
import java.util.Scanner;
public class Test {
    public static boolean isPrime(int num) {
        boolean flag = true;
        for(int i = 2; i <= Math.sqrt(num); i++) {
            if(num % i == 0) {
                flag = false;
            }
        }
        return flag;
    }
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter Range Value: ");
        int range = in.nextInt();

        for(int i = 2; i <= range; i++) {
            if(isPrime(i)) {
                System.out.print(i+" ");
            }
        }
        in.close();
    }
}