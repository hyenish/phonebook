import React from "react";
import { Row, Col } from "react-bootstrap";
import style from "./ContactItem.module.css";

const ContactItem = ({ item }) => {
	return (
		<div className={style.box}>
			<Row>
				<Col xs="auto">
					<img
						width={70}
						src="https://cdn3.iconfinder.com/data/icons/seo-marketing-19/32/SEO-06-512.png"
						alt="유저 이미지"
					/>
				</Col>
				<Col xs className={style.text}>
					<h5>{item.name}</h5>
					<p>{item.phoneNumber}</p>
				</Col>
			</Row>
		</div>
	);
};

export default ContactItem;
