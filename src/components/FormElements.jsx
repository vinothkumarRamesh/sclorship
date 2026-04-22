import React from 'react';

export const Input = ({ label, id, ...props }) => (
  <div className="form-group">
    {label && <label htmlFor={id} className="form-label">{label}</label>}
    <input id={id} className="form-input" {...props} />
  </div>
);

export const Select = ({ label, id, options, ...props }) => (
  <div className="form-group">
    {label && <label htmlFor={id} className="form-label">{label}</label>}
    <select id={id} className="form-input" {...props}>
      <option value="">Select option</option>
      {options.map((opt, i) => (
        <option key={i} value={opt.value || opt}>{opt.label || opt}</option>
      ))}
    </select>
  </div>
);

export const Checkbox = ({ label, id, ...props }) => (
  <div className="form-group" style={{ flexDirection: 'row', alignItems: 'center' }}>
    <input type="checkbox" id={id} {...props} style={{ width: '18px', height: '18px', accentColor: 'var(--primary-blue)' }} />
    {label && <label htmlFor={id} className="form-label" style={{ marginBottom: 0, cursor: 'pointer' }}>{label}</label>}
  </div>
);
