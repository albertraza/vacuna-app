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
                        authorization: useToken ? 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjI1NTc4RjhEMTAwNTRGMTE1RkRDMUI2QzY4QjZFMzNDRUZGNDg0NzkiLCJ0eXAiOiJhdCtqd3QiLCJ4NXQiOiJKVmVQalJBRlR4RmYzQnRzYUxialBPXzBoSGsifQ.eyJuYmYiOjE2NDQzNDg2MzgsImV4cCI6MTY0NDM1MjIzOCwiaXNzIjoiaHR0cHM6Ly92YWN1bmFhcHAuYXp1cmV3ZWJzaXRlcy5uZXQiLCJhdWQiOiJWYWN1bmFBUFAuUHJlc2VudGF0aW9uQVBJIiwiY2xpZW50X2lkIjoiVmFjdW5hQVBQLlByZXNlbnRhdGlvbiIsInN1YiI6IjA3YTA3MTAxLWUwODMtNDRiNy04Njk1LTkyNmI4NGE5OWIzMiIsImF1dGhfdGltZSI6MTY0NDI2MTQ2NSwiaWRwIjoibG9jYWwiLCJqdGkiOiJBOTdCMzQ4OTJBN0EwQ0JENTA1ODQ4MzAyQTIxRUZBRSIsInNpZCI6IkM5MzYzNzQ2MDgyN0Q3REZGRjVBNzJGRDFEMjhDNjhFIiwiaWF0IjoxNjQ0MzQ4NjM4LCJzY29wZSI6WyJWYWN1bmFBUFAuUHJlc2VudGF0aW9uQVBJIiwib3BlbmlkIiwicHJvZmlsZSJdLCJhbXIiOlsicHdkIl19.ETs9Pm4gSsuSAJzZydgWP14JVO-o7Q4zrw_p2g12ZEmipQ9kfF00C36z4c-KZib8Iwu7FqhXOCgCUinuvfKxindyWPYaCH-p8oKgOCqvtyDfLLkgqz2lRgzgTQL29QIzy_Kq2_dJYML5-11XorJk6LIx2MwS0lkPK4nsrHaLtAU7D5RO7arXXu8hM_MSfol2MYNdNRpoP0WBIezpgoGNfrwbxVgn2L7xRv8QmZn7G0tAGoSY4zcchOimubtfVxiUd2TkqDzDvKpZCKqjIVAdijw9kgu3dPK5roLj-nL9jYpewjVQe1vM9O6Z3rBsukeOV3EFmDKcDvaHhrI1UWF-fg'  // Aqui va el token
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
