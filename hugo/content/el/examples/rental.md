+++
type = "examples"
title = "Rental Income"
# A=Invoice, B=Receipt, C=Credit Note, D=Bill, E=Income, F=Other
x_docType = "E"
x_mydata_type = "8.1"
+++

When **renting out to other companies**, you are typically required to issue a "Rental Income" received payment.

This guide demonstrates how to create a "Rental Income" received payment, for **companies located in Greece** (myDATA document type **"8.1 Rents - Income"**)

{{< warning-mydata >}}

{{< auth >}}

Client
------

### 1.1 Create a new contact

_\- The guide assumes you're working on a new Elorus organization, so this step can be omitted._  
  
First lets create a contact so there is someone to receive payment from. In a business context, contacts are individuals or businesses whom you transact with; typically your clients, leads, suppliers and partners. Since Elorus will let you manage your sales as well as your expenses, a contact may represent either a client or a supplier (or even both).  
  

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

This document is not subject to VAT.  

Income creation
---------------

### 2.1 Create Rental Income

The final step, is to create the Rental Income as a received payment. The list below describes all the needed fields.

1.  X-Elorus-Organization: your organization ID
2.  income\_type:
    *   contract: Contract income
    *   rental: Rental income
    *   other\_income: Other income
3.  transaction\_type:
    *   dp: Other payments
    *   ip: Client payment
    *   cnp: Supplier refund
    *   icm: Income
4.  taxes: no taxes are required to be sent, just send an empty dictionary
5.  amount: Amount paid
6.  calculator\_mode: sets your values as "initial" or "total", meaning the "amount" paid is before or after taxes.
7.  contact: Contact id - In this case we created "Elorus SA" contact.
8.  draft: true or false depending on the need to issue immediately an invoice or not. If true, the bill will not reach MyData/Softone, until issued.
9.  myDATA specific fields: mydata\_document\_type - mydata\_classification\_category - mydata\_classification\_type - payment\_method
    *   mydata\_document\_type: aade type
    *   mydata\_classification\_category: income type aade
    *   mydata\_classification\_type: classifications of Ε3 aade
    *   payment\_method:
        *   “1”: Domestic Payments Account
        *   “2”: Foreign Payments Account
        *   “3”: Cash
        *   “4”: Cheque
        *   “6”: Web Banking
        *   “7”: POS / e-POS

{{< curl-block >}}
curl -X POST -H "Content-Type: application/json" -H "Authorization: Token ~Your-API-key~" -H "X-Elorus-Organization: ~Your-Organization-ID~" https://api.elorus.com/v1.1/cashreceipts/ -d '{ "draft": true,"transaction_type": "icm", "title": "Ενοίκιο Νοεμβρίου 2022", "date": "2022-11-10", "income_type": "rental", "contact": "2492988168228308605", "amount": "100", "payment_method": "3", "taxes": [], "mydata_classification_category": "category1_9", "mydata_classification_type": "E3_561_001","mydata_document_type": "8.1", "calculator_mode": "total", "currency_code": "EUR", "exchange_rate": "1.000000"}'
{{< /curl-block >}}