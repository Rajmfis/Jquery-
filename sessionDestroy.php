<?php
 session_start();
 session_destroy();
 echo $has_session = session_status();
 header("Location: register.php");
?>