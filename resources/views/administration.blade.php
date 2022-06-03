<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Adnafrica</title>

    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>

<body>

    <div id="backoffice">
        <BackOffice></BackOffice>
    </div>
    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>
