import { NextPage } from 'next';
import { Layout, JobCard } from '../components';
import { useQuery, gql } from '@apollo/client';
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion';

const JOBS_QUERY = gql`
    {
        jobs {
            id
            title
            description
            synopsis
            company {
                name
            }
        }
    }
`;

interface Job {
    id: string;
    description: string;
    synopsis: string;
    title: string;
    company: {
        name: string;
    };
}

const JobBoard: NextPage = () => {
    const { data, error } = useQuery(JOBS_QUERY);
    console.log('error: ', error);
    console.log('data: ', data);

    return (
        <Layout title="TKO-äly">
            <AnimateSharedLayout type="crossfade">
                <AnimatePresence>
                    <div className="">
                        {data?.jobs.map(({ id, ...rest }: Job) => (
                            <div className="p-2">
                                <JobCard key={id} {...rest} />
                            </div>
                        )) || <h1>Loading</h1>}
                    </div>
                </AnimatePresence>
            </AnimateSharedLayout>
        </Layout>
    );
};

export default JobBoard;
