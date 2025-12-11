import React from 'react'
import { use } from 'react';

const Localstorage = () => {

    // localStorage.setItem('user','farman')

    //    const user= localStorage.getItem('user');
    //    const age= localStorage.getItem('age');

    //     console.log(user,age);

    // localStorage.removeItem('age')

    const users = {
        user: 'farman',
        age: 18,
        from: 'nadiad'
    }

    localStorage.setItem('users', JSON.stringify(users))

    return (
        <div>
            <button>click</button>
        </div>
    )
}

export default Localstorage
