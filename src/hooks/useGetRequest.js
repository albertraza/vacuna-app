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
                        authorization: useToken ? 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjI1NTc4RjhEMTAwNTRGMTE1RkRDMUI2QzY4QjZFMzNDRUZGNDg0NzkiLCJ0eXAiOiJhdCtqd3QiLCJ4NXQiOiJKVmVQalJBRlR4RmYzQnRzYUxialBPXzBoSGsifQ.eyJuYmYiOjE2NDQwMDYxNzQsImV4cCI6MTY0NDAwOTc3NCwiaXNzIjoiaHR0cHM6Ly92YWN1bmFhcHAuYXp1cmV3ZWJzaXRlcy5uZXQiLCJhdWQiOiJWYWN1bmFBUFAuUHJlc2VudGF0aW9uQVBJIiwiY2xpZW50X2lkIjoiVmFjdW5hQVBQLlByZXNlbnRhdGlvbiIsInN1YiI6IjA3YTA3MTAxLWUwODMtNDRiNy04Njk1LTkyNmI4NGE5OWIzMiIsImF1dGhfdGltZSI6MTY0NDAwMjE2MSwiaWRwIjoibG9jYWwiLCJqdGkiOiI0NTE0NEU5QjkyQzI3MkMyOEI1NjlDRTFGRTQ5OUE2QSIsInNpZCI6IkI3QzYzMDREN0I2QzZBODAyNENEQkREMEU4NjBGQTc1IiwiaWF0IjoxNjQ0MDA2MTc0LCJzY29wZSI6WyJWYWN1bmFBUFAuUHJlc2VudGF0aW9uQVBJIiwib3BlbmlkIiwicHJvZmlsZSJdLCJhbXIiOlsicHdkIl19.SoVKVRXPM-2UwMIXG7mvWPrDLixoxEwXPVTz_H8asmPS16tZ6wI2eso8ISBOP4NyHNq7zkvcjeeA-58m95tpoX0aPTvYWl2GqsYG5OIXLdTom3fZ7LplCW5MmcG26dpNmkkdGanVOJ6Y2XZomFZ_NFnRDJYpqfnWP9NRKcpk0PyF8wvZm4Y9_ngl0TTlAI_kIvKujTc4_qZ95SY689kkP1uUPhdhPO-QY4De1uOzOOVGI4tkddFE5odscRCM_8PGfKiWIphvap17yYywGPkL_3BRqwUYHlcyCDz9UCwYea2OwfXETF2SXcViIMd5PxySfDJXq1y3gUNsSNMa4Q0TQw'  // Aqui va el token
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
