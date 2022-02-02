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
                        authorization: useToken ? 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjI1NTc4RjhEMTAwNTRGMTE1RkRDMUI2QzY4QjZFMzNDRUZGNDg0NzkiLCJ0eXAiOiJhdCtqd3QiLCJ4NXQiOiJKVmVQalJBRlR4RmYzQnRzYUxialBPXzBoSGsifQ.eyJuYmYiOjE2NDM4MzY0MTksImV4cCI6MTY0Mzg0MDAxOSwiaXNzIjoiaHR0cHM6Ly92YWN1bmFhcHAuYXp1cmV3ZWJzaXRlcy5uZXQiLCJhdWQiOiJWYWN1bmFBUFAuUHJlc2VudGF0aW9uQVBJIiwiY2xpZW50X2lkIjoiVmFjdW5hQVBQLlByZXNlbnRhdGlvbiIsInN1YiI6IjA3YTA3MTAxLWUwODMtNDRiNy04Njk1LTkyNmI4NGE5OWIzMiIsImF1dGhfdGltZSI6MTY0Mzc0OTU2MiwiaWRwIjoibG9jYWwiLCJqdGkiOiI4MDlBODU2MjkzMzIwNkFFODYxODQxNTBDQ0IwMzNCQiIsInNpZCI6IkQzQ0JEOTNCMzJFQjQ1MjJGMDcxRDZCRjI5MDNCODdEIiwiaWF0IjoxNjQzODM2NDE5LCJzY29wZSI6WyJWYWN1bmFBUFAuUHJlc2VudGF0aW9uQVBJIiwib3BlbmlkIiwicHJvZmlsZSJdLCJhbXIiOlsicHdkIl19.Hm5zCUG3RZJeG9CvkciUXqTxjFjpyg1xLksLsuaVQR8XNxfYygwuK_NWXF-7rZ9kc5Qbhor6JKIhXpU60UyEx_h8jy10KFOuZpX9GoAFXxkX_wKNpUVMFlWl5ETw8WcziOfiT92Bl0L13eRwzVdwv1BnWDxFwOrj3yuL_8GbVwbvF3C5cVM85OxlDctaDJQINmubaN51Aqg3gQwtsg3G7a5Z_7ChpiW752YwbXqTLQP_sA3VNCnwhJZ8n3s0-0cJA2udgMUtEzS7mMISv83jKkPIoQUEaqZ8nCosrIwLr9RjzjSKA83-a3yUaF6qOmUvsUBnJTxoWraQUtKQaAsUAw'  // Aqui va el token
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
