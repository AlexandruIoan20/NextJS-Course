'use client' //error components must be client components 

//example of an error component 
const Error = ({ error, reset }) => { 
    useEffect( () => { 
        console.error(error); 
    }, [error]); 

    return( 
        <div>
            <h2> Something went wrong! </h2>
            <button onClick = { () => reset () } ></button>
        </div>
    )
}