const httpRequest = {
    host: 'localhost',
    port: 8082,
    method: 'POST', // GET, PUT, DELETE, etc.
    path: '/payments',
    headers: {
        'content-type': 'application/json',
        'content-length': 51,
    },
    body: '{"data": "This is just an example of a json format string"}'
}

const httpResponse = {
    statesCode: 200,
    headers: {
        'access-control-allow-origin': 'https://cctechmx.org',
        'content-type': 'application/json',

    },
    body: '{}'
}