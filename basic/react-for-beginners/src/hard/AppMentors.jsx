import React, {useReducer} from "react";
import personReducer from "./reducer/person-reducer";

export default function AppMentor(){
    // const[person, setPerson] = useState(initialPerson);
    const [person, dispatch] = useReducer(personReducer, initialPerson);
    const handleUpdate = () =>{ 
        const prev = prompt(`누구의 이름으로 바꾸고 싶은가요?`);
        const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
        // setPerson(prev === person.mentors.name ? person.mentors.name = current : '그런 이름의 멘토는 없습니다.')
        // 리엑트에서는 객체의 불변성을 유지해야한다. 바꾸려면 map같은 것을 이용, 새로 만들어서 써야함.
        dispatch({type: 'updated', prev, current });
    }
    const handleAdd = () => { 
        const name = prompt(`멘토의 이름은?`);
        const title = prompt(`멘토의 직함은?`);
        dispatch({type: 'added', name, title });
    }
    const handleDelete =()=>{ 
        const name = prompt(`누구를 삭제하고 싶은가요?`);
        dispatch({type: 'deleted', name});
    }
    return (
        <div>
            <h1>
                {person.name}는 {person.title}
            </h1>
            <p>
                {person.name}의 멘토는:
            </p>
            <ul>
                {person.mentors.map((mentor, index)=>(
                    <li key={index}>
                        {mentor.name} ({mentor.title})
                    </li>
                ))}
            </ul>
            <button onClick={handleUpdate}>멘토 이름 바꾸기</button> 
            <button onClick={handleAdd}>멘토 추가하기</button> 
            <button onClick={handleDelete}>멘토 삭제하기</button> 

            
            {/*<button onClick={()=>{ 
                const current = prompt(`어떤 이름을 추가하고 싶은가요?`);
                setPerson((person)=>({
                    ...person, mentors: person.mentors.map((mentor)=>{
                        return {...mentor.push(current), name: current};
                    })
                }))
            }}> 
                멘토 이름 추가하기
            </button> 
            <button onClick={()=>{ 
                const prev = prompt(`누구의 이름을 삭제하고 싶은가요?`);
                setPerson((person)=>({
                    ...person, mentors: person.mentors.map((mentor)=>{
                        if(mentor.name === prev) {
                            return {...mentor, name: null};
                        }
                        return mentor;
                    })
                }))
            }}> 
                멘토 이름 삭제하기
        </button> */}
            
        </div>
    )
}

const initialPerson = {
    name: '엘리',
    title: '개발자',
    mentors: [
        {
            name: '밥',
            title: '시니어개발자',
        },
        {
            name: '제임스',
            title: '시니어개발자',
        },
    ],
}