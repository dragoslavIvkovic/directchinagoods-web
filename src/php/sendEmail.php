// sendEmail.php
<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Primi JSON podatke
    $json = file_get_contents('php://input');
    $data = json_decode($json);

    // Podesi email podatke
    $to = "vas@email.com"; // Promenite ovo na vaš email
    $subject = $data->subject;
    $message = "Ime: " . $data->name . "\n";
    $message .= "Email: " . $data->email . "\n\n";
    $message .= "Poruka:\n" . $data->message;
    
    $headers = "From: " . $data->email . "\r\n";
    $headers .= "Reply-To: " . $data->email . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Pošalji email
    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(['status' => 'success', 'message' => 'Email je uspešno poslat!']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Došlo je do greške prilikom slanja emaila.']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Pogrešan metod zahteva.']);
}
?>