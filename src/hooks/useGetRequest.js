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
                const response = await axios.get( url )
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
