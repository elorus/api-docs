const lists = Array.prototype.slice.call(document.getElementsByClassName('menu-item'))

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function addMenuHTML(page) {
    document.getElementById("list").innerHTML = myHTMLmenu;
    switch (page) {
        //INVOICES
        case "sales_invoice":
            document.getElementById("sales-invoice").innerHTML = sales_invoice;
            document.getElementById("steps").innerHTML = sales_invoice_steps;
            break;
        case "sales_invoice_intra_community_supplies":
            document.getElementById("sales-invoice-intra-community-supplies").innerHTML = sales_invoice_intra_community_supplies;
            document.getElementById("steps").innerHTML = sales_invoice_intra_community_supplies_steps;
            break;
        case "sales_invoice_third_country_supplies":
            document.getElementById("sales-invoice-third-country-supplies").innerHTML = sales_invoice_third_country_supplies;
            document.getElementById("steps").innerHTML = sales_invoice_third_country_supplies_steps;
            break;

        case "invoice_of_rendered_services":
            document.getElementById("invoice-of-rendered-services").innerHTML = invoice_of_rendered_services;
            document.getElementById("steps").innerHTML = invoice_of_rendered_services_steps;
            break;
        case "invoice_of_rendered_services_intra_community_supplies":
            document.getElementById("invoice-of-rendered-services-intra-community-supplies").innerHTML = invoice_of_rendered_services_intra_community_supplies;
            document.getElementById("steps").innerHTML = invoice_of_rendered_services_intra_community_supplies_steps;
            break;
        case "invoice_of_rendered_services_third_country_supplies":
            document.getElementById("invoice-of-rendered-services-third-country-supplies").innerHTML = invoice_of_rendered_services_third_country_supplies;
            document.getElementById("steps").innerHTML = invoice_of_rendered_services_third_country_supplies_steps;
            break;

        //RECEIPTS
        case "retail_sales_receipt":
            document.getElementById("retail-sales-receipt").innerHTML = retail_sales_receipt;
            document.getElementById("steps").innerHTML = retail_sales_receipt_steps;
            break;
        case "service_rendered_receipt":
            document.getElementById("service-rendered-receipt").innerHTML = service_rendered_receipt;
            document.getElementById("steps").innerHTML = service_rendered_receipt_steps;
            break;
        //CREDIT NOTES
        case "credit_invoice":
            document.getElementById("credit-invoice").innerHTML = credit_invoice;
            document.getElementById("steps").innerHTML = credit_invoice_steps;
            break;
        case "retail_sales_credit_note":
            document.getElementById("retail-sales-credit-note").innerHTML = retail_sales_credit_note;
            document.getElementById("steps").innerHTML = retail_sales_credit_note_steps;
            break;

        default:
            break;
    }
}
