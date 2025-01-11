let promise= fetch("https://jsonplaceholder.typicode.com/posts")
.then(function (value)
{
    return value.json();
}).then(function (value)
{
    console.log(value);
})