import React from 'react';

export default function () {
    return (
        <form id="simple">
            <h2>Simple Form</h2>
            <label>
                Name: <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}