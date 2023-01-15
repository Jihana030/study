import React from "react";
import { useState } from "react";

export default function AppForm(){
    //input은 사용자가 직접 입력하면서 수정하기 때문에 조절할 수 없는 컴포넌트
    //이걸 조절하기 위한 작업들.
    //value가 상태값을 받아오고 이벤트가 상태값을 조절한다.
    // const [name, setName]= useState('');
    // const [email, setEmail]= useState('');
    const [form, setForm] = useState({name: '', email: ''});
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const handleChange = ()=>{
        const {name, value}=e.target;
        setForm({...form, [name]: value});
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">이름: </label>
            <input 
                type="text" 
                id="name" 
                name="name"
                value={form.name}
                onChange={handleChange}
            />
            <label htmlFor="email">이메일: </label>
            <input 
                type="text" 
                id="email" 
                name="email"
                value={form.email}
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    )
}