import { Form, Input } from "antd";
import React from "react";
import { useEffect } from "react";


export const TableForm = ({ editingClient, setEditingClient, isEditing }) => {

    const [form] = Form.useForm();

    useEffect(() => {
        updateAddEditForm(isEditing);
    }, [isEditing])

    useEffect(() => {
        updateRecordEditForm();
    }, [editingClient])

    const updateAddEditForm = (isEditing) => {
        isEditing
            ? form.setFieldsValue({
                surname: editingClient.surname,
                nameOfClient: editingClient.nameOfClient,
                patronymic: editingClient.patronymic,
                dateOfBirth: editingClient.dateOfBirth
            })
            : form.setFieldsValue({
                surname: '',
                nameOfClient: '',
                patronymic: '',
                dateOfBirth: ''
            })
    }

    const updateRecordEditForm = () => {
        form.setFieldsValue({
            surname: editingClient?.surname,
            nameOfClient: editingClient?.nameOfClient,
            patronymic: editingClient?.patronymic,
            dateOfBirth: editingClient?.dateOfBirth
        })
    }

    return (
        <Form form={form}>
            <Form.Item rules={[
                {
                    required: true,
                    message: 'Необходимо ввести фамилию'
                }
            ]}
                label='Фамилия'
                name='surname'
                value={editingClient?.surname}
                onChange={(e) => { setEditingClient((prevState) => { return { ...prevState, surname: e.target.value } }) }}
            >
                <Input placeholder='Фамилия' />
            </Form.Item>
            <Form.Item rules={[
                {
                    required: true,
                    message: 'Необходимо ввести имя'
                }
            ]}
                label='Имя'
                name='nameOfClient'
                value={editingClient?.name}
                onChange={(e) => { setEditingClient((prevState) => { return { ...prevState, nameOfClient: e.target.value } }) }}
            >
                <Input placeholder='Имя' />
            </Form.Item>
            <Form.Item
                label='Отчество'
                name="patronymic"
                value={editingClient?.patronymic}
                onChange={(e) => { setEditingClient((prevState) => { return { ...prevState, patronymic: e.target.value } }) }}
            >
                <Input placeholder='Отчество' />
            </Form.Item>
            <Form.Item rules={[
                {
                    required: true,
                    message: 'Необходимо ввести дату рождения'
                }
            ]}
                label='Дата рождения'
                name='dateOfBirth'
                value={editingClient?.dateOfBirth}
                onChange={(e) => { setEditingClient((prevState) => { return { ...prevState, dateOfBirth: e.target.value } }) }}
            >
                <Input placeholder='Дата рождения' />
            </Form.Item>
        </Form>
    )
}