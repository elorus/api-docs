+++
type = "examples"
title = "Credit Invoice"
# A=Invoice, B=Receipt, C=Credit Note, D=Bill, E=Income, F=Other
x_docType = "C"
x_mydata_type = "5.1/5.2"
+++

Credit notes are typically used to denote a client refund or a discount (credit) on future purchases. To refund a business you must create a **"Credit invoice"**, whereas a ["Retail Sales Credit Note"](/el/examples/retail-sales-credit-note.html) must be created whenever the client is a private individual.

According to the [myDATA specifications](https://www.aade.gr/myData/prodiagrafes), Credit invoices are further divided into **Associated credit invoices** (myDATA document type **5.1**) and **Non-associated credit invoices** (myDATA document type **5.2**), depending on whether they cancel a previously issued invoice or not. This guide demonstrates how to create both associated and non-associated credit invoices.

{{< warning-mydata >}}

{{< auth >}}

Client
------

### 1.1 Create a new contact

_\- The guide assumes you're working on a new Elorus organization, so this step can be omitted._  
  
First lets create a contact so there is someone to bill. In a business context, contacts are individuals or businesses whom you transact with; typically your clients, leads, suppliers and partners. Since Elorus will let you manage your sales as well as your expenses, a contact may represent either a client or a supplier (or even both).  
  

{{< curl-block >}}
curl -X POST -H "Content-Type: application/json" -H "Authorization: Token ~Your-API-key~" -H "X-Elorus-Organization: ~Your-Organization-ID~" https://api.elorus.com/v1.1/contacts/ -d '{"client_type": "1", "company":"Elorus SA", "vat_number":"9876543210", "addresses":[{"address":"Theofilopoulou 13", "city":"Athens", "zip":"11743", "country": "GR", "ad_type": "bill"}], "is_client": true, "is_supplier":false}
{{< /curl-block >}}
  

### 1.2 Get contact ID

Filter e.g. by "company", to get the contact ID. Retrieved contact ID in this case is "2482665622824027155".  
  

{{< curl-block >}}
curl -X GET -H "Content-Type: application/json" -H "Authorization: Token ~Your-API-key~" -H "X-Elorus-Organization: ~Your-Organization-ID~" https://api.elorus.com/v1.1/contacts/?company="Elorus SA"
{{< /curl-block >}}
  

Document type
-------------

### 2.1 Get document type ID

In this case, a "Credit Invoice" document type will be needed. There is a "Credit Invoice" document type pre-created. Default title is "Πιστωτικό Τιμολόγιο".  
Search by "title", to get the document type ID. Retrieved document type ID in this case is "2483498441813001641". In case the title is changed or the document type is missing, use the Elorus UI to create a new one.  
  

{{< curl-block >}}
curl -X GET -H "Content-Type: application/json" -H "Authorization: Token ~Your-API-key~" -H "X-Elorus-Organization: ~Your-Organization-ID~" https://api.elorus.com/v1.1/documenttypes/?search="Πιστωτικό Τιμολόγιο"
{{< /curl-block >}}
  

Taxes
-----

### 3.1 About taxes

By default there are some taxes preset in Elorus. Usually 24% tax is used for Greece "Credit Invoice" so the preset tax will be retrieved and used. In case there is a need for a new tax to be created, use of Elorus' UI is mandatory.  
Optional steps to create new tax:

1.  Login to your Elorus account
2.  Go to: "Settings -> Taxes"
3.  Click "+Add" on top right corner
4.  And set it up as the picture below. ![](/img/examples/common/tax.png)
5.  Click "Save"

  

### 3.2 Get taxes ID

Search by "percentage", to get the tax ID. Retrieved tax ID in this case is "2476911428611605999". Make sure that "aade\_type":1 is in the response packet.  
  

{{< curl-block >}}
curl -X GET -H "Content-Type: application/json" -H "Authorization: Token ~Your-API-key~" -H "X-Elorus-Organization: ~Your-Organization-ID~" https://api.elorus.com/v1.1/taxes/?search="24"&search_fields=percentage
{{< /curl-block >}}
  

Credit note creation
--------------------

### 4.1 Create a Credit Invoice

The final step, is to create the Credit Invoice itself. The list below describes all the needed fields.

1.  X-Elorus-Organization: your organization ID
2.  calculator\_mode: sets your values as "initial" or "total", meaning before or after taxes.
    1.  When "total" is used, then it is mandatory to use "unit\_total" in items.
    2.  When "initial" is used, then it is mandatory to use "unit\_value" in items.
    3.  Depending on the situation, Elorus will calculate the taxes accordingly.
3.  client: Client id - In this case we created "Elorus SA" contact.
4.  draft: true or false depending on the need to issue immediately an invoice or not. If true, the credit invoice will not reach MyData/Softone, until issued.
5.  documenttype: Document Type ID - In this case we used "Πιστωτικό Τιμολόγιο" document type, associated with the corresponding "aade type".
6.  related\_documents: Associated invoice ID(s) list - Invoice(s) must be issued! If omitted then mydata\_document\_type: "5.2" Credit Invoice / Non-Associated should be used.
7.  My data specific fields: mydata\_document\_type - mydata\_classification\_category - mydata\_classification\_type - paid\_on\_receipt - payment\_method
    1.  mydata\_document\_type: aade type
    2.  mydata\_classification\_category: income type aade
    3.  mydata\_classification\_type: classifications of Ε3 aade
    4.  paid\_on\_receipt: Invoice amount that was paid when invoice was issued. If "0" then you don't need to send payment\_method since Elorus will automatically apply payment\_method as on credit.
    5.  payment\_method:
        1.  “1”: Domestic Payments Account
        2.  “2”: Foreign Payments Account
        3.  “3”: Cash
        4.  “4”: Cheque
        5.  “6”: Web Banking
        6.  “7”: POS / e-POS

{{< curl-block >}}
curl -X POST -H "Content-Type: application/json" -H "Authorization: Token ~Your-API-key~" -H "X-Elorus-Organization: ~Your-Organization-ID~" https://api.elorus.com/v1.1/creditnotes/ -d '{"calculator_mode": "total", "currency_code": "EUR", "exchange_rate": "1.000000", "client": "2482665622824027155", "date": "2022-5-20", "draft": true, "documenttype": "2483498441813001641", "mydata_document_type": "5.1", "items": [{"title": "Γάντια Εργασίας", "unit_total": "12.4", "quantity": "1", "taxes": ["2476911428611605999"], "mydata_classification_category": "category1_3", "mydata_classification_type": "E3_561_001"}], "paid_on_receipt": "12.4", "payment_method": "3", "related_documents": ["2483541804331304045"]}'
{{< /curl-block >}}