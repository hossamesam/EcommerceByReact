import CreateProductUI from '@components/eCommerce/CreateProductUI/CreateProductUI'
import React, { Fragment } from 'react'
import { withTranslation } from 'react-i18next'

function CreateProduct({ t }: any) {
    return (
        <div>
            
            <CreateProductUI />

        </div>
    )
}

export default withTranslation()(CreateProduct)