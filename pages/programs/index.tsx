import React from 'react';
import Chrome from '../../components/Chrome';

interface Props {}

const Programs: React.FC<Props> = ({}) => {
  return (
    <Chrome page="/programs">
      <div className="flex justify-center">programs</div>
    </Chrome>
  );
};

export default Programs;
