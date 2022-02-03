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
                        authorization: useToken ? 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjI1NTc4RjhEMTAwNTRGMTE1RkRDMUI2QzY4QjZFMzNDRUZGNDg0NzkiLCJ0eXAiOiJhdCtqd3QiLCJ4NXQiOiJKVmVQalJBRlR4RmYzQnRzYUxialBPXzBoSGsifQ.eyJuYmYiOjE2NDM5MjA5MjUsImV4cCI6MTY0MzkyNDUyNSwiaXNzIjoiaHR0cHM6Ly92YWN1bmFhcHAuYXp1cmV3ZWJzaXRlcy5uZXQiLCJhdWQiOiJWYWN1bmFBUFAuUHJlc2VudGF0aW9uQVBJIiwiY2xpZW50X2lkIjoiVmFjdW5hQVBQLlByZXNlbnRhdGlvbiIsInN1YiI6IjA3YTA3MTAxLWUwODMtNDRiNy04Njk1LTkyNmI4NGE5OWIzMiIsImF1dGhfdGltZSI6MTY0MzkxNTU0MCwiaWRwIjoibG9jYWwiLCJqdGkiOiJCQ0U0QTBDOTBDRDQ5REM2NUY4MDFGQ0VFQjVCMkJBMCIsInNpZCI6IkE4MDg2OUU1N0M5OUVGRkYyQzA1QjFFMjVFNUNFOUQ2IiwiaWF0IjoxNjQzOTIwOTI1LCJzY29wZSI6WyJWYWN1bmFBUFAuUHJlc2VudGF0aW9uQVBJIiwib3BlbmlkIiwicHJvZmlsZSJdLCJhbXIiOlsicHdkIl19.BVd7HL-T6h7Meiwsar9IStwgyB7YRekQ-1K_MRcPQ3_UL26Np2gMoYTOf1IYkFx9R4f_GB4yuDHnPO0stOQrMw-JfyCAvanE0WOMR40acdCKhjUgtAtD3lgyaaPKUQ4cpBCRaNnKTj5Rlq-gh2dzU5mKkOS-condTfYYxLP-M1r9qgXvfczyCwhJeGJn5CMIzRu8hhNNQCM8F-OBsjIh1w2I5j6ABAgrNnDnNxQk2D-qZ2TzJea3KiEJaR7eOw3vJ-ePR0kIsp_q28BUqCeBd4XNzrD1XIxmiBHU8mDVX6ZIEZCAbhTJt3uzsUaImFBQYl-FW1OufPSVlGI_2N-2dw'  // Aqui va el token
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
