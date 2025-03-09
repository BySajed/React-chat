import "./chat.css";
import { useState } from "react";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
const [open, setOpen] = useState(false);
const [text, setText] = useState("");

const handleEmoji = e => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
}

    return (
        <div className='chat'>
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>Jane Doe</span>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="icons">
                        <img src="./phone.png" alt="" />
                        <img src="./video.png" alt="" />
                        <img src="./info.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="center">
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab cum, alias quam iusto, 
                            iure deserunt voluptatem molestias dicta facere eius dolore delectus cupiditate? 
                            Delectus doloremque nemo doloribus voluptate numquam incidunt.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab cum, alias quam iusto, 
                            iure deserunt voluptatem molestias dicta facere eius dolore delectus cupiditate? 
                            Delectus doloremque nemo doloribus voluptate numquam incidunt.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab cum, alias quam iusto, 
                            iure deserunt voluptatem molestias dicta facere eius dolore delectus cupiditate? 
                            Delectus doloremque nemo doloribus voluptate numquam incidunt.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab cum, alias quam iusto, 
                            iure deserunt voluptatem molestias dicta facere eius dolore delectus cupiditate? 
                            Delectus doloremque nemo doloribus voluptate numquam incidunt.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <img src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" alt="" />
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab cum, alias quam iusto, 
                            iure deserunt voluptatem molestias dicta facere eius dolore delectus cupiditate? 
                            Delectus doloremque nemo doloribus voluptate numquam incidunt.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <img src="https://static.vecteezy.com/ti/photos-gratuite/t2/36324708-ai-genere-image-de-une-tigre-en-marchant-dans-le-foret-photo.jpg" alt="" />
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab cum, alias quam iusto, 
                            iure deserunt voluptatem molestias dicta facere eius dolore delectus cupiditate? 
                            Delectus doloremque nemo doloribus voluptate numquam incidunt.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt="" />
                    <img src="./camera.png" alt="" />
                    <img src="./mic.png" alt="" />
                </div>
                <input type="text" placeholder="Type a message..." 
                value={text}
                onChange={e=>setText(e.target.value)}/>
                <div className="emoji">
                    <img src="./emoji.png" alt="" 
                    onClick={() => setOpen((prev) => !prev)}/>
                    <div className="picker">
                    <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
                    </div>
                </div>
                <button className="sendButton">Send</button>
            </div>
        </div>
    );
    }

export default Chat