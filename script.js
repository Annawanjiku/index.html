<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Interactive Web Page</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Interactive Web Page</h1>

    <!-- Form Section -->
    <form id="contactForm">
        <label for="name">Name:</label>
        <input type="text" id="name" placeholder="Enter your name"><br><br>

        <label for="email">Email:</label>
        <input type="text" id="email" placeholder="Enter your email"><br><br>

        <button type="submit">Submit</button>
        <p id="formMessage"></p>
    </form>

    <!-- Interactive Button Section -->
    <button id="colorBtn">Change Background Color</button>
    <button id="greetBtn">Greet Me</button>

    <p id="output"></p>

    <script src="script.js"></script>
</body>
</html>
body {
    font-family: Arial, sans-serif;
    padding: 20px;
}

button {
    margin: 5px;
    padding: 5px 10px;
}

#formMessage {
    color: red;
    font-weight: bold;
}
