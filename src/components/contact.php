<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"));

    $name = htmlspecialchars($data->name ?? 'No Name');
    $email = htmlspecialchars($data->email ?? 'No Email');
    $phone = htmlspecialchars($data->phone ?? 'No Phone');
    $message = nl2br(htmlspecialchars($data->message ?? 'No Message'));

    $to = "ganeshghatti6@gmail.com"; 
    $subject = "New Contact Form Message from $name";

    $body = "
    <html>
    <head>
        <meta charset='UTF-8'>
    </head>
    <body style='font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; color: #333;'>
        <div style='max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1); padding: 20px;'>
            <h2 style='color: #4CAF50;'>New Contact Form Submission: $name</h2>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Phone:</strong> $phone</p>
            <hr style='border: none; border-top: 1px solid #eee;' />
            <p style='white-space: pre-wrap;'><strong>Message:</strong><br>$message</p>
        </div>
    </body>
    </html>";

    $headers = "From: info@vasipharma.com\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["success" => true, "message" => "Message sent!"]);
    } else {
        echo json_encode(["success" => false, "message" => "Failed to send message."]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid request"]);
}
?>
