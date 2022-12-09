import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

const ContactList = () => {
	//search할 때 쓰이는 keyword값도 받아옴
	const { contactList, keyword } = useSelector((state) => state);
	const [filteredList, setFilteredList] = useState([]);

	useEffect(() => {
		if (keyword !== "") {
			let book = contactList.filter((item) => item.name.includes(keyword));
			setFilteredList(book);
		} else {
			setFilteredList(contactList);
		}
	}, [keyword, contactList]);

	return (
		<div>
			<SearchBox />
			<div>
				인원: {filteredList.length}명
				{filteredList.map((item) => (
					<ContactItem item={item} />
				))}
			</div>
		</div>
	);
};

export default ContactList;
