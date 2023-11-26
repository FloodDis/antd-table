import React from "react";
import { Modal } from "antd";
import { TableForm } from "../TableForm";

export const FullNameModal = ({ isEditing, isOpen, handleCancel,
    handleAdd, handleEdit, isButtonDisabled,
    editingClient, setEditingClient }) => {
    return (
        <Modal
            title={
                isEditing
                    ? 'Редактирование записи о клиенте'
                    : 'Создание новой записи о клиенте'
            }
            open={isOpen}
            okText={
                isEditing
                    ? 'Сохранить'
                    : 'Создать'
            }
            cancelText='Отмена'
            onCancel={handleCancel}
            onOk={
                () => {
                    isEditing
                        ? handleEdit()
                        : handleAdd();
                }
            }
            okButtonProps={{ disabled: isButtonDisabled }}
        >
            <TableForm
                editingClient={editingClient}
                setEditingClient={setEditingClient}
                isEditing={isEditing}
            />
        </Modal>
    )
}