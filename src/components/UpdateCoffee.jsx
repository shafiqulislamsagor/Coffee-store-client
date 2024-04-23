import { Link } from "react-router-dom";


const UpdateCoffee = () => {
    return (
        <div>

            <Link className='btn mr-3' to='/'>Home</Link>
            <Link className='btn mr-3' to='/addCoffee'>AddCard</Link>
            <Link className='btn mr-3' to='/updateCoffee'>Update</Link>
            Update Coffee .........
        </div>
    );
};

export default UpdateCoffee;