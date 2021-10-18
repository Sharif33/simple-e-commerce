import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import Rating from 'react-rating';
const Product = (props) => {
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    // console.log(props?.product?.features);
    const { name, img, seller, price, stock, star } = props.product;
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="p-padding">
                <h2 className="p-name">{name} </h2>
                <p><small>by: {seller}</small></p>
                <h4>Price: $ {price}</h4>
                <p><small>Only {stock} left in stock - order soon</small></p>

                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating>
                <br />

                <button
                    onClick={() => props.handleAddCart(props.product)}
                    className="btn-add">{element} Add to cart</button>
            </div>
        </div>
    );
};

export default Product;