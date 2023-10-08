import React from "react";
import ListViewRecordItem from "./ListViewRecordItem";

const ListView = ({ records }) => {
    return (
        <div className="record-list">
            {records.map(record => (
                <ListViewRecordItem
                    record={record}
                    key={record.id}
                />
            ))}
        </div>
    )
}

export default ListView;