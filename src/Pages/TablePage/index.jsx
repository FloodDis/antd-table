import React, { useCallback, useMemo, useState } from "react";
import './styles.css'
import { TABLE_DATA } from "./constants";
import { Modal } from "antd";
import { TableButton } from "./components/TableButton";
import { FullNameTable } from "./components/FullNameTable";
import { FullNameModal } from "./components/FullNameModal";

export const TablePage = () => {

    const [clients, setClients] = useState(TABLE_DATA);
    const [isEditing, setIsEditing] = useState(false);
    const [editingClient, setEditingClient] = useState({});
    const [isOpen, setIsOpen] = useState(false);

    const handleAdd = () => {
        if (!editingClient.nameOfClient || !editingClient.surname || !editingClient.dateOfBirth) {
            return;
        }
        const newCLient = {
            id: Date.now(),
            ...editingClient
        }
        setClients(prevState => [...prevState, newCLient]);
        setIsOpen(false);
        resetEditing();
    }

    const onDeleteClient = (record) => {
        Modal.confirm({
            title: 'Вы уверены, что хотите удалить запись о клиенте?',
            okText: 'Удалить',
            cancelText: 'Отмена',
            onOk: () => {
                setClients((prevState) => {
                    return prevState.filter((client) => client.id !== record.id);
                })
            }
        })
    }

    const onEditClient = (record) => {
        setIsEditing(true);
        setIsOpen(true);
        setEditingClient({ ...record });
    };

    const handleEdit = () => {
        if (!editingClient.nameOfClient || !editingClient.surname || !editingClient.dateOfBirth) {
            return;
        }
        setClients((prevState) => {
            return prevState.map((client) => {
                if (client.id === editingClient.id) {
                    return editingClient;
                } else {
                    return client;
                }
            })
        });
        setIsOpen(false);
        resetEditing();
    }

    const resetEditing = useCallback(() => {
        setIsEditing(false);
        setEditingClient(null);
    }, [])

    const handleCancel = useCallback(() => {
        setIsOpen(false);
        resetEditing();
    }, [])

    const openOnAdd = useCallback(() => {
        setIsOpen(true);
        setIsEditing(false);
    }, [])

    const isDisabled = useMemo(() => !editingClient?.nameOfClient
        || !editingClient?.surname
        || !editingClient?.dateOfBirth,
        [editingClient?.nameOfClient, editingClient?.surname, editingClient?.dateOfBirth]
    )

    return (
        <div className="app-container">
            <TableButton onClick={openOnAdd}>Добавить клиента</TableButton>
            <FullNameTable dataSource={clients} onEditClient={onEditClient} onDeleteClient={onDeleteClient} />
            <FullNameModal
                isEditing={isEditing}
                isOpen={isOpen}
                handleCancel={handleCancel}
                handleAdd={handleAdd}
                handleEdit={handleEdit}
                isButtonDisabled={isDisabled}
                editingClient={editingClient}
                setEditingClient={setEditingClient}
            />
        </div>
    )
}