import React from 'react';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            title: "",
            content: ""
        };
    }

    render() {
        return (
            <form>

                <p>Podaj tytuł:</p>
                <input
                    type='text'
                    name='title'
                />
                <p>Dodaj treść:</p>
                <input
                    type='text'
                    name='content'
                />

                <p>Podaj ID:</p>
                <input
                    type='text'
                    name='id'
                />
                <br/><br/>

                <button>Wyślij</button>
            </form>

        );
    }
}