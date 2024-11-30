// document.getElementById("cancel-button").addEventListener("click", function () {
//     if (confirm("Are you sure you want to cancel?")) {
//         alert("Form canceled.");
//     }
// });

// document.getElementById("contact-form").addEventListener("submit", function (e) {
//     e.preventDefault();
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const message = document.getElementById("message").value;

//     const thankYouPage = `
//         <html>
//         <body>
//             <h1>Thank You!</h1>
//             <p>Name: ${name}</p>
//             <p>Email: ${email}</p>
//             <p>Message: ${message}</p>
//             <button onclick="window.location.href='index.html'">Back to Portfolio</button>
//             <button id="download-pdf">Download as PDF</button>
//             <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.4.0/jspdf.umd.min.js"></script>
//             <script>
//                 document.getElementById('download-pdf').addEventListener('click', function () {
//                     const { jsPDF } = window.jspdf;
//                     const pdf = new jsPDF();
//                     pdf.text("Thank You!", 10, 10);
//                     pdf.text("Name: ${name}", 10, 20);
//                     pdf.text("Email: ${email}", 10, 30);
//                     pdf.text("Message: ${message}", 10, 40);
//                     pdf.save("Thank_You.pdf");
//                 });
//             </script>
//         </body>
//         </html>
//     `;

//     const newWindow = window.open();
//     newWindow.document.write(thankYouPage);
//     newWindow.document.close();
// });

// Function to clear all input fields
function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}

// Cancel button functionality
document.getElementById("cancel-button").addEventListener("click", function () {
    if (confirm("Are you sure you want to cancel?")) {
        clearForm(); // Clear form fields after confirming cancelation
        alert("Form canceled.");
    }
});

// Submit button functionality
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const thankYouPage = `
        <html>
        <body>
            <h1>Thank You!</h1>
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>
            <button onclick="window.location.href='index.html'">Back to Portfolio</button>
            <button id="download-pdf">Download as PDF</button>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.4.0/jspdf.umd.min.js"></script>
            <script>
                document.getElementById('download-pdf').addEventListener('click', function () {
                    const { jsPDF } = window.jspdf;
                    const pdf = new jsPDF();
                    pdf.text("Thank You!", 10, 10);
                    pdf.text("Name: ${name}", 10, 20);
                    pdf.text("Email: ${email}", 10, 30);
                    pdf.text("Message: ${message}", 10, 40);
                    pdf.save("Thank_You.pdf");
                });
            </script>
        </body>
        </html>
    `;

    // Open a new page with the Thank You message
    const newWindow = window.open();
    newWindow.document.write(thankYouPage);
    newWindow.document.close();

    // Clear form fields after successful submission
    clearForm();
});

