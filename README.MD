# Emepag development challenge
Hi, you`re just a step closer to being part of Emepag development team. 
In this test, you will need to elaborate solutions for relatively simple problems that a developer at Emepag would face in a daily basis.

## Get started

 - First, make a fork of this repo and create a new branch, you can name it as you wish.
 - Then, solve the problems listed below, and feel free to edit the project as you want. 
 - Finally, make a PR with the solution and let us know through alcides@emepag.com.br


## Challenges

**First challenge**

Given the contacts.xlsx (excel) file inside the src/first_challenge folder, you will need to cast the data and generate a JSON file containing an array of **valid** contacts according to the following format: 

    {
    	name: string,
    	email: string,
    	phone: string
    }

You need to validate the user data, making sure the email is valid, and the phone is also valid, according to the following expression `(xx) 9 xxxx-xxxx`

> Feel free to use any solution to validate the data, such as RegEx or any external library.


**Second challenge**

In the src/second_challenge you will find the `secondChallenge` function inside the index.ts file, wich already contains an instance of an Account, a class defined in src/second_challenge/Account.ts

You will need to implement the `buyProduct` function code, wich should calculate the interest (compound) value (only if the installment number is greater than 1) and check if the account has enough balance to finish the purchase.  In case it hasn't, the system should throw an error and log a message. In case it has, the system should should also log a message.

Bonus: In case the account hasn't enough balance for the select installment number, show if there is any installment number where the purchase would be possible.


> Feel free to edit the code as you want, use any strategy like async/await or callbacks, or
> any external library. 


## Conclusion

By default, the application runs with `yarn dev` script. Wich you call the `firstChallenge` and `secondChallenge` functions, wich should print a message indicating that the contacts.json file was writen and the purchases error or success messages.
If you made any change to that structure, please explain how to run the application. 






