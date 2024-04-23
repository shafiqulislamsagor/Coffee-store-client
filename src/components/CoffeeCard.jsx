import PropTypes from 'prop-types';

const CoffeeCard = ({card}) => {
    // console.log(card);
    return (
        <div className="card card-side bg-base-100 p-2 shadow-xl">
            <figure className='w-1/3'><img className='w-full rounded-lg' src={card.photo} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{card.name}</h2>
                <p>{card.details}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">edit</button>
                    <button className="btn btn-primary">see</button>
                    <button className="btn btn-primary">delete</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;

CoffeeCard.propTypes = {
    card: PropTypes.array.isRequired,
}