// 63. STRONG NUMBER
import java.util.Scanner;
public class Test {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);

        System.out.println("Enter Num Value: ");
        int num = in.nextInt();

        int temp = 1, NUM = num, count = 0;
        while(num != 0) {
            int rem = num % 10;
			for(int i = 1; i <= rem; i++)	{
				temp *= i;
			}
			count += temp;
			temp = 1;
			num /= 10;
        }
        if(NUM == count) {
            System.out.println(NUM+" Is Strong Number.");
        } else {
            System.out.println(NUM+" Is Not Strong Number.");
        }
        in.close();
    }
}