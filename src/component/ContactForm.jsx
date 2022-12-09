import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
	const [name, setName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const dispatch = useDispatch();

	const addContact = (e) => {
		//reload 되는 것을 막아줌
		e.preventDefault();
		dispatch({
			//던져줄 액션을 dispatch를 이용해 만들어 준다
			type: "ADD_CONTACT",
			payload: { name: name, phoneNumber: phoneNumber },
		});
		setName("");
		setPhoneNumber("");
	};

	return (
		<div>
			<Form onSubmit={addContact}>
				<Form.Group className="mb-3" controlId="formName">
					<Form.Label>이름</Form.Label>
					<Form.Control
						type="text"
						placeholder="이름을 입력해주세요"
						//함수 따로 만들지 않고 바로 사용하게
						onChange={(e) => setName(e.target.value)}
						value={name}
						className={styles.formControl}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formContact">
					<Form.Label>전화번호</Form.Label>
					<Form.Control
						type="number"
						placeholder="전화번호를 입력해주세요"
						onChange={(e) => setPhoneNumber(e.target.value)}
						value={phoneNumber}
						className={styles.formControl}
					/>
				</Form.Group>
				<Button variant="primary" type="submit" className={styles.button}>
					등록
				</Button>
			</Form>
		</div>
	);
};

export default ContactForm;
