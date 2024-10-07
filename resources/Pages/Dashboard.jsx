import { Head } from '@inertiajs/inertia-react';
import React from 'react';

const Welcome = (props) => {
    console.log(props);
    return (
    <>
        <Head title="Welcome" />
        <h1>Welcome</h1>
        <p>Welcome to your Inertia app! This is an example page showing how Inertia works.</p>
    </>
    );
};

export default Welcome;
