import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ card }) => {
    // console.log(card);
    const DeleteHandle = id => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }

                    })

            }
        });
    }
    return (
        <div className="card card-side bg-base-100 p-2 shadow-xl">
            <figure className='w-1/3'><img className='w-full rounded-lg' src={card.photo} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{card.name}</h2>
                <p>{card.details}</p>
                <div className="card-actions justify-end">
                    <Link to={`updateCoffee/${card._id}`}>
                        <button className="btn btn-primary">edit</button>
                    </Link>
                    <button className="btn btn-primary">see</button>
                    <button onClick={() => DeleteHandle(card._id)} className="btn btn-primary">delete</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;

CoffeeCard.propTypes = {
    card: PropTypes.object.isRequired,
}