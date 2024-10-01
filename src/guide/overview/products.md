# Products

Inventory is one of the core use cases that KitLedger is designed to address.

The "Product" object is a special kind of entity that is meant to represent the products or services involved in the transactions with the purpose of tracking debits and credits, not only in it's monetary value but also by quantity.

## In Entries
All entries contain a "product_id" property that links the operation with a given product. Entries also contain a "quantity" whose value is zero by default. 

[!NOTE]
For additional details on how these fields behave, please see the "Entries" section.

When the quantity in an entry is greater than zero, the product_id property becomes mandatory as a quantity movement must be related to a product in order to avoid inconsistencies.

## Model
The parent object of a Product is called a ProductModel. The purpose of the ProductModel is to:

* Group items that are meant to behave similarly.
* Configure properties that all products belonging to that model are meant to have.

At the time of writing, the basic use case for a Product Model would be to separate Physical products from services considering that physical products need inventory functionality, while services do not. In a User Interface, different fields can be needed depending on whether a Physical product or a service is currently being viewed. 

