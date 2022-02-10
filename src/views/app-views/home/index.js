import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addClient,
  editingClient,
  loadingClient,
  saveEditingClient,
  updateEditingClient,
} from "redux/actions/client";
import { Table, Spin, Space, Modal, Form, Input, Checkbox, Button } from "antd";
import { useState } from "react";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  const handleOk = () => {
    dispatch(loadingClient(true));
    setTimeout(() => {
      dispatch(loadingClient(false));
    }, 1000);
    dispatch(saveEditingClient(clientState.editingClient));
    setModalOpen(false);
  };

  const handleCancel = () => {
    setModalOpen(false);
  };

  const dispatch = useDispatch();
  const clientState = useSelector((state) => state.client);

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "UserName", dataIndex: "username", key: "username" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Phone", dataIndex: "phone", key: "phone" },
    { title: "Website", dataIndex: "website", key: "website" },
    {
      title: "Action",
      key: "action",
      render: (record) => {
        return (
          <Space size="middle">
            <a onClick={() => onEditClick(record)}>Edit</a>
            {/* <a>Profile</a> */}
          </Space>
        );
      },
    },
  ];

  const onEditClick = (record) => {
    setModalOpen(true);
    dispatch(editingClient(record));
  };

  useEffect(() => {
    dispatch(loadingClient(true));
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => dispatch(addClient(data)))
      .then(() => dispatch(loadingClient(false)));
  }, []);

  const editingChange = (e) => {
    dispatch(updateEditingClient(e.target.name, e.target.value));
  };

  return (
    <div>
      {clientState.loading ? (
        <Spin />
      ) : (
        <>
          <Table
            columns={columns}
            dataSource={clientState.clients}
            onClick={() => showModal()}
          />
          <Modal
            title="Basic Modal"
            visible={modalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            {/* <Form
              name="basic"
              //   labelCol={{ span: 8 }}
              //   wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={{ onFinish }}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            > */}
            <Input
              name="name"
              value={clientState.editingClient?.name}
              onChange={(e) => editingChange(e)}
            />
            <Input
              name="username"
              value={clientState.editingClient?.username}
              onChange={(e) => editingChange(e)}
            />
            <Input
              name="email"
              value={clientState.editingClient?.email}
              onChange={(e) => editingChange(e)}
            />
            <Input
              name="phone"
              value={clientState.editingClient?.phone}
              onChange={(e) => editingChange(e)}
            />
            <Input
              name="website"
              value={clientState.editingClient?.website}
              onChange={(e) => editingChange(e)}
            />
            {/* </Form> */}
          </Modal>
        </>
      )}
    </div>
  );
};

export default Home;
