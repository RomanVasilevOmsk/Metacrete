<!DOCTYPE html>
<html lang="en">
<head>
    <title>Metacrete</title>
    @@include('partial/common/head.html')
</head>
<body>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TKKGPR8"
                  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<div class="l-page">
    <div class="l-page__inner">
        <div class="l-page__header">
            @@include('./partial/common/header.html')
        </div>

        <div class="l-page__inner">
            @@include('./partial/main-screen.html')
        </div>

        <div class="l-page__container">
            @@include('./partial/features.html')
        </div>


        <div class="l-page__container">
            @@include('./partial/main-form.html')
        </div>

        <div class="l-page__container">
            @@include('./partial/key-objects.html')
        </div>

        <div class="l-page__container">
            @@include('./partial/certificates.html')
        </div>

        <div class="l-page__footer">
            @@include('./partial/common/footer.html')
        </div>
    </div>
</div>
@@include('partial/common/modal.html')

<!---MODAL FEATURES!-->
@@include('partial/common/features-modal/features-modal-destruction.html')
@@include('partial/common/features-modal/features-modal-objects.html')
@@include('partial/common/features-modal/features-modal-price.html')
@@include('partial/common/features-modal/features-modal-quality.html')
@@include('partial/common/features-modal/features-modal-availability.html')
@@include('partial/common/features-modal/features-modal-approach.html')

<link rel="stylesheet" href="css/vendor.css">
<link rel="stylesheet" href="css/app.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="js/vendor.min.js"></script>
<script src="js/lightgallery/lightgallery.min.js"></script>
<script src="js/lightgallery/lg-thumbnail.min.js"></script>
<script src="js/lightgallery/lg-fullscreen.min.js"></script>
<script src="js/slick/slick.min.js"></script>
<script src="js/app.js"></script>

</body>
</html>
