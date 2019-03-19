#API Routes

##Register - POST
https://life-gpa-api.herokuapp.com/api/users/register

```
{
	"name":"someName",
	"email":"name@gmail.com",
	"password":"password"
}
```

##Login - POST
https://life-gpa-api.herokuapp.com/api/users/login

```
{
	"email":"john@gmail.com",
	"password":"password"
}
```

# Get Current User
https://life-gpa-api.herokuapp.com/api/users/current
Returns
```
{
    "id": "5c90f71091294659613f2e0e",
    "name": "Buster",
    "email": "john@gmail.com"
}
```