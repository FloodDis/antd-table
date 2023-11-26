import React from "react";
import './styles.css'
import { Button } from "antd";

export const TableButton = ({children, ...props}) => {
    return (
        <Button className="table-button" {...props}>{children}</Button>
    )
}