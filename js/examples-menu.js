var myHTMLmenu = '<a class="menu-header">Invoices</a>'+
'<ul class="main-list">'+
'    <li id="sales-invoice-0">'+
'        <a href="./">'+
'            Sales Invoice</a>'+
'    </li>'+
'    <li id="invoice-of-rendered-services-0">'+
'        <a href="invoice-of-rendered-services.html">'+
'            Invoice of rendered services</a>'+
'    </li>'+
'    <li id="credit-invoice-0">'+
'        <a href="credit-invoice.html">'+
'            Credit Invoice</a>'+
'    </li>'+
'    <li id="retail-sales-credit-note-0">'+
'        <a href="retail-sales-credit-note.html">'+
'            Retail Sales Credit Note</a>'+
'    </li>'+
'    <li id="simple-invoice-0">'+
'        <a href="simple-invoice.html">'+
'            Simple invoice</a>'+
'    </li>'+
'</ul>'+
'<!--            -->'+
'<a class="menu-header">Receipts</a>'+
'<ul class="main-list">'+
'    <li id="retail-sales-receipt-0">'+
'        <a href="retail-sales-receipt.html">'+
'            Retail Sales Receipt</a>'+
'    </li>'+
'    <li id="service-rendered-receipt-0">'+
'        <a href="service-rendered-receipt.html">'+
'            Service Rendered Receipt</a>'+
'    </li>'+
'</ul>';

var sales_invoice =
    '<a href="./" class="selected-example">'+
    '    Sales Invoice</a>';
var sales_invoice_steps =
    '<a class="menu-header">Steps</a>'+
    '<ul class="main-list" id="Sales Invoice">'+
    '    <li><a href="#sales-invoice-1.1">1.1 Create a new contact</a></li>'+
    '    <li><a href="#sales-invoice-1.2">1.2 Get contact ID</a></li>'+
    '    <li><a href="#sales-invoice-2.1">2.1 Get document type ID</a></li>'+
    '    <li><a href="#sales-invoice-3.1">3.1 About taxes</a></li>'+
    '    <li><a href="#sales-invoice-3.2">3.2 Get taxes ID</a></li>'+
    '    <li><a href="#sales-invoice-4.1">4.1 Create Sales Invoice</a></li>'+
    '</ul>';

var invoice_of_rendered_services =
    '<a href="invoice-of-rendered-services.html" class="selected-example">'+
    '    Invoice of rendered services</a>';
var invoice_of_rendered_services_steps =
    '<a class="menu-header">Steps</a>'+
    '<ul class="main-list" id="Invoice of rendered services">'+
    '    <li><a href="#invoice-of-rendered-services-1.1">1.1 Create a new contact</a></li>'+
    '    <li><a href="#invoice-of-rendered-services-1.2">1.2 Get contact ID</a></li>'+
    '    <li><a href="#invoice-of-rendered-services-2.1">2.1 Get document type ID</a></li>'+
    '    <li><a href="#invoice-of-rendered-services-3.1">3.1 About taxes</a></li>'+
    '    <li><a href="#invoice-of-rendered-services-3.2">3.2 Get taxes ID</a></li>'+
    '    <li><a href="#invoice-of-rendered-services-4.1">4.1 Create Invoice of rendered services</a></li>'+
    '</ul>';

var credit_invoice =
    '<a href="credit-invoice.html" class="selected-example">'+
    '    Credit Invoice</a>';
var credit_invoice_steps =
    '<a class="menu-header">Steps</a>'+
    '<ul class="main-list" id="Credit Invoice">'+
    '    <li><a href="#credit-invoice-1.1">1.1 Create a new contact</a></li>'+
    '    <li><a href="#credit-invoice-1.2">1.2 Get contact ID</a></li>'+
    '    <li><a href="#credit-invoice-2.1">2.1 Get document type ID</a></li>'+
    '    <li><a href="#credit-invoice-3.1">3.1 About taxes</a></li>'+
    '    <li><a href="#credit-invoice-3.2">3.2 Get taxes ID</a></li>'+
    '    <li><a href="#credit-invoice-4.1">4.1 Create Credit Invoice</a></li>'+
    '</ul>';

var retail_sales_credit_note =
    '<a href="retail-sales-credit-note.html" class="selected-example">'+
    '    Retail Sales Credit Note</a>';
var retail_sales_credit_note_steps =
    '<a class="menu-header">Steps</a>'+
    '<ul class="main-list" id="Retail Sales Credit Note">'+
    '    <li><a href="#retail-sales-credit-note-1.1">1.1 Create a new contact</a></li>'+
    '    <li><a href="#retail-sales-credit-note-1.2">1.2 Get contact ID</a></li>'+
    '    <li><a href="#retail-sales-credit-note-2.1">2.1 Get document type ID</a></li>'+
    '    <li><a href="#retail-sales-credit-note-3.1">3.1 About taxes</a></li>'+
    '    <li><a href="#retail-sales-credit-note-3.2">3.2 Get taxes ID</a></li>'+
    '    <li><a href="#retail-sales-credit-note-4.1">4.1 Create a Retail Sales Credit Note</a></li>'+
    '</ul>';

var simple_invoice =
    '<a href="simple-invoice.html" class="selected-example">'+
    '    Simple invoice</a>';
var simple_invoice_steps =
    '<a class="menu-header">Steps</a>'+
    '<ul class="main-list" id="Simple invoice">'+
    '    <li><a href="#simple-invoice-1.1">1.1 Create a new contact</a></li>'+
    '    <li><a href="#simple-invoice-1.2">1.2 Get contact ID</a></li>'+
    '    <li><a href="#simple-invoice-2.1">2.1 Create an "Invoice" document type</a></li>'+
    '    <li><a href="#simple-invoice-2.2">2.2 Get document type ID</a></li>'+
    '    <li><a href="#simple-invoice-3.1">3.1 About taxes</a></li>'+
    '    <li><a href="#simple-invoice-3.2">3.2 Get taxes ID</a></li>'+
    '    <li><a href="#simple-invoice-4.1">4.1 Create Simple invoice</a></li>'+
    '</ul>';

var retail_sales_receipt =
    '<a href="retail-sales-receipt.html" class="selected-example">'+
    '    Retail Sales Receipt</a>';
var retail_sales_receipt_steps =
    '<a class="menu-header">Steps</a>'+
    '<ul class="main-list" id="Retail Sales Receipt">'+
    '    <li><a href="#retail-sales-receipt-1.1">1.1 Create a new contact</a></li>'+
    '    <li><a href="#retail-sales-receipt-1.2">1.2 Get contact ID</a></li>'+
    '    <li><a href="#retail-sales-receipt-2.1">2.1 Create a "Retail Sales Receipt" document type</a>'+
    '    </li>'+
    '    <li><a href="#retail-sales-receipt-2.2">2.2 Get document type ID</a></li>'+
    '    <li><a href="#retail-sales-receipt-3.1">3.1 About taxes</a></li>'+
    '    <li><a href="#retail-sales-receipt-3.2">3.2 Get taxes ID</a></li>'+
    '    <li><a href="#retail-sales-receipt-4.1">4.1 Create Retail Sales Receipt</a></li>'+
    '</ul>';

var service_rendered_receipt =
    '<a href="service-rendered-receipt.html"  class="selected-example">'+
    '    Service Rendered Receipt</a>';
var service_rendered_receipt_steps =
    '<a class="menu-header">Steps</a>'+
    '<ul class="main-list" id="Service Rendered Receipt">'+
    '    <li><a href="#service-rendered-receipt-1.1">1.1 Create a new contact</a></li>'+
    '    <li><a href="#service-rendered-receipt-1.2">1.2 Get contact ID</a></li>'+
    '    <li><a href="#service-rendered-receipt-2.1">2.1 Get document type ID</a></li>'+
    '    <li><a href="#service-rendered-receipt-3.1">3.1 About taxes</a></li>'+
    '    <li><a href="#service-rendered-receipt-3.2">3.2 Get taxes ID</a></li>'+
    '    <li><a href="#service-rendered-receipt-4.1">4.1 Create Service Rendered Receipt</a></li>'+
    '</ul>';


