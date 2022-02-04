import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function useGetRequest ( url, useToken = true ) {
    const [ data, setData ] = useState();
    const [ error, setError ] = useState( null );
    const [ isLoading, setIsLoading ] = useState( true );

    useEffect( () => {
        async function makeRequest () {
            try {
                const response = await axios.get( url, {
                    headers: {
                        authorization: useToken ? 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjI1NTc4RjhEMTAwNTRGMTE1RkRDMUI2QzY4QjZFMzNDRUZGNDg0NzkiLCJ0eXAiOiJhdCtqd3QiLCJ4NXQiOiJKVmVQalJBRlR4RmYzQnRzYUxialBPXzBoSGsifQ.eyJuYmYiOjE2NDQwMTA3ODAsImV4cCI6MTY0NDAxNDM4MCwiaXNzIjoiaHR0cHM6Ly92YWN1bmFhcHAuYXp1cmV3ZWJzaXRlcy5uZXQiLCJhdWQiOiJWYWN1bmFBUFAuUHJlc2VudGF0aW9uQVBJIiwiY2xpZW50X2lkIjoiVmFjdW5hQVBQLlByZXNlbnRhdGlvbiIsInN1YiI6IjA3YTA3MTAxLWUwODMtNDRiNy04Njk1LTkyNmI4NGE5OWIzMiIsImF1dGhfdGltZSI6MTY0NDAwMjE2MSwiaWRwIjoibG9jYWwiLCJqdGkiOiJEMEI4OUYwRTFEMTRDMkY2RUIxM0RGRUNEOUM1MzcxOSIsInNpZCI6IkI3QzYzMDREN0I2QzZBODAyNENEQkREMEU4NjBGQTc1IiwiaWF0IjoxNjQ0MDEwNzgwLCJzY29wZSI6WyJWYWN1bmFBUFAuUHJlc2VudGF0aW9uQVBJIiwib3BlbmlkIiwicHJvZmlsZSJdLCJhbXIiOlsicHdkIl19.nNGjGN34gJBKnIfjZnOhADnOCU3bUgrHnP27cR8CabQ2tVDU4Y4xQ4uI3rXYWd7J75a2X3XlI47XYjIEyyeiVYzzybs1XIRiZQEcfWD7v15_T7MPQFi4Huig3-tE3ZqT3ldHtQ4btafb4YymLRhuNEV6xfYIl7sAbQKXO7kIIStXS83KEg4KC5HxXOSWBW4TzLCUTIinuIpls9SJcvsryHD3A_7wFEIwgGVy0lYzZBBjaaM_XWJTGC05634CNQiPN4ldj1F11-MNtOaMt2O6RMgZYduqPLXtmLR72gkRn-k_94zDiMdcxEVhL5wGiiOSLDyHjRp-7M0CfKVE3ms67w'  // Aqui va el token
                            : undefined
                    }
                } )
                const { data } = response;
                setData( data );
            } catch ( err ) {
                const errorResult = await err.toJSON();
                const { message } = errorResult;
                setError( message );
            } finally {
                setIsLoading( false );
            }
        }

        makeRequest();
    }, [] );

    return {
        data,
        error,
        isLoading
    };
}
