# Introduction #

Sometimes you simple want to access the API without having to leave your current page for acceptance.
You can achieve this by writing a simple php script which sets the 'access\_token' cookie, which can be accessed by javascript.

```
<?php

$username = '<username>';
$password = '<password>';

// TODO insert code

?>
```

Now you can call any of the Javascript methods for accessing the API

## Be Warned ##
When you use a static account, everyone will be able to call any method for this account, without this having to be confirmed. It is advised to remove any methods that will modify the account from the api-wrapper. Doing so will not prevent the user from finding out the 'access token' and accessing the api to modify the account.