import React from 'react';
import Card from './card';

function Outputs() {
    return (
        <div className="grid grid-cols-3 gap-4 p-4">
        <Card title="Card Title"
        description="This is a description of the card."
        image="https://i.pinimg.com/474x/e5/9a/77/e59a77db5ce13395ffe21da2709f6a98.jpg"/>
        <Card title="Card Title"
        description="This is a description of the card."
        image="https://i.pinimg.com/474x/e5/9a/77/e59a77db5ce13395ffe21da2709f6a98.jpg"/>
        <Card title="Card Title"
        description="This is a description of the card."
        image="https://i.pinimg.com/474x/e5/9a/77/e59a77db5ce13395ffe21da2709f6a98.jpg"/>
        </div>
    
    );
}
export default Outputs;