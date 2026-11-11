<?php
include "db.php";
$Full_Name = $_POST['Ful_Name'];
$Email = $_POST['Email'];
$Subject = $_POST['Subject'];
$Message = $_POST['Message'];

$sql = "INSERT INTO Contact_messages 
(Full_Name, Email,Subject, Message)
VALUES(?, ?, ?, ?)";

$stmt = $conn->prepare($sql);

$stm->bind_param(
    "ssss",
    $Full_Name,
    $Email,
    $Subject,
    $Message
);

if ($stmt->execut()) {
    echo "Message sent successfully!";
} {
    echo "error:" . $stmt->error;
}
$stmt->close();
$conn->close();
?>