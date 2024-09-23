# Currencies

**Purpose:**

The Currency object represents a specific currency used in a transactional system. It provides essential information for identifying, representing, and converting currencies.

**Fields:**

* **id:** A unique identifier for the currency (System generated).
* **name:** The full name of the currency (e.g., "United States Dollar").
* **symbol:** The commonly used symbol for the currency (e.g., "$").
* **iso_code:** The ISO 4217 three-letter code for the currency (e.g., "USD").
* **precision:** The number of decimal places used in the currency (e.g., 2 for US dollars).
* **active:** A boolean indicating whether the currency is currently active or inactive.
* **decimal_separator:** The character used to separate decimal places (e.g., "." for US dollars).
* **thousands_separator:** The character used to separate thousands (e.g., "," for US dollars).

**Functionality:**

* **Currency Identification:** The `id`, `name`, `symbol`, and `iso_code` fields uniquely identify a currency.
* **Precision:** The `precision` field determines the level of accuracy required for calculations involving the currency.
* **Currency Conversion:** The Currency object can be used in conjunction with exchange rate data to convert amounts from one currency to another.
* **Ledgers:** Every ledger must have a base currency all monetary values are stored in the base currency of the ledger.
* **Transactions:** Every transactionmust be linked to a specific currency. If the currency is different than the ledger's base currency an exchange rate should be specified, otherwise it defaults to 1.