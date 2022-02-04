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
                        authorization: useToken ? 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjI1NTc4RjhEMTAwNTRGMTE1RkRDMUI2QzY4QjZFMzNDRUZGNDg0NzkiLCJ0eXAiOiJhdCtqd3QiLCJ4NXQiOiJKVmVQalJBRlR4RmYzQnRzYUxialBPXzBoSGsifQ.eyJuYmYiOjE2NDQwMDIxNjMsImV4cCI6MTY0NDAwNTc2MywiaXNzIjoiaHR0cHM6Ly92YWN1bmFhcHAuYXp1cmV3ZWJzaXRlcy5uZXQiLCJhdWQiOiJWYWN1bmFBUFAuUHJlc2VudGF0aW9uQVBJIiwiY2xpZW50X2lkIjoiVmFjdW5hQVBQLlByZXNlbnRhdGlvbiIsInN1YiI6IjA3YTA3MTAxLWUwODMtNDRiNy04Njk1LTkyNmI4NGE5OWIzMiIsImF1dGhfdGltZSI6MTY0NDAwMjE2MSwiaWRwIjoibG9jYWwiLCJqdGkiOiJFNTI2OTlFNzQ0ODlGRTQwOUIxNEM0RTBFNjBENkNFRCIsInNpZCI6IkI3QzYzMDREN0I2QzZBODAyNENEQkREMEU4NjBGQTc1IiwiaWF0IjoxNjQ0MDAyMTYzLCJzY29wZSI6WyJWYWN1bmFBUFAuUHJlc2VudGF0aW9uQVBJIiwib3BlbmlkIiwicHJvZmlsZSJdLCJhbXIiOlsicHdkIl19.-Yq_pXGN17FEiOKs81feHrbm-ZslPf_OOQnhlRTiEQyX4fVTipbay-YYoSzIzU-A0prb-cLByOLpNkD-tth5dxKEF9bOhHn69mF0C7jIeKTq_NMeEPMzsuv4Y-sw4FVBHMN3BoL84Y3wuuvkdg9tqPxRe0gmPg1Cb55b7iUhQ5G2LwKKfPn5Oqmd8W8UWyrEY54OYnTbToTRdOvRZb4DJ4t4ssBlT-Dp-UbJY0ctKZL_PQlV52OlLjQsegMMdsfRP3axJ9U-gUkAcKa82HY7UpIUXtM1j6wrQjzy1z_ZVS5v1qJ_w6HWvClifEH5V2zTIeonmUZuxtdK4bq_5Q7mbg'  // Aqui va el token
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
