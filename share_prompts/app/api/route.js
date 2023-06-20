// in api folder we handle just our backend

/*
    NEXT SUPPORTS: 
    1. GET 
    2. POST 
    3. PUT 
    4. PATCH: Partially updates an existing resource on the server.
    5. DETELE 
    6. HEAD: Retrieves the header of a resource without fetching its body 
    7. OPTIONS: Retrieves the supported HTTP methods and other communnication
*/

export async function GET(request) { 
    return new Response("Hello World from NEXT JS!"); 
}; 