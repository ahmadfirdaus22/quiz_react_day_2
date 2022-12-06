import React from "react";
import { useLocation } from "react-router-dom";
import Layout from "antd/es/layout/layout";
const { Header, Content, Footer } = Layout;

const PostPage = () => {
    const state = useLocation();

    return(
        <>
        <Layout style={{padding: '0px 50px', fontSize: '30px', height:'90vh'}}>
        <h1>POST - {state.state.id}</h1>
        <p>{state.state.content}</p>
        </Layout>
        </>
    );
}

export default PostPage;
