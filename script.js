document.addEventListener('DOMContentLoaded', function () {
    // Find all elements with the class 'text-box'
    var textBoxes = document.querySelectorAll('.text-box');
    var count = 0;

    // Add click event listener to each text-box
    textBoxes.forEach(function (textBox) {
        textBox.addEventListener('click', function () {
            // Retrieve the URL of the content page
            const contentUrl = textBox.getAttribute('data-content-url');

            // Set data in localStorage
            localStorage.setItem('pageTitle', 'Name');
            localStorage.setItem('pageDescription', 'James Mwihaki');

            // Retrieve data from localStorage
            const pageTitle = localStorage.getItem('pageTitle');
            const pageDescription = localStorage.getItem('pageDescription');

            // Create HTML content dynamically
            const htmlContent = `
                <!DOCTYPE html>
                <html>
                <head>
                    <title>${pageTitle}</title>
                    <link rel="stylesheet" type="text/css" href="styles.css">
                </head>
                <body>
                <!-- Trigger/Open The Modal -->
                  <div class="modal-content">
                    <span class="close">×</span>
                    <h2>${pageTitle}</h2>
                    <p>${pageDescription}</p>
                  </div>

                <script src="script.js"></script>

                </body>
                </html>
            `;

            // Create a new Blob object with the HTML content
            const blob = new Blob([htmlContent], { type: 'text/html' });

            // Create a URL for the Blob object
            const url = URL.createObjectURL(blob);

            // Open the content URL in a new window
            window.open(contentUrl, '_blank');

            // Open the URL of the dynamically created HTML page in a new window
            window.open(url, '_blank');
        });
    });
});


$("#pageTitle").html(Math.random()*10 + 1);