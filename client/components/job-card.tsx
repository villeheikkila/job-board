import React from 'react';

interface Company {
    name: string;
}

interface Props {
    id?: string;
    company: Company;
    description: string;
}

const JobCard: React.FC<Props> = ({ company, description }): JSX.Element => (
    <div>
        {company?.name} {description}
    </div>
);

export default JobCard;
