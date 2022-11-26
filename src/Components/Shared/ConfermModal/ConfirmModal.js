import React from 'react';

const ConfirmModal = ({ handlerDeleteBuyer, usersinfo }) => {

    return (
        <div>
            {
                usersinfo.map(user =>
                    <div key={user._id}>
                        <input type="checkbox" id="delete-modal" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box">
                                <h3 className="font-extrabold text-lg">Are you sure to delete?</h3>
                                <p className="py-4"></p>
                                <div className="modal-action">
                                    <label htmlFor="delete-modal" onClick={()=> handlerDeleteBuyer(user._id)} className='btn btn-error text-base-100'>Delete</label>
                                    <label htmlFor="delete-modal" className="btn btn-outline">Cancel</label>
                                </div>
                            </div>
                        </div>
                    </div>

                )
            }
        </div>
    );
};

export default ConfirmModal;