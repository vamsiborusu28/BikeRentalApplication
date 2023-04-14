package com.example.bikerental.model;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Payment")
public class Payment {

	@Id
	private long cardNumber;
	private String name;
	private String cardType;
	private int cvv ;
	private int expiryMM;
	private int expiryYY;
	
		
	public Payment(long cardNumber, String name, String cardType, int cvv, int expiryMM, int expiryYY) {
		super();
		this.cardNumber = cardNumber;
		this.name = name;
		this.cardType = cardType;
		this.cvv = cvv;
		this.expiryMM = expiryMM;
		this.expiryYY = expiryYY;
	}
	
	public long getCardNumber() {
		return cardNumber;
	}
	public void setCardNumber(long cardNumber) {
		this.cardNumber = cardNumber;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCardType() {
		return cardType;
	}
	public void setCardType(String cardType) {
		this.cardType = cardType;
	}
	public int getCvv() {
		return cvv;
	}
	public void setCvv(int cvv) {
		this.cvv = cvv;
	}
	public int getExpiryMM() {
		return expiryMM;
	}
	public void setExpiryMM(int expiryMM) {
		this.expiryMM = expiryMM;
	}
	public int getExpiryYY() {
		return expiryYY;
	}
	public void setExpiryYY(int expiryYY) {
		this.expiryYY = expiryYY;
	}
	public Payment() {
		super();
	}
	@Override
	public String toString() {
		return "PaymentModel [cardNumber=" + cardNumber + ", name=" + name + ", cardType=" + cardType + ", cvv=" + cvv
				+ ", expiryMM=" + expiryMM + ", expiryYY=" + expiryYY + "]";
	}
}

