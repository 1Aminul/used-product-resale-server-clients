import React, { useContext} from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';


const BookingModal = ({items, booking, setBooking}) => {
    
    const {user}= useContext(AuthContext)
    const navigate = useNavigate()
    
    let booked = {};
    if(booking){
         booked = items.find(item=> item.id === booking)
    }

    const bookingModalForm = (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const itemName = form.item.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const booking = {
            name, 
            email, 
            itemName, 
            price, 
            phone, 
            location,
            image: booked.image1,
        }
        console.log(booking);
        fetch("https://used-products-resale-server-1aminul.vercel.app/bookings",{
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            if(data.acknowledged){
                toast.success('product is booked')
                setBooking(null)
                navigate('/dashboard')
            }
        })



    }



    return (
        <div>
            <input type="checkbox" id="used-product-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="used-product-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                   <div className='my-4'>
                   <form onSubmit={bookingModalForm}>
                        
                        <input  name='name' defaultValue={user?.displayName} disabled  type='text'  className='input input-bordered w-full mt-2 text-dark' /><br/>
                        <input name='email' defaultValue={user?.email} disabled type='email' className='input input-bordered w-full mt-2 text-dark' /><br/>
                        <input  name='item' defaultValue={booked.name} disabled type='text'  className='input input-bordered w-full mt-2 text-dark' /><br/>
                        <input name='price' defaultValue={booked.description.resaleprice} disabled type='text'  className='input input-bordered w-full mt-2 text-dark' /><br/>
                        <input name='phone' type='text'  className='input input-bordered w-full mt-2 text-dark' placeholder='Phone Number' /><br/>
                        <input name='location' type='text'  className='input input-bordered w-full mt-2 text-dark' placeholder='Location' /><br/>
                        <input type="submit" value='Submit' className='w-full mt-2 text-base-100 text-xl bg-primary rounded py-3' />
                    </form>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;