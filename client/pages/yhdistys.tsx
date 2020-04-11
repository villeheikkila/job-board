import { NextPage } from 'next';
import { Layout } from '../components';
import withApollo from '../apollo/apollo';
import { useQuery, gql } from '@apollo/client';

const QUERY = gql`
    {
        jobBoards {
            id
            description
            company {
                name
            }
        }
    }
`;

const Index: NextPage = () => {
    const { loading, data } = useQuery(QUERY);

    if (loading || !data) {
        return <h1>loading...</h1>;
    }

    return (
        <Layout title="TKO-äly">
            <h1>Placeholder</h1>
        </Layout>
    );
};

export default withApollo(Index);
