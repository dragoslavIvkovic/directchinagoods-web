<?php
// Allow requests from your specific domain
header('Access-Control-Allow-Origin: https://www.directchinagoods.com');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Method not allowed']);
    exit();
}

try {
    $json = file_get_contents('php://input');
    $data = json_decode($json);

    if (!$data || !isset($data->email) || !isset($data->name) || !isset($data->subject) || !isset($data->message)) {
        throw new Exception('Invalid input data');
    }

    if (!filter_var($data->email, FILTER_VALIDATE_EMAIL)) {
        throw new Exception('Invalid email format');
    }

    $to = "office@directchinagoods.com";
    $subject = htmlspecialchars($data->subject);
    $message = "Name: " . htmlspecialchars($data->name) . "\n";
    $message .= "Email: " . htmlspecialchars($data->email) . "\n\n";
    $message .= "Message:\n" . htmlspecialchars($data->message);
    
    $headers = [
        'From' => $data->email,
        'Reply-To' => $data->email,
        'X-Mailer' => 'PHP/' . phpversion(),
        'Content-Type' => 'text/plain; charset=UTF-8'
    ];

    if (!mail($to, $subject, $message, $headers)) {
        throw new Exception('Failed to send email');
    }

    http_response_code(200);
    echo json_encode(['status' => 'success', 'message' => 'Email sent successfully!']);

} catch (Exception $e) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
}
?>