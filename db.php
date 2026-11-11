<?php
$host = "loclhost";
$username = "root";
$passward = ""
$database="students_awareness"
$ conn = new mysqli($host, $username,$passward, $database);
if ($conn->conect error) {
    die("Database connection failed:"
    $conn->connect_error);
}
