import { fstat } from "fs";
import Account from "./Account";

const buyProduct = async (id: number, Account: Account, productPrice: number, installment_number: number) => {
  const finalPrice = productPrice * Math.pow(1 + Account.interest_rate / 100, installment_number);
  await Account.getBalance();
  {
    if (installment_number > 1) {
      if (Account.balance > finalPrice) {
        console.log("Your purchase is ready. The price is " + finalPrice);
      } else {
        console.log("You don't have enough balance to make this purchase");
      }
    }
  }
};

const secondChallenge = () => {
  const account = new Account("João", 6732.43, 12.5);


  buyProduct(1, account, 1432.43, 6);
  buyProduct(2, account, 6829, 1);
  buyProduct(3, account, 2432.32, 8);
  buyProduct(4, account, 6200.32, 4);
};

export default secondChallenge;
