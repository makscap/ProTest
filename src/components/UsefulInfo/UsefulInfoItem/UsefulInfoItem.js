import React from 'react';

function UsefulInfoItem({ name, ref }) {
  return (
    <>
      <a href={ref}>{name}</a>
    </>
  );
}
export default UsefulInfoItem;
