import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function useGetRequest ( url ) {
    const [ data, setData ] = useState( [] );
    const [ error, setError ] = useState( null );
    const [ isLoading, setIsLoading ] = useState( true );

    useEffect( () => {
        async function makeRequest () {
            try {
                const response = await axios.get( url, {
                    headers: {
                        authorization: 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjI1NTc4RjhEMTAwNTRGMTE1RkRDMUI2QzY4QjZFMzNDRUZGNDg0NzkiLCJ0eXAiOiJhdCtqd3QiLCJ4NXQiOiJKVmVQalJBRlR4RmYzQnRzYUxialBPXzBoSGsifQ.eyJuYmYiOjE2NDM4MzI0MjgsImV4cCI6MTY0MzgzNjAyOCwiaXNzIjoiaHR0cHM6Ly92YWN1bmFhcHAuYXp1cmV3ZWJzaXRlcy5uZXQiLCJhdWQiOiJWYWN1bmFBUFAuUHJlc2VudGF0aW9uQVBJIiwiY2xpZW50X2lkIjoiVmFjdW5hQVBQLlByZXNlbnRhdGlvbiIsInN1YiI6IjA3YTA3MTAxLWUwODMtNDRiNy04Njk1LTkyNmI4NGE5OWIzMiIsImF1dGhfdGltZSI6MTY0Mzc0OTU2MiwiaWRwIjoibG9jYWwiLCJqdGkiOiI0NEVCNzc5NzQyQkYxNkQ5MTNBMEQ5NzdGRTgwOUE2NiIsInNpZCI6IkQzQ0JEOTNCMzJFQjQ1MjJGMDcxRDZCRjI5MDNCODdEIiwiaWF0IjoxNjQzODMyNDI4LCJzY29wZSI6WyJWYWN1bmFBUFAuUHJlc2VudGF0aW9uQVBJIiwib3BlbmlkIiwicHJvZmlsZSJdLCJhbXIiOlsicHdkIl19.YW8Q9h2V6wbl3wxk-eUnSlDxYZGxjHXFTBY4nvDV8-j_yWzdUAXgNgrK2yS091q9DI_IrTF-Qc_MM_OhL0ALf8Nlmcb34Ycnvl12Hrs3HdqOeNguhWEWhJ8eFLA6f7SSLUFCeWn-_EwRceNpZzSsq3lK1-oA0dEW3OiRJjd99oqfBJCcI0V_GO1ApJ3dWIhQ5Ja-PXp-fCD3cgWSx9LivQOl8T1zhTsxDXiDM4hnEXDdhShD8vlyYg6wC-aJ_Y0FgHmzAYViHHSpSN2wYEY17VPAarrLpcUyXMMcXF2leYZpbehbSaPp2js_D0GeYr52n1thxwjbVi4q4EOwM-tsVQ', // Aqui va el token
                    }
                } )
                const { data } = response;
                setData( data );
            } catch ( err ) {
                const errorResult = await err.toJSON();
                const { message } = errorResult;
                setError( message );
                setData( [] );
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
