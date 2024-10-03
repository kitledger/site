type LedgerEntry = {
	debit_account: number,
	credit_account: number,
	amount: number,
	description: string
}

const kitledger = {
	createEntry: (entry: LedgerEntry) => {
		console.log('Creating entry:', entry);
	}
}


// Create a ledger entry
kitledger.createEntry({
	debit_account: 1001,
	credit_account: 1901,
	amount: 1000,
	description: 'Payment #1234'
});