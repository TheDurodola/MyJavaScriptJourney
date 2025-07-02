import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertArrayEquals;


public class CardIssuerValidationTest{

	@Test
	
	public void testThatUseValidatorExists(){
		int [] cardNo = {1,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0};
		CardIssuerValidation.useValidator(cardNo);

	}
	

	@Test
	
	public void testThatUseValidatorAcceptsAmericanExpressCard(){
		int [] cardNo = {1,5,0,0,0,0,0,0,0,0,0,0,0,0,0};
		String [] actual = CardIssuerValidation.useValidator(cardNo);
		String [] expected = {"valid: True, issuer: America Express"};
		assertArrayEquals(expected, actual);
	}


	@Test
	
	public void testThatUseValidatorAcceptsAmericanExpressCardWithDifferentNumbers(){
		int [] cardNo = {1,5,5,2,6,7,3,1,8,4,1,7,4,1,8};
		String [] actual = CardIssuerValidation.useValidator(cardNo);
		String [] expected = {"valid: True, issuer: America Express"};
		assertArrayEquals(expected, actual);
	}



	@Test
	
	public void testThatUseValidatorAcceptsVisaCard(){
		int [] cardNo = {4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};
		String [] actual = CardIssuerValidation.useValidator(cardNo);
		String [] expected = {"valid: True, issuer: Visa"};
		assertArrayEquals(expected, actual);
	}


	@Test
	
	public void testThatUseValidatorAcceptsVisaCardWithDifferentNumbers(){
		int [] cardNo = {4,1,3,4,6,7,8,8,9,5,4,3,9,3,2,9};
		String [] actual = CardIssuerValidation.useValidator(cardNo);
		String [] expected = {"valid: True, issuer: Visa"};
		assertArrayEquals(expected, actual);
	}

	@Test
	
	public void testThatUseValidatorAcceptsMasterCardCardWithDifferentNumbers(){
		int [] cardNo = {5,1,3,4,6,7,8,8,9,5,4,3,9,3,2,9};
		String [] actual = CardIssuerValidation.useValidator(cardNo);
		String [] expected = {"valid: True, issuer: MasterCard"};
		assertArrayEquals(expected, actual);
	}
	
	@Test
	
	public void testThatUseValidatorAcceptsDiscoverCardWithDifferentNumbers(){
		int [] cardNo = {6,1,3,4,6,7,8,8,9,5,4,3,9,3,2,9};
		String [] actual = CardIssuerValidation.useValidator(cardNo);
		String [] expected = {"valid: True, issuer: Discover"};
		assertArrayEquals(expected, actual);
	}





	@Test
	
	public void testThatUseValidatorAcceptsMasterCardCard(){
		int [] cardNo = {5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};
		String [] actual = CardIssuerValidation.useValidator(cardNo);
		String [] expected = {"valid: True, issuer: MasterCard"};
		assertArrayEquals(expected, actual);
	}


	@Test
	
	public void testThatUseValidatorAcceptsDiscoverCard(){
		int [] cardNo = {6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};
		String [] actual = CardIssuerValidation.useValidator(cardNo);
		String [] expected = {"valid: True, issuer: Discover"};
		assertArrayEquals(expected, actual);
	}


	@Test
	
	public void testThatUseValidatorRejects16DigitsCardNoThatBeginWith15(){
		int [] cardNo = {1,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0};
		String [] actual = CardIssuerValidation.useValidator(cardNo);
		String [] expected = {"valid: false, reason: Invalid Length"};
		assertArrayEquals(expected, actual);
	}

	@Test
	
	public void testThatUseValidatorRejects15DigitsCardNoThatBeginWith4(){
		int [] cardNo = {4,0,0,0,0,0,0,0,0,0,0,0,0,0,0};
		String [] actual = CardIssuerValidation.useValidator(cardNo);
		String [] expected = {"valid: false, reason: Invalid Length"};
		assertArrayEquals(expected, actual);
	}

	@Test
	
	public void testThatUseValidatorRejects15DigitsCardNoThatBeginWith5(){
		int [] cardNo = {5,0,0,0,0,0,0,0,0,0,0,0,0,0,0};
		String [] actual = CardIssuerValidation.useValidator(cardNo);
		String [] expected = {"valid: false, reason: Invalid Length"};
		assertArrayEquals(expected, actual);
	}
	@Test
	
	public void testThatUseValidatorRejects15DigitsCardNoThatBeginWith6(){
		int [] cardNo = {6,0,0,0,0,0,0,0,0,0,0,0,0,0,0};
		String [] actual = CardIssuerValidation.useValidator(cardNo);
		String [] expected = {"valid: false, reason: Invalid Length"};
		assertArrayEquals(expected, actual);
	}


	}