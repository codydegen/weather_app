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

    const form = document.createElement('form');
    form.id = 'form';

    const input = document.createElement('input');
    input.id = 'input';
    input.type = 'text';
    input.placeholder = 'Enter City';

    const submit = document.createElement('submit');
    submit.id = 'submit';
    submit.textContent = 'Submit';
    submit.type = 'submit';

    form.appendChild(input);
    form.appendChild(submit);
    body.appendChild(info);
    body.appendChild(form);
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
    if (weather.valid) {
      info.textContent = JSON.stringify(weather);
    } else {
      info.textContent = 'City Not Found';
    }
  };

  return {
    renderDocument,
    renderWeather,
  };
})();

export { View };
