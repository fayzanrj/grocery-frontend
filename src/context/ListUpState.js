import { useState } from "react";
import ListUpContext from "./ListUpContext";

const ListUpState = (props) => {
    const [openedList , setOpenedList] = useState({
        title : '',
        id : ''
    })

    const [listItems , setListItems] = useState({
        "status": "success",
        "msg": "Items has been fetched",
        "items": [
            {
                "_id": "647ede94773e6c8080932f0e",
                "content": "Item1",
                "quantity": "1",
                "listId": "647ede74773e6c8080932f06",
                "createdBy": "647edd75773e6c8080932ee2",
                "checkedBy": "",
                "Date": "Tue Jun 06 2023 12:16:56 GMT+0500 (Pakistan Standard Time)",
                "__v": 0
            },
            {
                "_id": "647edea1773e6c8080932f18",
                "content": "Item3",
                "quantity": "3",
                "listId": "647ede74773e6c8080932f06",
                "createdBy": "647edd75773e6c8080932ee2",
                "checkedBy": "Fayzan",
                "Date": "Tue Jun 06 2023 12:16:56 GMT+0500 (Pakistan Standard Time)",
                "__v": 0
            },
            {
                "_id": "64980a5bbf14d980a2cebabf",
                "content": "Item4",
                "quantity": "4",
                "listId": "647ede74773e6c8080932f06",
                "createdBy": "647edd75773e6c8080932ee2",
                "checkedBy": "Ali",
                "Date": "Sun Jun 25 2023 14:34:44 GMT+0500 (Pakistan Standard Time)",
                "__v": 0
            },
            {
                "_id": "64980a63bf14d980a2cebac4",
                "content": "Item5",
                "quantity": "6",
                "listId": "647ede74773e6c8080932f06",
                "createdBy": "647edd75773e6c8080932ee2",
                "checkedBy": "",
                "Date": "Sun Jun 25 2023 14:34:44 GMT+0500 (Pakistan Standard Time)",
                "__v": 0
            },
            {
                "_id": "64980a63bf14d9802cebac4",
                "content": "Item5",
                "quantity": "6",
                "listId": "647ede74773e6c8080932f06",
                "createdBy": "647edd75773e6c8080932ee2",
                "checkedBy": "",
                "Date": "Sun Jun 25 2023 14:34:44 GMT+0500 (Pakistan Standard Time)",
                "__v": 0
            },
            {
                "_id": "64980a63bf1d980a2cebac4",
                "content": "Item5",
                "quantity": "6",
                "listId": "647ede74773e6c8080932f06",
                "createdBy": "647edd75773e6c8080932ee2",
                "checkedBy": "",
                "Date": "Sun Jun 25 2023 14:34:44 GMT+0500 (Pakistan Standard Time)",
                "__v": 0
            },
            {
                "_id": "64980a63bf14d980acebac4",
                "content": "Item5",
                "quantity": "6",
                "listId": "647ede74773e6c8080932f06",
                "createdBy": "647edd75773e6c8080932ee2",
                "checkedBy": "",
                "Date": "Sun Jun 25 2023 14:34:44 GMT+0500 (Pakistan Standard Time)",
                "__v": 0
            },
            {
                "_id": "64980a63bf14d980a2ceba4",
                "content": "Item5",
                "quantity": "6",
                "listId": "647ede74773e6c8080932f06",
                "createdBy": "647edd75773e6c8080932ee2",
                "checkedBy": "",
                "Date": "Sun Jun 25 2023 14:34:44 GMT+0500 (Pakistan Standard Time)",
                "__v": 0
            }
        ]
    })

    return(
        <ListUpContext.Provider value={{openedList , setOpenedList , listItems}}>
            {props.children}
        </ListUpContext.Provider>
    )
}

export default ListUpState;