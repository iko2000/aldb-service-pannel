import React from 'react';
import ProtectedRoute from '../../components/protected-route';

const Performance = () => {
  return (
    <ProtectedRoute>
      <div>
        <h1>Performance Page</h1>
        <p>This content is only accessible to authorized users.</p>
      </div>
    </ProtectedRoute>
  );
};

export default Performance;