// 11. USER INPUT IN PROGRAMMING LANGUAGES
import java.util.Scanner;
public class Test11 {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);

        System.out.println("Enter Int Input: ");
        int ip1 = in.nextInt();
        System.out.println("Int Input1: "+ip1);

        System.out.println("Enter String Input: ");
        String str1 = in.next();
        System.out.println("String Input1: "+str1);

        in.nextLine();

        System.out.println("Enter Float Input: ");
        float flt1 = in.nextFloat();
        System.out.println("Float Input1: "+flt1);

        System.out.println("Enter Boolean Input: ");
        boolean bl1 = in.nextBoolean();
        System.out.println("Boolean Input1: "+bl1);

        in.close();
    }
}