class Account {
  user_name: string;
  balance: number;
  interest_rate: number;

  constructor(user_name: string, balance: number, interest_rate: number) {
    this.user_name = user_name;
    this.balance = balance;
    this.interest_rate = interest_rate;
  }

  getBalance = (): Promise<number> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.balance);
      }, 3000);
    });
  };
}

export default Account;
