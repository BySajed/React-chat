import "./detail.css";

const Detail = () => {
    return (
        <div className='detail'>
            <div className="user">
                <img src="./avatar.png" alt="avatar" />
                <h2>Jane Doe</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="info">
                <div className="options">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="options">
                    <div className="title">
                        <span>Privacy % help</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="options">
                    <div className="title">
                        <span>Shared photos</span>
                        <img src="./arrowDown.png" alt="" />
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" alt="" />
                                <span>photo_2024_2.png</span>
                            </div>
                        </div>
                        <img src="./download.png" alt="" />
                    </div>
                </div>
                <div className="options">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <button>Block User</button>
            </div>
        </div>
    );
    }

export default Detail;