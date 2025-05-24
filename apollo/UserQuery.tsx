import { gql, useQuery } from '@apollo/client';
import User from 'components/User';

const USER_QUERY = gql`
    query GetUser($login: String!) {
        user(login: $login) {
            login
            company
            avatarUrl
        }
    }
`;

interface UserQueryProps {
    login: string;
}

export default function UserQuery({ login }: UserQueryProps) {
    const { loading, error, data } = useQuery(USER_QUERY, {
        variables: { login },
    });

    if (loading) return <div>Loading user...</div>;
    if (error) return <div>Error loading user: {error.message}</div>;
    if (!data || !data.user) return <div>User not found</div>;

    return <User user={data.user} />;
}
