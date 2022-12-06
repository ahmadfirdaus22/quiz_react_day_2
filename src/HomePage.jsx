import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Layout from "antd/es/layout/layout";
const { Header, Content, Footer } = Layout;


const HomePage = () => {
    const navigate = useNavigate();
    const navigateToPost = (postId, contentId) => {
        navigate(`post/${postId}`,
            { state: { id: postId, content: contentId } })
    }

    const post = [
        {
            id: 1,
            content: "Ini Post Ke 1"
        },
        {
            id: 2,
            content: "Ini Post Ke 2"
        },
        {
            id: 3,
            content: "Ini Post Ke 3"
        },
    ];

    return (
        <>
            <Layout style={{ padding: '0px 50px', height: '90vh' }}>
                <h1>Pilih Postingan Anda</h1>
                {post.map((postw) => {
                    return <div onClick={() => {
                        navigateToPost(postw.id, postw.content)
                    }} key={postw.id} style={{ border: '1px solid black', textAlign: 'center', marginBottom: '10px' }}>
                        <h1>Post ke {postw.id.toString()}</h1>
                    </div>
                })}
                <Outlet />
            </Layout>

        </>
    );
}

export default HomePage;