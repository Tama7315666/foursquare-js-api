
```

var client = new FourSquareClient("<client_id>", "<client_secret>", "<redirect_uri>", "<rember_credentials>");

// if you don't want to use the client_secret you can first authorize the user.
if(!client.accessToken)
{
    client.authenticate(false);
}

client.venuesClient.search(parameters, { 
    onSuccess: function(data)
    {
        // The request succeeded
        // implement wat you want to do with the response
    },
    onFailure: function(data)
    {
        // The request failed
        // implement wat you want to do with the response
    }
});

```

_`<`variables`>` that contain a `*` are optional_