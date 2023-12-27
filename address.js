<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        .container {
            max-width: 600px;
            margin: auto;
            padding: 20px;
        }
    </style>
</head>
<body>

<div class="container">
    <label for="tempAddress">Temporary Address:</label>
    <textarea id="tempAddress" rows="4" cols="50"></textarea>

    <br>

    <label for="permanentAddress">Permanent Address:</label>
    <textarea id="permanentAddress" rows="4" cols="50"></textarea>

    <br>

    <input type="checkbox" id="copyAddress" onchange="copyAddress()">
    <label for="copyAddress">Copy Temporary Address to Permanent Address</label>
</div>

<script>
    function copyAddress() {
        const tempAddress = document.getElementById("tempAddress");
        const permanentAddress = document.getElementById("permanentAddress");
        const copyCheckbox = document.getElementById("copyAddress");

        if (copyCheckbox.checked) {
            permanentAddress.value = tempAddress.value;
            permanentAddress.setAttribute("readonly", true);
        } else {
            permanentAddress.value = "";
            permanentAddress.removeAttribute("readonly");
        }
    }
</script>

</body>
</html>
