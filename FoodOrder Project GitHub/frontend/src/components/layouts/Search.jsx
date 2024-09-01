import React from 'react'
import { FcSearch } from "react-icons/fc";

export default function Search() {
    return (
        <form action="">
            <div className='input-group'>
                <input
                    type="text"
                    id="search_field"
                    placeholder="Search Your Favourite Restaurant..."
                    className="form-control" />

                <div className="input-group-append">
                    <button id="search_btn" className='btn'>
                        <FcSearch />
                    </button>
                </div>
            </div>
        </form>
    )
}
