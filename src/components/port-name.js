import React from 'react';
import { useLocation } from 'react-router-dom';


function PortName() {

function MyComponent() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div>
      {currentPath === '/portfolio/' && (
        <div className="websites-content">
          <h1>Welcome to the Dashboard!</h1>
        </div>
      )}
      {currentPath === '/settings' && (
        <div className="settings-content">
          <h2>Settings Page</h2>
        </div>
      )}
      {/* Other content */}
    </div>
  );
}

}
export default PortName;
