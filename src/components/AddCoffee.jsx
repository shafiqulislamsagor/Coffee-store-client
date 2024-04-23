import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const AddCoffee = () => {
    const fromHandle = event => {
        event.preventDefault()
        const target = event.target;
        const name = target.Name.value;
        const supplier = target.Supplier.value;
        const taste = target.Taste.value;
        const category = target.Category.value;
        const details = target.Details.value;
        const photo = target.Photo.value;

        const newCoffee = { name, supplier, taste, category, details, photo };
        console.log(newCoffee);

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire({
                    title: 'successfully ',
                    text: 'your iter is added',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                })
            })


        target.reset()
    }
    return (
        <div className="w-4/5 mx-auto mt-6">

            <Link className='btn mr-3' to='/'>Home</Link>
            <Link className='btn mr-3' to='/addCoffee'>AddCard</Link>
            <Link className='btn mr-3' to='/updateCoffee'>Update</Link>
            <h2 className="text-3xl font-semibold font-mono">Added Coffee ... !</h2>
            <form className="space-y-4" onSubmit={fromHandle}>
                <div className="flex gap-4">
                    <div className="md:w-1/2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <label className="input-group">
                                <input required type="text" name="Name" placeholder="Coffee Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Chef</span>
                            </label>
                            <label className="input-group">
                                <input required type="text" name="Chef" placeholder="Chef Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="md:w-1/2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <label className="input-group">
                                <input required type="text" name="Supplier" placeholder="Supplier Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <label className="input-group">
                                <input required type="text" name="Taste" placeholder="Coffee Taste" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="md:w-1/2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label className="input-group">
                                <input required type="text" name="Category" placeholder="Coffee Category" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <label className="input-group">
                                <input required type="text" name="Details" placeholder="Coffee Details" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <label className="input-group">
                                <input required type="text" name="Photo" placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                </div>
                <input type="submit" value="Added" className="btn btn-block btn-active" />
            </form>
        </div>
    );
};

export default AddCoffee;