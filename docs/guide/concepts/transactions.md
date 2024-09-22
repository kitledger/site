# Transactions

## Transaction Model
* Base archetype for a transaction. Defines fields, properties and configuration options. 
* Invoices, Inventory Adjustments, for instance are examples of different transaction models as their purpose and details are different by definition.

## Transaction
* Represents a single operation that can generate multiple entries.
* All entries from the transaction must be balanced

## Entries
* It's the fundamental block for the whole system.
* Represents an accounting movement.

The following two options were presented as the base way to store entries into the system.

### Model A

| Debit Account | Credit Account | Amount |
|---|---|---|
| AR | REVENUE | 90 |
| AR | VAT | 10 |
| COGS | INVENTORY | 40 |

### Model B

| Account | Debit | Credit |
|---|---|---|
| AR |100 |- |
| REVENUE |- |90 |
| VAT | -|10 |
| COGS |40 |- |
| INVENTORY |- |40 |

### Option A was choosen for being:

* Leading to fewer rows
* Enforcing balance and consistency
* Promoting atomicity by forcing transaction lines to be split on their minimum level for all the possible debit_accoun - credit_account permutations.