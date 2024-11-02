import React, { useEffect, useState } from 'react';
const ResourceList = () => {
  const [resources, setResources] = useState([]);
  useEffect(() => {
    fetch('/resources')
      .then(response => response.json())
      .then(data => setResources(data))
      .catch(err => console.error('Error fetching resources:',
err));
  }, []);
  return (
    <div>
      <h2>Kitchen Resources</h2>
      <ul>
        {resources.map(resource => (
          <li key={resource._id}>
            {resource.name} - {resource.type} - {resource.status}
          </li>
))} </ul>
</div> );
};
export default ResourceList;