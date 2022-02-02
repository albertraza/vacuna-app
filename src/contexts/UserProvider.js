import useGetRequest from "../hooks/useGetRequest";
import UserContext from "./UserContext"

export default function UserProvider ( { children } ) {
    const { data } = useGetRequest( 'https://api.github.com/users/albertraza', false );

    return (
        <UserContext.Provider value={ { user: data } }>
            { children }
        </UserContext.Provider>
    );
}
