+++
type = "examples"
title = "Accommodation Tax"
# A=Invoice, B=Receipt, C=Credit Note, D=Bill, E=Income, F=Other
x_docType = "F"
x_mydata_type = "8.2"
+++

The "Accommodation Tax", **is a tax that charges the resident (client)** who has used a room or an apartment and is imposed after his stay in the accommodation, and before his departure from it. The amount of the charged tax, depends on the category of the accommodation.

This guide demonstrates how to create "Accommodation Tax" for **clients located in Greece** (myDATA document type **"8.2 Accommodation Tax"**)

{{< warning-mydata >}}

{{< warning-custom >}}
<b>Warning!</b>
<ul>
<li>In case the interface with the SoftOne EINVOICING integration is activated in your organization, special attention is needed as there is no possibility to cancel the submission or creation of a credit note.</li>
<li>If the "Accommodation Tax" is linked to a "Sales Invoice", the invoice must have been submitted to myDATA, otherwise it will not be possible to submit the "Accommodation Tax".</li>
</ul>
{{< /warning-custom >}}

{{< auth >}}

Client
------

### 1.1 Create a new contact

_\- The guide assumes you're working on a new Elorus organization, so this step can be omitted._  
  
First lets create a contact so there is someone to bill. In a business context, contacts are individuals or businesses whom you transact with; typically your clients, leads, suppliers and partners. Since Elorus will let you manage your sales as well as your expenses, a contact may represent either a client or a supplier (or even both).  
  

{{< curl-block >}}
curl -X POST -H "Content-Type: application/json" -H "Authorization: Token ~Your-API-key~" -H "X-Elorus-Organization: ~Your-Organization-ID~" https://api.elorus.com/v1.1/contacts/ -d '{"client_type": "1", "company":"Elorus SA", "vat_number":"0123456789", "addresses":[{"address":"Theofilopoulou 13", "city":"Athens", "zip":"11743", "country": "GR", "ad_type": "bill"}], "is_client": true, "is_supplier":false}'
{{< /curl-block >}}
  

### 1.2 Get contact ID

Filter e.g. by "company", to get the contact ID. Retrieved contact ID in this case is "2480647926494267071".  
  

{{< curl-block >}}
curl -X GET -H "Content-Type: application/json" -H "Authorization: Token ~Your-API-key~" -H "X-Elorus-Organization: ~Your-Organization-ID~" https://api.elorus.com/v1.1/contacts/?company="Elorus SA"
{{< /curl-block >}}
  

Taxes
-----

### 2.1 Create Rental Income

First, by going to the Elorus' UI > menu Settings > Taxes > Add, you must enter the "Accommodation Tax" that applies to your business. 

It is a one-time process to activate the ability to add "Accommodation Tax" to your account from now on. ![](/img/examples/accommodation-tax.png)

### 2.2 Get taxes ID

Search by "title" e.g. "Ξενοδοχεία 3 αστέρων", to get the tax ID. Retrieved tax ID in this case is "2624067035251869663".

{{< curl-block >}}
curl -X GET -H "Content-Type: application/json" -H "Authorization: Token ~Your-API-key~" -H "X-Elorus-Organization: ~Your-Organization-ID~" https://api.elorus.com/v1.1/taxes/?search="Ξενοδοχεία 3 αστέρων"&search_fields=title
{{< /curl-block >}}


Accommodation Tax creation
---------------

### 3.1 Create Accommodation Tax

The final step, is to create the "Accommodation Tax" as a received payment. The list below describes all the needed fields.

1. X-Elorus-Organization: your organization ID
2. date: Issue date
3. transaction_type:"at". Required field to denote the received payment as "Accommodation Tax".
4. taxes: The amount charged depends on the category of accommodation (e.g. a hotel with three stars is taxed differently to a hotel that has one star). 
5. quantity: Calculate the total tax rate as the product of the fixed amount (depends on the category of accommodation), multiplied by the quantity.
6. contact: Contact id - In this case we created "Elorus SA" contact.
7. at_invoice: Not required. Used when there is a need to relate an invoice with the received "Accommodation Tax" payment.
8. myDATA specific fields:
    *   mydata\_document\_type: aade type **8.2 for "Accommodation Tax"**
    *   payment\_method:
        *   “1”: Domestic Payments Account
        *   “2”: Foreign Payments Account
        *   “3”: Cash
        *   “4”: Cheque
        *   “6”: Web Banking
        *   “7”: POS / e-POS

{{< curl-block >}}
curl -X POST -H "Content-Type: application/json" -H "Authorization: Token ~Your-API-key~" -H "X-Elorus-Organization: ~Your-Organization-ID~" https://api.elorus.com/v1.1/cashreceipts/ -d '{"transaction_type":"at", "contact":"2480647926494267071", "date":"2022-11-30", "taxes":["2624067035251869663"], "quantity": "1", "mydata_document_type":"8.2", "payment_method": "3"}'
{{< /curl-block >}}
