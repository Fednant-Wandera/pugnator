<!DOCTYPE html>
<html>
<script>
    <head>
    </head>
    <body>
window.onload = function () {
    var FeddysWhatsapp = document.getElementById('FeddyWhatsapp');
    FeddysWhatsapp.style.display = 'none';
    window.onscroll = function () {
        if (window.pageYOffset > 300)
        {
        FeddysWhatsapp.style.display = 'block';
               
    } else {
        FeddysWhatsapp.style.display = 'none';
    }
};
};
</body>
</script>
</html>