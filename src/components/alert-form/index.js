import React, {forwardRef} from 'react';

const AlertForm = forwardRef(({value, onChange, onClick}, ref) => (
  <div className="form">
    <label className="form__label">
      <input
        className="form__input"
        type="text"
        name="alert"
        value={value}
        placeholder="Enter alert text"
        ref={ref}
        onChange={onChange}
      />
    </label>
    <button
      className="form__btn"
      disabled={!value}
      onClick={onClick}>
      Add alert
    </button>
  </div>
));

export default AlertForm;
