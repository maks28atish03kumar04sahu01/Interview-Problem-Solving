// 73. PRIME NUMBERS FROM RANGE1 TO RANGE2
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
        System.out.println("Enter Range1 Value: ");
        int range1 = in.nextInt();

        System.out.println("Enter Range2 Value: ");
        int range2 = in.nextInt();

        for(int i = range1; i <= range2; i++) {
            if(isPrime(i)) {
                System.out.print(i+" ");
            }
        }
        in.close();
    }
}