import './App.css';
import React, { useState } from "react";
import Form from "./components/Form";

const App = () => {
  const [memberList, setMemberList] = useState([]);
  const [editedMember, setEditedMember] = useState(null);

  const addMember = (member) => {
    if (!memberList.map((item) => item.email).includes(member.email)) {
      setMemberList([...memberList, member]);
    }
  };

  const editMember = (member) => {
    setEditedMember(member);
  };

  const updateMember = (updatedMember) => {
    const updatedList = memberList.map((member) => {
      if (member.email === updatedMember.email) {
        return updatedMember;
      }else{
      return member;
      }
    });
    setMemberList(updatedList);
    setEditedMember(null);
  };


  return (
    <div>
      <Form addMember={addMember} member={editedMember} updateMember={updateMember} />
      <h2 style={{marginTop:"3%", color:" rgb(39, 86, 114)" }}>Ekip Üyeleri Listesi </h2>
      <ul>
        {memberList.map((member, index) => (
          <div className="member" key={index}>
            <p>İsim-Soyisim: {member.name} {member.surname}</p>
            <p>E-posta: {member.email}</p>
            <button onClick={() => editMember(member)}>Düzenle</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default App;