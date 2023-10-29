import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';
import sp1 from '../assets/sp1.webp';
import '../styles/ItemList.css';
import label from '../assets/Label_Introduction.png';

const ItemList = () => {
    const data = [
        {
            id: 1,
            image: sp1,
            name: 'Apple iphone 13',
            price: '16.490.000',
            discount: 20,
            sold: 1000,
            rating: 4,
            city: 'Hồ Chí Minh',
            root: '17.000.000'
        },
        {
            id: 2,
            image: sp1,
            name: 'Product 2',
            price: '1.050.000',
            discount: 10,
            sold: 500,
            rating: 3.5,
            city: 'Hồ Chí Minh',
            root: '2.000.000'
        },
        {
            id: 2,
            image: sp1,
            name: 'Product 2',
            price: '1.050.000',
            discount: 10,
            sold: 500,
            rating: 3.5,
            city: 'Hồ Chí Minh',
            root: '2.000.000'
        },
        {
            id: 2,
            image: sp1,
            name: 'Product 2',
            price: '1.050.000',
            discount: 10,
            sold: 500,
            rating: 3.5,
            city: 'Hồ Chí Minh',
            root: '2.000.000'
        },
        {
            id: 2,
            image: sp1,
            name: 'Product 2',
            price: '1.050.000',
            discount: 10,
            sold: 500,
            rating: 3.5,
            city: 'Hồ Chí Minh',
            root: '2.000.000'
        },
        {
            id: 2,
            image: sp1,
            name: 'Product 2',
            price: '1.050.000',
            discount: 10,
            sold: 500,
            rating: 3.5,
            city: 'Hồ Chí Minh',
            root: '2.000.000'
        },
        {
            id: 2,
            image: sp1,
            name: 'Product 2',
            price: '1.050.000',
            discount: 10,
            sold: 500,
            rating: 3.5,
            city: 'Hồ Chí Minh',
            root: '2.000.000'
        },
        {
            id: 2,
            image: sp1,
            name: 'Product 2',
            price: '1.050.000',
            discount: 10,
            sold: 500,
            rating: 3.5,
            city: 'Hồ Chí Minh',
            root: '2.000.000'
        },
        {
            id: 2,
            image: sp1,
            name: 'Product 2',
            price: '1.050.000',
            discount: 10,
            sold: 500,
            rating: 3.5,
            city: 'Hồ Chí Minh',
            root: '2.000.000'
        },
        {
            id: 2,
            image: sp1,
            name: 'Product 2',
            price: '1.050.000',
            discount: 10,
            sold: 500,
            rating: 3.5,
            city: 'Hồ Chí Minh',
            root: '2.000.000'
        },
        {
            id: 2,
            image: sp1,
            name: 'Product 2',
            price: '1.050.000',
            discount: 10,
            sold: 500,
            rating: 3.5,
            city: 'Hồ Chí Minh',
            root: '2.000.000'
        },
        {
            id: 2,
            image: sp1,
            name: 'Product 2',
            price: '1.050.000',
            discount: 10,
            sold: 500,
            rating: 3.5,
            city: 'Hồ Chí Minh',
            root: '2.000.000'
        },
        {
            id: 2,
            image: sp1,
            name: 'Product 2',
            price: '1.050.000',
            discount: 10,
            sold: 500,
            rating: 3.5,
            city: 'Hồ Chí Minh',
            root: '2.000.000'
        },
        {
            id: 2,
            image: sp1,
            name: 'Product 2',
            price: '1.050.000',
            discount: 10,
            sold: 500,
            rating: 3.5,
            city: 'Hồ Chí Minh',
            root: '2.000.000'
        },
        {
            id: 2,
            image: sp1,
            name: 'Product 2',
            price: '1.050.000',
            discount: 10,
            sold: 500,
            rating: 3.5,
            city: 'Hồ Chí Minh',
            root: '2.000.000'
        },
        // Add more items here
    ];
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div>
            <img src={label} alt="" style={{ height: '30px', marginLeft: '550px' }} />
            <div className="item-grid">
                {data.map((item, index) => (
                    <Link to={`/detail/${item.id}`} key={index} className="link" style={{ textDecoration: 'none', color: 'inherit', }}>
                        <Item item={item} />
                    </Link>
                ))}

            </div>

            <div className="pagination">
                <button
                    className={`pagination-btn ${currentPage === 1 ? 'disabled' : ''}`}
                    onClick={goToPreviousPage}
                    disabled={currentPage === 1}
                >
                    &lt; Previous
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        className={`pagination-btn ${currentPage === index + 1 ? 'active' : ''}`}
                        onClick={() => setCurrentPage(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    className={`pagination-btn ${currentPage === totalPages ? 'disabled' : ''}`}
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                >
                    Next &gt;
                </button>
            </div>
        </div>
    );
};

export default ItemList;
