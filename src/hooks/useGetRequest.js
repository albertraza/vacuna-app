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
                        authorization: useToken ? 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjI1NTc4RjhEMTAwNTRGMTE1RkRDMUI2QzY4QjZFMzNDRUZGNDg0NzkiLCJ0eXAiOiJhdCtqd3QiLCJ4NXQiOiJKVmVQalJBRlR4RmYzQnRzYUxialBPXzBoSGsifQ.eyJuYmYiOjE2NDM5MjUzNTUsImV4cCI6MTY0MzkyODk1NSwiaXNzIjoiaHR0cHM6Ly92YWN1bmFhcHAuYXp1cmV3ZWJzaXRlcy5uZXQiLCJhdWQiOiJWYWN1bmFBUFAuUHJlc2VudGF0aW9uQVBJIiwiY2xpZW50X2lkIjoiVmFjdW5hQVBQLlByZXNlbnRhdGlvbiIsInN1YiI6IjA3YTA3MTAxLWUwODMtNDRiNy04Njk1LTkyNmI4NGE5OWIzMiIsImF1dGhfdGltZSI6MTY0MzkxNTU0MCwiaWRwIjoibG9jYWwiLCJqdGkiOiI5NTQxRTg5RUI0N0E0QkZFRDgwNENGNzFDNzQ1NkNCRSIsInNpZCI6IkE4MDg2OUU1N0M5OUVGRkYyQzA1QjFFMjVFNUNFOUQ2IiwiaWF0IjoxNjQzOTI1MzU1LCJzY29wZSI6WyJWYWN1bmFBUFAuUHJlc2VudGF0aW9uQVBJIiwib3BlbmlkIiwicHJvZmlsZSJdLCJhbXIiOlsicHdkIl19.qzOIKWmzv7BwQTFXMgXI3e9jALwjjKggdSqiuoaEzWrPYe28pLgmASenC6k0trkqfvF5woqT7x_XtmENTNvl7UUIIJct7mHJ9LTuDUj22JYgLAq1-WSwuBRRUSiYFusWmXilEGgLK23V0uUgCpSbmUs9owlt9hYmKZugjn8oxXFK3PyujHhOVCwTsgdbNcUNklVYoAssOuTrMyw26Zmy2M5gb7bzZxlsF6HEgTcUEQHCso2hnRYWKj-SaTq7jwGoTLrqjFAB4btSjEMTtDHEU0oMLRIiyi3UfpIs2CBqb7Z76hWdLw_ZDmrd0AOO3lqOBuax9uO88g5Vu9gy4keDyA'  // Aqui va el token
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
