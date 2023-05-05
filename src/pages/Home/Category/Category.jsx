import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';
import useTitle from '../../../hooks/useTitle';

const Category = () => {
    const {id} = useParams();
    const categoriesNews = useLoaderData();
    useTitle('Category');

    return (
        <div>
            {id && <h4 className='fw-bold mb-4'>This Category News: {categoriesNews.length}</h4>}
            {
                categoriesNews.map(news => <NewsCard
                key={news._id}
                news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;