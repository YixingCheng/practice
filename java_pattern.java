public interface CommandExecutor {
	public void runCommand(String cmd) throws Exception;
}

public class CommandExecutorImpl implements CommandExecutor {
	@Override
	public void runCommand(String cmd) throws IOException {
		Runtime.getRuntime().exec(cmd);
	}
}

public class CommandExecutorProxy implements CommandExecutor {
	private boolean isAdmin;
	private CommandExecutor executor;

	public CommandExecutorProxy(String user, String pwd) {
		if ("Pankaj".equals(user)) {
			isAdmin = true;
			executor = new CommandExecutorImpl();
		}
	}

	@Override
	public void runCommand(String cmd) throws Exception {
		if (isAdmin) {
			executor.runCommand(cmd);
		} else {
			if (cmd.trim().startsWith("rm")) {
				throw new Exception("")
			} else {
				executor.runCommand(cmd);
			}
		}
	}
}

public abstract class Computer {
	public abstract String getRAM();
	public abstract String getHDD();
	public abstract String getCPU();

	@Override
	public String toString() {
		return "RAM= " + this.getCPU();
	}
}

public class ComputerFactory {
	public static Computer getComputer(String type, String ram, String hdd, String cpy) {

	}
}


public class Employees implements Cloneable {
	private List<String> empList;

	public Employees() {
		empList = new ArrayList<String>();
	} 

	public Employees(List<String> list) {
		this.empList = list;
	}

	public void loadData() {
		empList.add("Pankaj");
		empList.add("Raj");
		empList.add("David");
		empList.add("Lisa");
	}

	public List<String> getEmpList() {
		return empList;
	}

	@Override
	public Object clone() throws CloneNotSupportedException {
		List<String> temp = new ArrayList<String>();
		for(String s: this.getEmpList()) temp.add(s);
		return new Employees(temp);
	}
}

public interface PaymentStrategy {
	public void pay(int amount);
}

public class CreditCardStrategy implements PaymentStrategy {
	private String name;
	private String cardNumber;
	private String cvv;
	private String dateOfExpiry;

	public CreditCardStrategy(String nm, String ccNum, String cvv, String expiryDate){
		this.name=nm;
		this.cardNumber=ccNum;
		this.cvv=cvv;
		this.dateOfExpiry=expiryDate;
	}

	@Override
	public void pay(int amount) {
		System.out.println(amount +" paid with credit/debit card");
	}
}

public class PaypalStrategy implements PaymentStrategy {
	private String emailId;
	private String password;

	public PaypalStrategy(String email, String pwd){
		this.emailId=email;
		this.password=pwd;
	}

	@Override
	public void pay(int amount) {
		System.out.println(amount + " paid using Paypal.");
	}
}

public class ShoppingCart {
	List<Item> items;
	public void pay(PaymentStrategy paymentMethod){
		int amount = calculateTotal();
		paymentMethod.pay(amount);
	}
}

public class ShoppingCartTest {
	public static void main(String[] args) {
		ShoppingCart cart = new ShoppingCart();
		cart.pay(new PaypalStrategy("myemail@example.com", "mypwd"));
	}
}
