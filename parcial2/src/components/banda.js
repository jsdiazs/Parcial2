import React from "react";
import {FormattedDate} from 'react-intl';

const Banda = (props) => {
  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.country}</td>
      <td>{props.offer.city}</td>
      <td>{props.offer.genre}</td>
      <td>
        <FormattedDate
          value={new Date(props.offer.foundation_year)}
          year='numeric'
        />
      </td>
    </tr>
  );
};

export default Banda;