//userCards
function userCard(index) {
	let balance = 100;
	let transactionLimit = 100;
	let historyLog = [];
	let key = index;
	const TAX = 0.005;

	function historyChange(typeOperation, amount) {
		historyLog.push({
			operationType: typeOperation,
			credits: amount,
			operationTime: new Date().toLocaleDateString('en-GB')

		});
	}
	return {
		getCardOptions() {
			return {
				key,
				balance,
				transactionLimit,
				historyLog
			};
		},
		putCredit(sum) {
			balance += sum;
			historyChange('Received credits', sum);
		},
		takeCredits(sum) {
			if (sum <= balance && sum <= transactionLimit) {
				balance -= sum;
				historyChange('Withdrawal of credits', sum);
			} else {
				console.log(`My apologize, but you have exceeded the limit money`)
			}
		},
		settransactionLimit(sum) {
			transactionLimit = sum;
			historyChange(`Transaction limit change `, sum)
		},
		transferCredits(amountOfCredits, cardIndex) {
			let realBalance = TAX * amountOfCredits + amountOfCredits;
			if (realBalance <= balance && realBalance <= transactionLimit) {
				this.takeCredits(realBalance);
				this.putCredit(amountOfCredits);
				historyChange(`Withdrawal of credits`, amountOfCredits);
			} else {
				console.log(`Error, prease check balance:  ${balance} and transactionLimit ${transactionLimit} `);
			}
		}
	}
}

//Class `User Account`
class UserAccount {
	constructor(name) {
		this.name = name;
		this.cards = [];
		this.Count_Cards = 3;
	}
	addCard() {
		if (this.cards.length < this.Count_Cards) {
			this.cards.push(userCard(this.cards.length + 1));
		} else {
			console.log(`Sorry, but you have only 3 cards`);
		}
	}
}
