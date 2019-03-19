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

# Get Current User - GET
https://life-gpa-api.herokuapp.com/api/users/current
Returns
```
{
    "id": "5c90f71091294659613f2e0e",
    "name": "Buster",
    "email": "john@gmail.com"
}
```

## Add Task - POST
https://life-gpa-api.herokuapp.com/api/tasks
userId and completed will be set by the server
```
	"category":"Finance 2 test",
	"name":"Save $50 a day"
```

Get Task - GET
https://life-gpa-api.herokuapp.com/api/tasks
this show the example when the user as two task.
```
[
    {
        "completed": false,
        "date": "2019-03-19T16:53:54.585Z",
        "_id": "5c911eb1ab7b2111175179aa",
        "user": "5c90f71091294659613f2e0e",
        "category": "Finance",
        "name": "Save $5 a day",
        "__v": 0
    },
    {
        "completed": false,
        "date": "2019-03-19T17:01:04.124Z",
        "_id": "5c91207d0fc124147b2d8685",
        "user": "5c90f71091294659613f2e0e",
        "category": "Finance 2 test",
        "name": "Save $50 a day",
        "__v": 0
    }
]
```