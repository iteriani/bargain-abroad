<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Bargain Abroad</title>

    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/selectize.bootstrap3.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
</head>

<body>

<script type="text/x-handlebars">
    {{ render header }}
    {{ outlet }}
    {{ render footer }}
</script>

<!--(if target dev)><!-->
<script type="text/javascript" src="js/libs/jquery-2.0.3.min.js"></script>
<script type="text/javascript" src="js/libs/selectize.min.js"></script>
<script type="text/javascript" src="js/libs/bootstrap.min.js"></script>
<script type="text/javascript" src="js/libs/handlebars-v1.2.1.js"></script>
<script type="text/javascript" src="js/libs/store.min.js"></script>
<script type="text/javascript" src="js/libs/ember.js"></script>
<script type="text/javascript" src="js/libs/spin.min.js"></script>

<script type="text/javascript" src="js/app.js"></script>

<!-- models -->
<!--<script type="text/javascript" src="js/models/.js"></script>-->

<!-- routes -->
<script type="text/javascript" src="js/routes/_auth_route.js"></script>
<script type="text/javascript" src="js/routes/account_route.js"></script>
<script type="text/javascript" src="js/routes/activity_route.js"></script>
<script type="text/javascript" src="js/routes/login_route.js"></script>
<script type="text/javascript" src="js/routes/register_route.js"></script>

<!-- controllers -->
<script type="text/javascript" src="js/controllers/application_controller.js"></script>
<script type="text/javascript" src="js/controllers/auth_controller.js"></script>
<script type="text/javascript" src="js/controllers/index_controller.js"></script>
<script type="text/javascript" src="js/controllers/login_controller.js"></script>
<script type="text/javascript" src="js/controllers/forgot_controller.js"></script>
<script type="text/javascript" src="js/controllers/reset_controller.js"></script>
<script type="text/javascript" src="js/controllers/header_controller.js"></script>
<script type="text/javascript" src="js/controllers/footer_controller.js"></script>
<script type="text/javascript" src="js/controllers/register_controller.js"></script>
<script type="text/javascript" src="js/controllers/account_controller.js"></script>
<script type="text/javascript" src="js/controllers/activity_controller.js"></script>

<!-- views -->
<script type="text/javascript" src="js/views/header_view.js"></script>
<script type="text/javascript" src="js/views/account_view.js"></script>
<script type="text/javascript" src="js/views/login_view.js"></script>
<script type="text/javascript" src="js/views/register_view.js"></script>
<script type="text/javascript" src="js/views/index_view.js"></script>
<script type="text/javascript" src="js/views/loading_view.js"></script>

<!-- components -->

<script type="text/javascript" src="js/templates.js"></script>

<!--<!(endif)-->

<!--(if target prod)>
<script type="text/javascript" src="build/libs.js"></script>
<script type="text/javascript" src="build/app.js"></script>
<!--<!(endif)-->

</body>
</html>
