import React from 'react';
import star from '../assets/star.png';
import location from '../assets/placeholder.png';

const Item = ({ item }) => {
    const { image, name, price, discount, sold, rating, city, root } = item;

    return (
        <div className="item" style={{ backgroundColor: 'white', lineHeight: '25px', marginLeft: '10px', width: '185px', height: '350px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid #ccc', padding: '10px', margin: '10px', textDecoration: 'none' }}>
            <div className="item-image">
                <img src={image} alt={name} style={{ width: '190px', height: '190px', objectFit: 'contain' }} />
            </div>
            <span className="item-name" style={{ fontSize: '16px', textDecoration: 'none' }}>{name}</span>
            <div className="item-price" >
                <span className="original-price" style={{ fontSize: '20px', color: 'orange' }}>{price} đ</span>
                <span style={{ color: 'red', fontSize: '13px' }}>    (-{discount}%)</span>
            </div>
            <span className="discounted-price" style={{ textDecoration: 'line-through', color: 'gray', fontSize: '16px' }}>
                {root} đ
            </span>
            <div className="item-info">
                <span className="sold-quantity">
                    <img src={star} alt="" width={'15px'} height={'15px'} />
                    <span className="rating" style={{ fontSize: '14px' }}>     {rating} </span>
                    | Đã bán {sold}+
                </span>
            </div>
            <div className="item-info">
                <img src={location} alt="" width={'15px'} height={'15px'} />
                <span className="city" style={{ fontSize: '14px' }}>    {city}</span>

            </div>

        </div>
    );
};

export default Item;
