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
                        authorization: useToken ? 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjI1NTc4RjhEMTAwNTRGMTE1RkRDMUI2QzY4QjZFMzNDRUZGNDg0NzkiLCJ0eXAiOiJhdCtqd3QiLCJ4NXQiOiJKVmVQalJBRlR4RmYzQnRzYUxialBPXzBoSGsifQ.eyJuYmYiOjE2NDQyNjE0NjYsImV4cCI6MTY0NDI2NTA2NiwiaXNzIjoiaHR0cHM6Ly92YWN1bmFhcHAuYXp1cmV3ZWJzaXRlcy5uZXQiLCJhdWQiOiJWYWN1bmFBUFAuUHJlc2VudGF0aW9uQVBJIiwiY2xpZW50X2lkIjoiVmFjdW5hQVBQLlByZXNlbnRhdGlvbiIsInN1YiI6IjA3YTA3MTAxLWUwODMtNDRiNy04Njk1LTkyNmI4NGE5OWIzMiIsImF1dGhfdGltZSI6MTY0NDI2MTQ2NSwiaWRwIjoibG9jYWwiLCJqdGkiOiJCOENBNDcyNDQyOTQ3RkQ0MjdBMjY0RTg1OTkzRkY3MSIsInNpZCI6IkM5MzYzNzQ2MDgyN0Q3REZGRjVBNzJGRDFEMjhDNjhFIiwiaWF0IjoxNjQ0MjYxNDY2LCJzY29wZSI6WyJWYWN1bmFBUFAuUHJlc2VudGF0aW9uQVBJIiwib3BlbmlkIiwicHJvZmlsZSJdLCJhbXIiOlsicHdkIl19.2nxnC9vy5WU-v-idsQNrDdg6pxI9NbaxbLe2drKuA3XF_pzRomx_oIaVZhKoQBoZ22rKmeDY28Vu_QQQVWpH_8c4DgbcWj5WSprl74cQwxvl_e2p2WvqY7QUyuHRy_qfXOaMAhd-S19GudisVgCNG1WIoXQXdar8s6jZLR0yTnU2NYH5zkEbM_0P6HRrj_KluDIwZ649uXN-lzqj35yYkbrCSLy6R_rs5GrLf_Wx87kUBDlfa3OXNNVAfHdabaUb2Lk2yZJIK19O2eMIJNOKFL9YnD4tZ5wICJMoQHaddjWNLCYT7sx7gF5Ar9WNWqaDy6q4lKDR6E0clriQAD0t3A'  // Aqui va el token
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
