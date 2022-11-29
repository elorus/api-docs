+++
type = "examples"
title = "Proof of Expenditure"
# A=Invoice, B=Receipt, C=Credit Note, D=Bill, E=Income
x_docType = "D"
x_mydata_type = "3.1"
+++

When **buying services or goods**, if a self billed document is needed, you are required to issue a "Proof of Expenditure Bill".

This guide demonstrates how to create a "Proof of Expenditure" / non-liable Issuer bill, for **individual suppliers in Greece** (myDATA document type **"3.1 Proof of Expenditure Bill"**)

{{< warning-mydata >}}

{{< auth >}}

Supplier
--------

### 1.1 Create a new contact

_\- The guide assumes you're working on a new Elorus organization, so this step can be omitted._  
  
First lets create a supplier so there is someone to get billed from. In a business context, contacts are individuals or businesses whom you transact with; typically your clients, leads, suppliers and partners. Since Elorus will let you manage your sales as well as your expenses, a contact may represent either a client or a supplier (or even both).  
  

{{< curl-block >}}
curl -X POST -H "Content-Type: application/json" -H "Authorization: Token ~Your-API-key~" -H "X-Elorus-Organization: ~Your-Organization-ID~" https://api.elorus.com/v1.1/contacts/ -d '{"client_type": "1", "company":"Προμηθευτής", "vat_number":"9876543210", "addresses":[{"address":"Theofilopoulou 13", "city":"Athens", "zip":"11743", "country": "GR", "ad_type": "bill"}], "is_client": false, "is_supplier":true}'
{{< /curl-block >}}
  

### 1.2 Get contact ID

Filter e.g. by "company", to get the contact ID. Retrieved contact ID in this case is "2608266726156011067".  
  

{{< curl-block >}}
curl -X GET -H "Content-Type: application/json" -H "Authorization: Token ~Your-API-key~" -H "X-Elorus-Organization: ~Your-Organization-ID~" https://api.elorus.com/v1.1/contacts/?company="Προμηθευτής"
{{< /curl-block >}}
  

Document type
-------------

### 2.1 Create a "Proof of Expenditure" document type

In this case, a "Proof of Expenditure" document type will be needed. There is no "Proof of Expenditure" document type pre-created and API does not support document type creation. So in order to create it, use of Elorus' UI is mandatory.

1.  Login to your Elorus account
2.  Go to: "Settings -> Document Types"
3.  Click "+Add" on top right corner
4.  And set it up as the picture below. Title used is for example purposes, the field can take any name. ![](/img/examples/proof-of-expenditure.png)
5.  Click "Save"

  

### 2.2 Get document type ID

Search by "title", to get the document type ID. Retrieved document type ID in this case is "2569066492662384486".  
  

{{< curl-block >}}
curl -X GET -H "Content-Type: application/json" -H "Authorization: Token ~Your-API-key~" -H "X-Elorus-Organization: ~Your-Organization-ID~" https://api.elorus.com/v1.1/documenttypes/?search="Τίτλος Κτήσης"&search_fields=title
{{< /curl-block >}}
  

Taxes
-----

This document is not subject to VAT.  

Bill creation
-------------

### 3.1 Create Proof of Expenditure

The final step, is to create the Bill itself. The list below describes all the needed fields.

1.  X-Elorus-Organization: your organization ID
2.  calculator\_mode: sets your values as "initial" or "total", meaning before or after taxes.
    1.  When "total" is used, then it is mandatory to use "unit\_total" in items.
    2.  When "initial" is used, then it is mandatory to use "unit\_value" in items.
    3.  Depending on the situation, Elorus will calculate the taxes accordingly.
3.  expense\_category: ID of the associated expense category.
4.  supplier: Supplier id - In this case we created a "Προμηθευτής" contact.
5.  draft: true or false depending on the need to issue immediately an invoice or not. If true, the bill will not reach MyData/Softone, until issued.
6.  documenttype: Document Type ID - In this case we created a "Τίτλος Κτήσης" document type, associated with the corresponding "aade type".
7.  My data specific fields: mydata\_document\_type - mydata\_classification\_category - mydata\_classification\_type - paid\_on\_receipt - payment\_method
    1.  mydata\_document\_type: aade type
    2.  mydata\_classification\_category: income type aade
    3.  mydata\_classification\_type: classifications of Ε3 aade
    4.  paid\_on\_receipt: Bill amount that was paid when bill was issued. If "0" then you don't need to send payment\_method since Elorus will automatically apply payment\_method as on credit.
    5.  payment\_method:
        1.  “1”: Domestic Payments Account
        2.  “2”: Foreign Payments Account
        3.  “3”: Cash
        4.  “4”: Cheque
        5.  “6”: Web Banking
        6.  “7”: POS / e-POS

{{< curl-block >}}
curl -X POST -H "Content-Type: application/json" -H "Authorization: Token ~Your-API-key~" -H "X-Elorus-Organization: ~Your-Organization-ID~" "https://api.elorus.com/v1.1/bills/" -d '{"self_billed":"true", "draft": "true", "calculator_mode": "total", "documenttype":"2569066492662384486", "mydata_document_type": "3.1", "supplier":"2608266726156011067", "items": [{"expense_category": "2491779621532468668", "title": "Αναβάθμιση λογισμικού", "unit_total": "12.4", "quantity": "2", "mydata_classification_category": "category2_1", "mydata_classification_type": "E3_102_002"}], "paid_on_receipt": "12.4", "payment_method": "3"}'
{{< /curl-block >}}