<?php
// Include library Midtrans
require_once dirname(__FILE__) . '/midtrans-php-master/Midtrans.php';

// Set server key dan konfigurasi lainnya
\Midtrans\Config::$serverKey = 'SB-Mid-server-_YjH329LV3IhdnQxnhjfZ_Fs';
\Midtrans\Config::$isProduction = false;
\Midtrans\Config::$isSanitized = true;
\Midtrans\Config::$is3ds = true;

// Persiapkan informasi transaksi
$params = array(
    'transaction_details' => array(
        'order_id' => rand(), // Contoh: id pesanan secara acak
        'gross_amount' => $_POST['total'], // Total pembayaran dari form
    ),
    'item_details' => json_decode($_POST['items'], true), // Detail item dari form
    'customer_details' => array(
        'first_name' => $_POST['name'],
        'email' => $_POST['email'],
        'phone' => $_POST['phone'],
    ),
);

// Dapatkan token dari Midtrans
$snapToken = \Midtrans\Snap::getSnapToken($params);
echo $snapToken; // Token akan dikirim kembali ke klien (JavaScript)


?>