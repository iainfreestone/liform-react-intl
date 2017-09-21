import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { Provider } from 'react-redux';
import { IntlProvider, intlReducer, updateIntl } from 'react-intl-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { locales } from './configureLocale';
import Liform from 'liform-react';

const reducer = combineReducers({
  form: formReducer,
  intl: intlReducer,
});

const initialState = {
  intl: locales.en,
};

const store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(
  reducer,
  initialState
);

const showResults = values => {
  window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
};

const changeLang = loc => store.dispatch(updateIntl(loc));

const addLang = () => {
  console.log('ADD LANG');
};

const MyForm = ({ intl }) => {
  const formatMessage = translationObj => intl.formatMessage(translationObj);

  var schema = {
    title: 'my form',
    properties: {
      name: {
        type: 'string',
        title: formatMessage({
          id: 'app.model',
          defaultMessage: 'Model',
        }),
        default: formatMessage({
          id: 'app.placeholder',
          defaultMessage: 'Model',
        }),
      },
      description: {
        type: 'string',
        title: formatMessage({
          id: 'app.description',
          defaultMessage: 'Description',
        }),
        widget: 'textarea',
      },
    },
    required: ['name'],
  };

  return (
    <div>
      <Liform schema={schema} onSubmit={showResults} />
    </div>
  );
};

const InjectedMyForm = injectIntl(MyForm);

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider>
      <div>
        <button onClick={() => changeLang(locales.en)}>English</button>
        <button onClick={() => changeLang(locales.fr)}>French</button>
        <button onClick={() => changeLang(locales.de)}>German</button>
        <button onClick={() => addLang()}>ADD LANG</button>
        <hr />
        <h1>
          <FormattedMessage id="app.greeting" defaultMessage="Hello" />
        </h1>
        <InjectedMyForm />
      </div>
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
);
