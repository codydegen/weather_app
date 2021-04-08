const View = (() => {
  const renderHeader = () => {
    const content = document.getElementById('content');
    const header = document.createElement('header');
    header.textContent = 'Weather';

    content.appendChild(header);
  };

  const renderBody = () => {
    const content = document.getElementById('content');
    const info = document.createElement('div');
    info.id = 'info';

    content.appendChild(info);
  };

  const renderFooter = () => {
    const content = document.getElementById('content');
    const footer = document.createElement('footer');
    footer.textContent = 'Weather';

    content.appendChild(footer);
  };

  const renderDocument = () => {
    renderHeader();
    renderBody();
    renderFooter();
  };

  return {
    renderDocument,
  };
})();

export { View };
