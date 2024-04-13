import { Link } from "react-router-dom";

function changeUrl(){
    let input_file = document.getElementById("side-bar-profile-photo");
    let inputFilesIimg = document.getElementById("input-files-img");
    inputFilesIimg.src = URL.createObjectURL(input_file.files[0]);
}



export default function Sidebar(){
    
    
    return(
        <div className="side-bar">
            <div className="side-bar-profile">
            <label htmlFor="side-bar-profile-photo">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-6KqC6o3QC_Cqr9khlI-HDHVJPnWAViS8hGynHYIulA&s" alt="" id="input-files-img" onChange={changeUrl}/>
                        </label>
                <input type="file" accept="image/jpeg, image/png, image/jpg" id="side-bar-profile-photo" />
                <div className="side-bar-name">NIJSO</div>
            </div>
            <div className="side-bar-options">
            <Link to="/dashboard" className="side-bar-btn"><i class="fa-solid fa-house"></i><div>Dashboard</div></Link>
            <Link to="/explore" className="side-bar-btn"><i class="fa-regular fa-compass"></i><div>Explore</div></Link>
            <Link to="/trash" className="side-bar-btn"><i class="fa-solid fa-trash"></i><div>Trashout</div></Link>
            <Link to="/trash" className="side-bar-btn"><i class="fa-solid fa-gear"></i><div>Settings</div></Link>
               
            </div>

            <Link to="/upload" className="side-bar-upload-btn"><div>Upload</div></Link>
        </div>
    )
}