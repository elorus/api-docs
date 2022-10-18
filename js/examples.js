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
    document.getElementById("my-menu").innerHTML = myHTMLmenu;
    switch (page) {
        case "sales_invoice":
            document.getElementById("sales-invoice-0").innerHTML = sales_invoice;
            break;
        case "invoice_of_rendered_services":
            document.getElementById("invoice-of-rendered-services-0").innerHTML = invoice_of_rendered_services;
            break;
        case "credit_invoice":
            document.getElementById("credit-invoice-0").innerHTML = credit_invoice;
            break;
        case "retail_sales_credit_note":
            document.getElementById("retail-sales-credit-note-0").innerHTML = retail_sales_credit_note;
            break;
        case "simple_invoice":
            document.getElementById("simple-invoice-0").innerHTML = simple_invoice;
            break;
        case "retail_sales_receipt":
            document.getElementById("retail-sales-receipt-0").innerHTML = retail_sales_receipt;
            break;
        case "service_rendered_receipt":
            document.getElementById("service-rendered-receipt-0").innerHTML = service_rendered_receipt;
            break;
        default:
            break;
    }

}
