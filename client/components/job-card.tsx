import React, { useState } from 'react';
const ReactMarkdown = require('react-markdown');
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
interface Company {
    name: string;
}

interface Props {
    id?: string;
    company: Company;
    synopsis: string;
    description: string;
}

const Content: React.FC<{ description: string }> = ({ description }) => {
    return (
        <motion.div animate>
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <ReactMarkdown className="markdown">
                    {description}
                </ReactMarkdown>
            </motion.span>
        </motion.div>
    );
};

const JobCard: React.FC<Props> = ({
    company,
    description,
    synopsis,
}): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            className="max-w-5xl min-w-5xl rounded overflow-hidden shadow-lg p-8 bg-gray-100"
            animate
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="font-bold text-xl mb-2"> {company?.name}</div>

            {/* <div className="px-6 py-4">
                {['moi', 'hei', 'hoi'].map((e) => (
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        {e}
                    </span>
                ))}
            </div> */}
            <AnimateSharedLayout>
                <AnimatePresence>
                    {isOpen ? (
                        <Content description={description} />
                    ) : (
                        <motion.span
                            className="mb-2"
                            animate={{ x: 100 }}
                            transition={{ ease: 'easeOut', duration: 2 }}
                        >
                            {synopsis}
                        </motion.span>
                    )}
                </AnimatePresence>
            </AnimateSharedLayout>
        </motion.div>
    );
};

export default JobCard;
