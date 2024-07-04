import React from 'react';
import ProtectedRoute from '../../components/protected-route';

const Reports = () => {
  return (
    <ProtectedRoute>
      <div>
        <h1>Reports Page</h1>
        <p>This content is only accessible to authorized users.</p>
      </div>
    </ProtectedRoute>
  );
};

export default Reports;