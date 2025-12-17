// 6. RETURNING MULTIPLE VALUES IN A FUNCTION
import java.util.Scanner;
class Result {
    int ADD, SUB, MULT, DIV;
    Result(int ADD, int SUB, int MULT, int DIV) {
        this.ADD = ADD;
        this.SUB = SUB;
        this.MULT = MULT;
        this.DIV = DIV;
    }
}
public class Test6 {
    public static Result Calculate(int num1, int num2) {
        int ADD = num1 + num2;
        int SUB = num1 - num2;
        int MULT = num1 * num2;
        int DIV = num1 / num2;
        return new Result(ADD, SUB, MULT, DIV);
    }
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter Num1 Value: ");
        int num1 = in.nextInt();
        System.out.println("Enter Num2 Value: ");
        int num2 = in.nextInt();

        Result r = Calculate(num1, num2);
        System.out.println("Addition: " + r.ADD);
        System.out.println("Subtraction: " + r.SUB);
        System.out.println("Multiplication: " + r.MULT);
        System.out.println("Division: " + r.DIV);

        in.close();
    }
}