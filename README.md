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

## Update Task - PUT
https://life-gpa-api.herokuapp.com/api/tasks/:id
new task body
```
	"category":"Finance 2 test",
	"name":"Save $50 a day",
	"completed":true
```

## Delete Task - Delete
https://life-gpa-api.herokuapp.com/api/tasks/:id
This will delete the task if it exists and the user owns the task

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

## Submit Daily Tasks - POST
https://life-gpa-api.herokuapp.com/api/tasks/Submit
Expects an object with a single property called "tasks". Tasks will be an array of the submitted tasks consisting of an id (string) and a completed flag (boolean). Example request body here:

```
{

	"tasks": [

		{
			"completed": false,
			"_id": "5c929d8d7856720004632df1"
		},

		{
			"completed": false,
			"_id": "5c92a345ede5f962281db5b6"
		}

	]

}
```

The server will send back an object containing the total, daily, weekly, and monthly GPAs. Sample object will look like this:

```
{
    "daily": 100,
    "weekly": 100,
    "monthly": 100,
    "allTime": 100
}

```

## Get all GPAs - GET
https://life-gpa-api.herokuapp.com/api/tasks/gpa
Returns an object with the current GPA data. Object will look like this:

```
{
    "daily": 100,
    "weekly": 100,
    "monthly": 100,
    "allTime": 100
}

```
