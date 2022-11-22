const Post = () => {
    const Navigator = useNavigate();
    const [post, setPost] = useState({});
    const postData = (e) => {
        e.preventDefault();
        console.log(post);
        const formData = new FormData();
        formData.append("PostImage", post.PostImage);
        formData.append("name", post.name);
        formData.append("location", post.location);
        formData.append("description", post.description);
        const config = {
            headers: { "Content-Type": "multipart/form-data" },
        };
        const data = axios.post("https://insta-clone--backend.herokuapp.com/", formData, config).then(res => console.log(res));
        if (data.status === 200) {
            Navigator("/PostView")
        }
        else {
            Navigator("/PostView")
        }
    }
    return (
        <>
            <Header />
                      
            <div className='post-main'>
                <form className='form-box' onSubmit={postData} method="POST">
                    <div className='file-box'>
                        <input type="file" id='upload' onChange={(e) => setPost({ ...post, PostImage: e.target.files[0] })} name='PostImage' />
                    </div>
                    <div>
                        <input type="text" onChange={(e) => setPost({ ...post, name: e.target.value })} placeholder="Author" className='auther' name='name' />
                        <input type="text" onChange={(e) => setPost({ ...post, location: e.target.value })} placeholder="Location" className='location' name='location' />
                    </div>
                    <div>
                        <input type="text" onChange={(e) => setPost({ ...post, description: e.target.value })} placeholder="Description" className='des' name='description' />
                    </div>
                    <button id="btn-post" type="submit">Post</button>
                </form>
            </div>
        </>
    );
}
export default Post