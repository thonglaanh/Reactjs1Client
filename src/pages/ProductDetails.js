import React from 'react';
import sp1 from '../assets/sp2.jpg';
import '../styles/Details.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import star from '../assets/star.png';
import location from '../assets/placeholder.png';
import img from '../assets/wtf.png'
import voicher from '../assets/voicher.jpg'

const ProductDetails = () => {
    const data = [
        {
            id: 1,
            image: sp1,
            name: 'Apple iPhone 13 128GB VN/A- Hàng Chính Hãng',
            price: '16.490.000',
            discount: 20,
            sold: 1000,
            rating: 4,
            city: 'Hồ Chí Minh',
            root: '17.000.000',
            description: 'Máy mới 100% , chính hãng Apple Việt Nam.CellphoneS hiện là đại lý bán lẻ uỷ quyền iPhone chính hãng VN/ A của Apple Việt Nam',
        },
    ];

    const item = data[0];

    return (
        <div>
            <Header />
            <p style={{ textAlign: 'left', fontSize: '18px', color: 'blue', margin: '10px' }}>
                Trang chủ &gt; Sản phẩm &gt; Điện thoại &gt; Apple &gt; iPhone &gt; iPhone 13
            </p>

            <div className="details-container" style={{ lineHeight: '40px' }}>
                <div className="image-container">
                    <img src={item.image} alt={item.name} className="product-image" />
                </div>

                <div className="info-container">
                    <div><img src={img} alt="" style={{ width: '70px', height: '20px' }} /></div>
                    <span className="item-name" style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '10px' }}>
                        {item.name}
                    </span>
                    <div className="item-price">
                        <span className="original-price" style={{ fontSize: '25px', color: 'orange', marginRight: '10px' }}>
                            {item.price} đ
                        </span>
                        <span style={{ color: 'red', fontSize: '20px' }}>-{item.discount}%</span>
                    </div>
                    <span className="discounted-price" style={{ textDecoration: 'line-through', color: 'gray', fontSize: '20px' }}>
                        {item.root} đ
                    </span>
                    <div className="item-info">
                        <span className="sold-quantity">
                            <img src={star} alt="" width={'15px'} height={'15px'} style={{ marginRight: '5px' }} />
                            <span className="rating" style={{ fontSize: '20px', marginRight: '5px' }}>
                                {item.rating}
                            </span>
                            | Đã bán {item.sold} +
                        </span>
                    </div>
                    <div className="item-info">
                        <img src={location} alt="" width={'15px'} height={'15px'} style={{ marginRight: '5px' }} />
                        <span className="city" style={{ fontSize: '20px' }}>
                            {item.city}
                        </span>
                    </div>
                    <div className="item-info" style={{ marginTop: '10px' }}>
                        <span className="description" style={{ fontSize: '18px', color: 'gray' }}>
                            {item.description}
                        </span>
                    </div>
                    <div className="item-info">
                        <img src={voicher} alt="" style={{ width: '100px', height: '60px' }} />
                    </div>
                    <div className="button-container">
                        <button className="add-to-cart-button">Thêm vào giỏ hàng</button>
                        <button className="buy-now-button">Mua ngay</button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ProductDetails;
