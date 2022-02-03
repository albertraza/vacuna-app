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
                        authorization: useToken ? 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjI1NTc4RjhEMTAwNTRGMTE1RkRDMUI2QzY4QjZFMzNDRUZGNDg0NzkiLCJ0eXAiOiJhdCtqd3QiLCJ4NXQiOiJKVmVQalJBRlR4RmYzQnRzYUxialBPXzBoSGsifQ.eyJuYmYiOjE2NDM5MTU1NDQsImV4cCI6MTY0MzkxOTE0NCwiaXNzIjoiaHR0cHM6Ly92YWN1bmFhcHAuYXp1cmV3ZWJzaXRlcy5uZXQiLCJhdWQiOiJWYWN1bmFBUFAuUHJlc2VudGF0aW9uQVBJIiwiY2xpZW50X2lkIjoiVmFjdW5hQVBQLlByZXNlbnRhdGlvbiIsInN1YiI6IjA3YTA3MTAxLWUwODMtNDRiNy04Njk1LTkyNmI4NGE5OWIzMiIsImF1dGhfdGltZSI6MTY0MzkxNTU0MCwiaWRwIjoibG9jYWwiLCJqdGkiOiIyNDUzQ0Q0MDQwMDMyMzBCQjVCRTY2OEQ3RDI1QkVGQiIsInNpZCI6IkE4MDg2OUU1N0M5OUVGRkYyQzA1QjFFMjVFNUNFOUQ2IiwiaWF0IjoxNjQzOTE1NTQ0LCJzY29wZSI6WyJWYWN1bmFBUFAuUHJlc2VudGF0aW9uQVBJIiwib3BlbmlkIiwicHJvZmlsZSJdLCJhbXIiOlsicHdkIl19.o63ouFsOdJZACSbs4YZH83zAufC3yVmQjF7B8uQ49htwbGjg5w5uI87tkwAN4TJ1vTCIwIvOEd-7NeYrmj855bl0v3KbIvoRS6xGkmkPKciLMvfHJEaPhjq-Dza0H_blOsjZTEVM10xb0c8epJggH2SZ8UrJ1XEohU9czyll1-ki2QDBAMroWqFdaMxyMeV5B1T844HMJs7xUAeXZ2yfHu-1M0KgGO42ea3XxnmPU87vvTYmDdORIVxzy4JN8Juqrfb5WU9r-xZ0aqWrJie1mMXziBHtPrTjWDQPGycAV6YfSpJ0T-K_Ukhi0c3OldYLA0o_qN6wvuwo3CMMOQepvg'  // Aqui va el token
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
