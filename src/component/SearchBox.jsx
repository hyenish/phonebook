import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
	const [keyword, setKeyword] = useState(""); //입력한 키워드값을 인식하게
	let dispatch = useDispatch();

	const searchByname = (e) => {
		e.preventDefault();
		dispatch({ type: "SEARCH_BY_NAME", payload: { keyword } });
	};

	return (
		<form action="" className={styles.form} onSubmit={searchByname}>
			<Row>
				<Col xs>
					<Form.Control
						type="text"
						placeholder="검색할 이름을 입력해주세요"
						onChange={(e) => setKeyword(e.target.value)}
						className={styles.formControl}
					/>
				</Col>
				<Col xs="auto">
					<Button variant="primary" type="submit" className={styles.button}>
						검색
					</Button>
				</Col>
			</Row>
		</form>
	);
};

export default SearchBox;
