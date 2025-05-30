import java.util.Arrays;

public class CardIssuerValidation{
public static void main(String[]args){

int [] cardNo = {5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};
System.out.print(cardNo.length);
System.out.print(Arrays.toString(useValidator(cardNo)));

}





static String [] useValidator(int[] cardNo){
String []status = new String [1];
if(cardNo.length==16){	
	if(cardNo[0]/4==1 && cardNo[0]%4==0 ){
	status [0] = "valid: True, issuer: Visa";
	}
	else if(cardNo[0]/5==1 && cardNo[0]%5==0 ){
	status [0] = "valid: True, issuer: MasterCard";
	}
	else if(cardNo[0]/6==1 && cardNo[0]%6==0 ){
	status [0] = "valid: True, issuer: Discover";
	}
	else{
	status [0] = "valid: false, reason: Invalid Length";
	}
}

if(cardNo.length==15){
	if(cardNo[0]/1==1 &&  cardNo[1]/5==1){
	status [0] = "valid: True, issuer: America Express";
	}
	else{
	status [0] = "valid: false, reason: Invalid Length";
	}
}

if(cardNo.length!=15 && cardNo.length!=16 ){
status [0] = "valid: false, reason: Invalid Length";
}

return status;

}



}