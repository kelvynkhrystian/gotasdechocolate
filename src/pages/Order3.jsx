import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { OrderStyles } from '../styles/orderStyles';

const flavors = [
  {
    id: 'brigadero',
    name: 'Brigadero',
    image: 'https://github.com/kelvynkhrystian/gotasdechocolate/blob/main/src/images/brigadeiro.png?raw=true',
  },
  {
    id: 'ferreiro',
    name: 'Ferrero Rocher',
    image: 'data:image/jpeg;base64,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',
  },
  {
    id: 'ninho',
    name: 'Ninho com Nutela',
    image: 'https://github.com/kelvynkhrystian/gotasdechocolate/blob/main/src/images/ninhoComNutella.png?raw=true',
  },
  {
    id: 'mouse',
    name: 'Maracujá',
    image: 'https://github.com/kelvynkhrystian/gotasdechocolate/blob/main/src/images/maracuja.png?raw=true',
  },
];

function Order3() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <OrderStyles>
      <h1>Escolha o recheio!</h1>
      <article>
        {flavors.map((option) => (
          <label key={option.id} htmlFor={option.id} className={selectedOption === option ? 'selected' : ''}>
            <input type="radio" id={option.id} value={option.id} checked={selectedOption === option} onChange={() => handleOptionClick(option)} />
            <img src={option.image} alt={`Option ${option.name}`} />
            <div>
              <p>{option.name}</p>
            </div>
          </label>
        ))}
      </article>

      <article>
        <Link to="/order2">
          <button>Anterior</button>
        </Link>
        <Link to="/order4">
          <button disabled={!selectedOption}>Próximo</button>
        </Link>
      </article>
    </OrderStyles>
  );
}

export default Order3;
