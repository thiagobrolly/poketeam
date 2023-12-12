import React, { useState } from 'react';

interface FilterProps {
  onSelectType: (type: string | undefined) => void;
}

export const Filter = ({ onSelectType }: FilterProps) => {
  const [selectedValue, setSelectedValue] = useState<string>('todos');

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedType = e.target.value;
    setSelectedValue(selectedType);
    onSelectType(selectedType !== 'todos' ? selectedType : undefined);
  };

  return (
    <div>
      <label htmlFor="type-filter">Filtrar por tipo:</label>
      <select
        id="type-filter"
        value={selectedValue}
        onChange={handleTypeChange}
      >
        <option value="todos">Todos</option>
        <option value="normal">Normal</option>
        <option value="fighting">Fighting</option>
        <option value="flying">Flying</option>
        <option value="poison">Poison</option>
        <option value="ground">Ground</option>
        <option value="rock">Rock</option>
        <option value="bug">Bug</option>
        <option value="ghost">Ghost</option>
        <option value="steel">Steel</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="grass">Grass</option>
        <option value="electric">Electric</option>
        <option value="psychic">Psychic</option>
        <option value="ice">Ice</option>
        <option value="dragon">Dragon</option>
        <option value="dark">Dark</option>
        <option value="fairy">Fairy</option>
        <option value="unknown">Unknown</option>
        <option value="shadow">Shadow</option>
      </select>
    </div>
  );
};
