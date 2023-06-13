import { useState } from "react";
import axios from "axios";
import './Header.css'
function Contact() {
    const [showForm, setShowForm] = useState(false);
    const [fullName, setFullName] = useState("");
    const [content, setContent] = useState("");

    const handleClick = () => {
        setShowForm(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fullName, content);

        axios.post('http://localhost:3000/forms', {
            fullName: fullName,
            content: content
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        setFullName("");
        setContent("");
        setShowForm(false);
    };

    return (
        <>
            {showForm && (
                <div className="form-contact">
                    <form onSubmit={handleSubmit} className="form">
                        <h2>Contact</h2>
                        <input className="form-control input"
                            type="text"
                            placeholder="Họ tên"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                        <textarea className="form-control textarea"
                            placeholder="Nội dung"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        ></textarea>
                        <button type="submit" className="submit">Gửi</button>
                    </form>
                </div>
            )}
        </>
    )
}
export default Contact;