import react from 'react';
import { Layout, Page, TextStyle } from '@shopify/polaris';

const Index = () => {
    return(
        <Page>
            <Layout>
            {/* <p>Sample app using React and Next.js</p> */}
                <TextStyle variation="positive">
                    Sample app using React and Next.js
                </TextStyle>
             </Layout>
        </Page>
    )
}

export default Index;