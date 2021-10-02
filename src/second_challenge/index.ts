import Account from "./Account";

const buyProduct = (id: number, ccount: Account, productPrice: number, installment_number: number) => {
  // ...
};

const secondChallenge = () => {
  const account = new Account("João", 6732.43, 12.5);
  buyProduct(1, account, 1432.43, 6);
  buyProduct(2, account, 6829, 1);
  buyProduct(3, account, 2432.32, 8);
  buyProduct(4, account, 6200.32, 4);
};

export default secondChallenge;
