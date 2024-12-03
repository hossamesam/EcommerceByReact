import React from 'react'
import { withTranslation } from 'react-i18next';

function App({ t }) {

  return (
    <div>App
      <br />
      <span>/ {t('hi')} /</span>
    </div>
  )
}
export default withTranslation()(App);
