import { Table } from "antd";
import React from "react";
import { TableButton } from "../TableButton";

export const FullNameTable = ({dataSource, onEditClient, onDeleteClient}) => {

    let columns = [
        {
            key: 'surname',
            title: 'Фамилия',
            dataIndex: 'surname'
        },
        {
            key: 'nameOfClient',
            title: 'Имя',
            dataIndex: 'nameOfClient'
        },
        {
            key: 'patronymic',
            title: 'Отчество',
            dataIndex: 'patronymic'
        },
        {
            key: 'dateOfBirth',
            title: 'Дата рождения',
            dataIndex: 'dateOfBirth'
        },
        {
            key: 'actions',
            title: 'Действие',
            render: (record) => {
                return (
                    <>
                        <TableButton onClick={() => {
                            onEditClient(record);
                        }}>Редактировать</TableButton>
                        <TableButton onClick={() => {
                            onDeleteClient(record);
                        }}>Удалить</TableButton>
                    </>
                );
            }
        },
    ];

    return (
        <Table pagination={false} columns={columns} dataSource={dataSource}/>
    )
}