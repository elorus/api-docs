var myHTMLmenu =
    '<div class="menu-header">Invoices</div>' +
    '<ul class="main-list">' +

    '    <li id="sales-invoice">' +
    '        <a href="./">' +
    '            Sales Invoice</a>' +
    '    </li>' +
    '    <li id="sales-invoice-intra-community-supplies">' +
    '        <a href="sales-invoice-intra-community-supplies.html">' +
    '            Sales Invoice / Intra Community Supplies</a>' +
    '    </li>' +
    '    <li id="sales-invoice-third-country-supplies">' +
    '        <a href="sales-invoice-third-country-supplies.html">' +
    '            Sales Invoice / Third Country Supplies</a>' +
    '    </li>' +

    '    <li id="invoice-of-rendered-services">' +
    '        <a href="invoice-of-rendered-services.html">' +
    '            Invoice of Rendered Services</a>' +
    '    </li>' +
    '    <li id="invoice-of-rendered-services-intra-community-supplies">' +
    '        <a href="invoice-of-rendered-services-intra-community-supplies.html">' +
    '            Invoice of Rendered Services / Intra Community Supplies</a>' +
    '    </li>' +
    '    <li id="invoice-of-rendered-services-third-country-supplies">' +
    '        <a href="invoice-of-rendered-services-third-country-supplies.html">' +
    '            Invoice of Rendered Services / Third Country Supplies</a>' +
    '    </li>' +
    '</ul>' +
    '<!--            -->' +
    '<div class="menu-header">Receipts</div>' +
    '<ul class="main-list">' +
    '    <li id="retail-sales-receipt">' +
    '        <a href="retail-sales-receipt.html">' +
    '            Retail Sales Receipt</a>' +
    '    </li>' +
    '    <li id="service-rendered-receipt">' +
    '        <a href="service-rendered-receipt.html">' +
    '            Service Rendered Receipt</a>' +
    '    </li>' +
    '</ul>' +
    '<!--            -->' +
    '<div class="menu-header">Credit Notes</div>' +
    '<ul class="main-list">' +
    '    <li id="credit-invoice">' +
    '        <a href="credit-invoice.html">' +
    '            Credit Invoice</a>' +
    '    </li>' +
    '    <li id="retail-sales-credit-note">' +
    '        <a href="retail-sales-credit-note.html">' +
    '            Retail Sales Credit Note</a>' +
    '    </li>' +
    '</ul>';

var sales_invoice =
    '<a href="./" class="selected-example">' +
    '    Sales Invoice</a>';
var sales_invoice_steps =
    '<div class="menu-header">Steps</div>' +
    '<ul class="main-list">' +
    '    <li><a href="#sales-invoice-1.1">1.1 Create a new contact</a></li>' +
    '    <li><a href="#sales-invoice-1.2">1.2 Get contact ID</a></li>' +
    '    <li><a href="#sales-invoice-2.1">2.1 Get document type ID</a></li>' +
    '    <li><a href="#sales-invoice-3.1">3.1 About taxes</a></li>' +
    '    <li><a href="#sales-invoice-3.2">3.2 Get taxes ID</a></li>' +
    '    <li><a href="#sales-invoice-4.1">4.1 Create a "Sales Invoice"</a></li>' +
    '</ul>';

var sales_invoice_intra_community_supplies =
    '<a href="sales-invoice-intra-community-supplies.html" class="selected-example">' +
    '    Sales Invoice / Intra Community Supplies</a>';
var sales_invoice_intra_community_supplies_steps =
    '<div class="menu-header">Steps</div>' +
    '<ul class="main-list">' +
    '    <li><a href="#sales-invoice-intra-community-supplies-1.1">1.1 Create a new contact</a></li>' +
    '    <li><a href="#sales-invoice-intra-community-supplies-1.2">1.2 Get contact ID</a></li>' +
    '    <li><a href="#sales-invoice-intra-community-supplies-2.1">2.1 Get document type ID</a></li>' +
    '    <li><a href="#sales-invoice-intra-community-supplies-3.1">3.1 About taxes</a></li>' +
    '    <li><a href="#sales-invoice-intra-community-supplies-3.2">3.2 Get taxes ID</a></li>' +
    '    <li><a href="#sales-invoice-intra-community-supplies-4.1">4.1 Create a "Sales Invoice / Intra Community Supplies"</a></li>' +
    '</ul>';

var sales_invoice_third_country_supplies =
    '<a href="sales-invoice-third-country-supplies.html" class="selected-example">' +
    '    Sales Invoice / Third Country Supplies</a>';
var sales_invoice_third_country_supplies_steps =
    '<div class="menu-header">Steps</div>' +
    '<ul class="main-list">' +
    '    <li><a href="#sales-invoice-third-country-supplies-1.1">1.1 Create a new contact</a></li>' +
    '    <li><a href="#sales-invoice-third-country-supplies-1.2">1.2 Get contact ID</a></li>' +
    '    <li><a href="#sales-invoice-third-country-supplies-2.1">2.1 Get document type ID</a></li>' +
    '    <li><a href="#sales-invoice-third-country-supplies-3.1">3.1 About taxes</a></li>' +
    '    <li><a href="#sales-invoice-third-country-supplies-3.2">3.2 Get taxes ID</a></li>' +
    '    <li><a href="#sales-invoice-third-country-supplies-4.1">4.1 Create a "Sales Invoice / Third Country Supplies"</a></li>' +
    '</ul>';

var invoice_of_rendered_services =
    '<a href="invoice-of-rendered-services.html" class="selected-example">' +
    '    Invoice of Rendered Services</a>';
var invoice_of_rendered_services_steps =
    '<div class="menu-header">Steps</div>' +
    '<ul class="main-list">' +
    '    <li><a href="#invoice-of-rendered-services-1.1">1.1 Create a new contact</a></li>' +
    '    <li><a href="#invoice-of-rendered-services-1.2">1.2 Get contact ID</a></li>' +
    '    <li><a href="#invoice-of-rendered-services-2.1">2.1 Get document type ID</a></li>' +
    '    <li><a href="#invoice-of-rendered-services-3.1">3.1 About taxes</a></li>' +
    '    <li><a href="#invoice-of-rendered-services-3.2">3.2 Get taxes ID</a></li>' +
    '    <li><a href="#invoice-of-rendered-services-4.1">4.1 Create an "Invoice of rendered services"</a></li>' +
    '</ul>';

var invoice_of_rendered_services_intra_community_supplies =
    '<a href="invoice-of-rendered-services-intra-community-supplies.html" class="selected-example">' +
    '    Invoice of Rendered Services / Intra Community Supplies</a>';
var invoice_of_rendered_services_intra_community_supplies_steps =
    '<div class="menu-header">Steps</div>' +
    '<ul class="main-list">' +
    '    <li><a href="#invoice-of-rendered-services-intra-community-supplies-1.1">1.1 Create a new contact</a></li>' +
    '    <li><a href="#invoice-of-rendered-services-intra-community-supplies-1.2">1.2 Get contact ID</a></li>' +
    '    <li><a href="#invoice-of-rendered-services-intra-community-supplies-2.1">2.1 Get document type ID</a></li>' +
    '    <li><a href="#invoice-of-rendered-services-intra-community-supplies-3.1">3.1 About taxes</a></li>' +
    '    <li><a href="#invoice-of-rendered-services-intra-community-supplies-3.2">3.2 Get taxes ID</a></li>' +
    '    <li><a href="#invoice-of-rendered-services-intra-community-supplies-4.1">4.1 Create an "Invoice of rendered services / Intra Community Supplies"</a></li>' +
    '</ul>';

var invoice_of_rendered_services_third_country_supplies =
    '<a href="invoice-of-rendered-services-third-country-supplies.html" class="selected-example">' +
    '    Invoice of Rendered Services / Third Country Supplies</a>';
var invoice_of_rendered_services_third_country_supplies_steps =
    '<div class="menu-header">Steps</div>' +
    '<ul class="main-list">' +
    '    <li><a href="#invoice-of-rendered-services-third-country-supplies-1.1">1.1 Create a new contact</a></li>' +
    '    <li><a href="#invoice-of-rendered-services-third-country-supplies-1.2">1.2 Get contact ID</a></li>' +
    '    <li><a href="#invoice-of-rendered-services-third-country-supplies-2.1">2.1 Get document type ID</a></li>' +
    '    <li><a href="#invoice-of-rendered-services-third-country-supplies-3.1">3.1 About taxes</a></li>' +
    '    <li><a href="#invoice-of-rendered-services-third-country-supplies-3.2">3.2 Get taxes ID</a></li>' +
    '    <li><a href="#invoice-of-rendered-services-third-country-supplies-4.1">4.1 Create an "Invoice of rendered services / Third Country Supplies"</a></li>' +
    '</ul>';

var retail_sales_receipt =
    '<a href="retail-sales-receipt.html" class="selected-example">' +
    '    Retail Sales Receipt</a>';
var retail_sales_receipt_steps =
    '<div class="menu-header">Steps</div>' +
    '<ul class="main-list">' +
    '    <li><a href="#retail-sales-receipt-1.1">1.1 Create a new contact</a></li>' +
    '    <li><a href="#retail-sales-receipt-1.2">1.2 Get contact ID</a></li>' +
    '    <li><a href="#retail-sales-receipt-2.1">2.1 Create a "Retail Sales Receipt" document type</a>' +
    '    </li>' +
    '    <li><a href="#retail-sales-receipt-2.2">2.2 Get document type ID</a></li>' +
    '    <li><a href="#retail-sales-receipt-3.1">3.1 About taxes</a></li>' +
    '    <li><a href="#retail-sales-receipt-3.2">3.2 Get taxes ID</a></li>' +
    '    <li><a href="#retail-sales-receipt-4.1">4.1 Create a "Retail Sales Receipt"</a></li>' +
    '</ul>';

var service_rendered_receipt =
    '<a href="service-rendered-receipt.html"  class="selected-example">' +
    '    Service Rendered Receipt</a>';
var service_rendered_receipt_steps =
    '<div class="menu-header">Steps</div>' +
    '<ul class="main-list">' +
    '    <li><a href="#service-rendered-receipt-1.1">1.1 Create a new contact</a></li>' +
    '    <li><a href="#service-rendered-receipt-1.2">1.2 Get contact ID</a></li>' +
    '    <li><a href="#service-rendered-receipt-2.1">2.1 Get document type ID</a></li>' +
    '    <li><a href="#service-rendered-receipt-3.1">3.1 About taxes</a></li>' +
    '    <li><a href="#service-rendered-receipt-3.2">3.2 Get taxes ID</a></li>' +
    '    <li><a href="#service-rendered-receipt-4.1">4.1 Create a "Service Rendered Receipt"</a></li>' +
    '</ul>';

var credit_invoice =
    '<a href="credit-invoice.html" class="selected-example">' +
    '    Credit Invoice</a>';
var credit_invoice_steps =
    '<div class="menu-header">Steps</div>' +
    '<ul class="main-list">' +
    '    <li><a href="#credit-invoice-1.1">1.1 Create a new contact</a></li>' +
    '    <li><a href="#credit-invoice-1.2">1.2 Get contact ID</a></li>' +
    '    <li><a href="#credit-invoice-2.1">2.1 Get document type ID</a></li>' +
    '    <li><a href="#credit-invoice-3.1">3.1 About taxes</a></li>' +
    '    <li><a href="#credit-invoice-3.2">3.2 Get taxes ID</a></li>' +
    '    <li><a href="#credit-invoice-4.1">4.1 Create a "Credit Invoice"</a></li>' +
    '</ul>';

var retail_sales_credit_note =
    '<a href="retail-sales-credit-note.html" class="selected-example">' +
    '    Retail Sales Credit Note</a>';
var retail_sales_credit_note_steps =
    '<div class="menu-header">Steps</div>' +
    '<ul class="main-list">' +
    '    <li><a href="#retail-sales-credit-note-1.1">1.1 Create a new contact</a></li>' +
    '    <li><a href="#retail-sales-credit-note-1.2">1.2 Get contact ID</a></li>' +
    '    <li><a href="#retail-sales-credit-note-2.1">2.1 Get document type ID</a></li>' +
    '    <li><a href="#retail-sales-credit-note-3.1">3.1 About taxes</a></li>' +
    '    <li><a href="#retail-sales-credit-note-3.2">3.2 Get taxes ID</a></li>' +
    '    <li><a href="#retail-sales-credit-note-4.1">4.1 Create a "Retail Sales Credit Note"</a></li>' +
    '</ul>';
