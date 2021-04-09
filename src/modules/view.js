const View = (() => {
  const renderHeader = () => {
    const content = document.getElementById('content');
    const header = document.createElement('header');
    header.textContent = 'Weather';

    content.appendChild(header);
  };

  const renderBody = () => {
    const content = document.getElementById('content');
    const body = document.createElement('div');
    body.id = 'body';

    const info = document.createElement('div');
    info.id = 'info';

    body.appendChild(info);
    content.appendChild(body);
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

  const renderWeather = (weather) => {
    const info = document.getElementById('info');
    info.textContent = JSON.stringify(weather);
  };

  return {
    renderDocument,
    renderWeather,
  };
})();

export { View };
