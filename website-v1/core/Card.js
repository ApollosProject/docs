const React = require('react');

const Card = ({ children, ...props }) => (
  <div className="card" {...props}>
    {children}
  </div>
);

module.exports = Card;
