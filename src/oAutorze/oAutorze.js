import React from 'react';

export default class OAutorze extends React.Component {
    render() {

        const author = {name: "Imię", surname: "Nazwisko"};
        return (
            <div>
                Imięj: {author.name}, Nazwisko: {author.surname}
            </div>
        );

    }
}