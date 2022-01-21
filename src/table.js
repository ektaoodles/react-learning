import React from 'react';

export default class Table extends React.Component {

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>S No</th>
                        <th>name</th>
                        <th>last name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.user.map((el, i) =>
                            <tr key={i}>
                                <td key={i+1}>{el.id}</td>
                                <td key={i+2}>{el.fname}</td>
                                <td key={i+3}>{el.lname}</td>
                            </tr>
                        )}
                </tbody>
            </table>
        );
    }
}