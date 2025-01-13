import { LoadingInfo, LoadingShopingPage, SuccessSumit } from '@components/common/loading';
import { LucideAArrowDown } from 'lucide-react';
import React from 'react'
import { withTranslation } from 'react-i18next';
import { Toaster, toast } from 'sonner';

function App({ t }) {

  return (
    <div>
      {/* App */}
      {/* <Toaster closeButton richColors /> */}
      {/* <Toaster
        duration={5000}
        gap={35}
        richColors
        closeButton
        toastOptions={{
          unstyled: true,
          style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",
            width: "35vw",
            height: "10vh",
          },
        }}
      /> */}
      {/* <button onClick={() => toast.success('good job')}>test</button> */}

      <LoadingInfo status='idle' />

    </div>
  )
}
export default withTranslation()(App);
