import React from 'react';

function Button({
    name,
    onClickFunction,
    isButtonDisabled
}) {
  return (
    <div>
        <button value={name}
        onClick={(e) => {
        onClickFunction(e);
        }}
        disabled={isButtonDisabled}
        className="btn btn-primary">
            {name}
        </button>
    </div>
  )
}

export default Button