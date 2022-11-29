+++
type = "examples"
title = "Sales Invoice / Third Country Supplies"
# A=Invoice, B=Receipt, C=Credit Note, D=Bill, E=Income, F=Other
x_docType = "A"
x_mydata_type = "1.3"
+++

When **selling goods to a business** you are typically required to create a "Sales invoice". According to the [myDATA specifications](https://www.aade.gr/myData/prodiagrafes), sales invoices are further divided into three invoice types, depending on the country that the client operates in.

This guide demonstrates how to create invoices for **clients located in countries outside the European Union** (myDATA document type **"1.3 Sales Invoice / Third Country Supplies"**)

{{< warning-mydata >}}

{{< auth >}}

Client
------

### 1.1 Create a new contact

_\- The guide assumes you're working on a new Elorus organization, so this step can be omitted._  
  
First lets create a contact so there is someone to bill. In a business context, contacts are individuals or businesses whom you transact with; typically your clients, leads, suppliers and partners. Since Elorus will let you manage your sales as well as your expenses, a contact may represent either a client or a supplier (or even both).  
  

{{< curl-block >}}
curl -X POST -H "Content-Type: application/json" -H "Authorization: Token ~Your-API-key~" -H "X-Elorus-Organization: ~Your-Organization-ID~" https://api.elorus.com/v1.1/contacts/ -d '{"client_type": "1", "company":"Elorus FC", "vat_number":"0123456789", "addresses":[{"address":"Theofilopoulou 13", "city":"Athens", "zip":"11743", "country": "GR", "ad_type": "bill"}], "is_client": true, "is_supplier":false}'
{{< /curl-block >}}
  

### 1.2 Get contact ID

Filter e.g. by "company", to get the contact ID. Retrieved contact ID in this case is "2480647926494267071".  
  

{{< curl-block >}}
curl -X GET -H "Content-Type: application/json" -H "Authorization: Token ~Your-API-key~" -H "X-Elorus-Organization: ~Your-Organization-ID~" https://api.elorus.com/v1.1/contacts/?company="Elorus FC"
{{< /curl-block >}}
  

Document type
-------------

### 2.1 Get document type ID

In this case, a "Sales Invoice" document type will be needed. There is a "Sales Invoice" document type pre-created.  
Default title is "Τιμολόγιο". Search by "title", to get the document type ID. Retrieved document type ID in this case is "2480655983945188366".  
In case the title is changed or the document type is missing, use the Elorus UI to create a new one.  
  

{{< curl-block >}}
curl -X GET -H "Content-Type: application/json" -H "Authorization: Token ~Your-API-key~" -H "X-Elorus-Organization: ~Your-Organization-ID~" https://api.elorus.com/v1.1/documenttypes/?search="Τιμολόγιο"&search_fields=title
{{< /curl-block >}}
  

Taxes
-----

### 3.1 About taxes

By default there are some taxes preset in Elorus. Usually 24% tax is used for Greece "Sales Invoice" so the preset tax will be retrieved and used. In case there is a need for a new tax to be created, use of Elorus' UI is mandatory.  
Optional steps to create new tax:

1.  Login to your Elorus account
2.  Go to: "Settings -> Taxes"
3.  Click "+Add" on top right corner
4.  And set it up as the picture below. AADE category and title used are for example purposes. ![](/img/examples/common/tax.png)
5.  Click "Save"

  

### 3.2 Get taxes ID

Search by "percentage", to get the tax ID. Retrieved tax ID in this case is "2476911428611605999". Make sure that "aade\_type":1 is in the response packet.  
  

{{< curl-block >}}
curl -X GET -H "Content-Type: application/json" -H "Authorization: Token ~Your-API-key~" -H "X-Elorus-Organization: ~Your-Organization-ID~" https://api.elorus.com/v1.1/taxes/?search="24"&search_fields=percentage
{{< /curl-block >}}
  

Invoice creation
----------------

### 4.1 Create Sales Invoice / Third Country Supplies

The final step, is to create the Invoice itself. The list below describes all the needed fields.

1.  X-Elorus-Organization: your organization ID
2.  calculator\_mode: sets your values as "initial" or "total", meaning before or after taxes.
    1.  When "total" is used, then it is mandatory to use "unit\_total" in items.
    2.  When "initial" is used, then it is mandatory to use "unit\_value" in items.
    3.  Depending on the situation, Elorus will calculate the taxes accordingly.
3.  client: Client id - In this case we created "Elorus FC" contact.
4.  draft: true or false depending on the need to issue immediately an invoice or not. If true, the invoice will not reach MyData/Softone, until issued.
5.  documenttype: Document Type ID - In this case we used "Τιμολόγιο" document type, associated with the corresponding "aade type".
6.  My data specific fields: mydata\_document\_type - mydata\_classification\_category - mydata\_classification\_type - paid\_on\_receipt - payment\_method
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
curl -X POST -H "Content-Type: application/json" -H "Authorization: Token ~Your-API-key~" -H "X-Elorus-Organization: ~Your-Organization-ID~" https://api.elorus.com/v1.1/invoices/ -d '{"calculator_mode": "total", "currency_code": "EUR", "exchange_rate": "1.000000", "client": "2480647926494267071", "date": "2022-5-18", "draft": true, "documenttype": "2480655983945188366", "mydata_document_type": "1.3", "items": [{"title": "Γάντια Εργασίας", "unit_total": "12.4", "quantity": "1", "taxes": ["2476911428611605999"], "mydata_classification_category": "category1_2", "mydata_classification_type": "E3_561_006"}], "paid_on_receipt": "12.4", "payment_method": "3"}'
{{< /curl-block >}}