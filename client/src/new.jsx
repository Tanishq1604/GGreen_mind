import Sidebar from "./sidebar"
export default function New(){
    return(
        <div className="New-page">
        <Sidebar/>
        <div className="new-post">
            <h1>New Post</h1>
            <input type="text" id="text" placeholder="Enter your title here"/>
        <textarea name="caption" id="caption" cols="30" rows="10" placeholder="Enter your description here"></textarea>
        <input type="file" accept="image/jpeg, image/png, image/jpg" />
        <button className="upload-btn">Upload</button>
        </div>
        </div>
        
    )
}