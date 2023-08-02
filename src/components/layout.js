import React from 'react';
import {Global, css} from '@emotion/core';
import {Helmet} from 'react-helmet';

import Header from './header';

const Layout = (props) => {
    return (
        <>
            <Global 
                styles = {css`
                    html {
                        font-size: 62.5%;

                    }
                    body {
                        font-size: 16px;
                        font-size: 1.6rem;
                    }
                 
                    h1, h2 {
                        font-family: 'Roboto', serif;
                    }
                    h1 {
                        font-family: 'PT Sans', sans-serif;
                    }
                `}
            />
            <Helmet>
                <title>3Allez-Consulting Tech</title>
                <meta name="description" content="3Allez - Consulting tech" />
                <meta name="keywords" content="Consulting, technology, business, 3Allez" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
            </Helmet>   
            
            <Header />
            {props.children}
        </>
    );
}
 
export default Layout;
