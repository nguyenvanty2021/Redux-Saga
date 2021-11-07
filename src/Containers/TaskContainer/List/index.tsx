import { Table } from 'antd'
import React from 'react'
import { Column, Task, TaskList } from '../../../models'

const List: React.FC<TaskList> = ({
  task,
  handleSearch,
  handleUpdate,
  handleDelete,
  handleAddTask,
}) => {
  const columns: Column[] = [
    {
      title: 'Title',
      dataIndex: 'title',
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (text: boolean, record: Task) => (text ? 'true' : 'false'),
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (text: any, record: Task) => (
        <div>
          <div
            style={{ cursor: 'pointer', color: 'red' }}
            onClick={() =>
              handleDelete(
                record && record.id && record.id !== '' ? record.id : 'data',
              )
            }
          >
            Delete
          </div>
          <div
            style={{ cursor: 'pointer', color: 'green' }}
            onClick={() =>
              handleUpdate(
                record && record.id && record.id !== '' ? record.id : 'data',
                {
                  title: 'title 4',
                  description: 'description 4',
                  status: false,
                },
              )
            }
          >
            Update
          </div>
        </div>
      ),
    },
  ]

  return (
    <div>
      <input placeholder="Search" onChange={handleSearch} />
      <Table rowKey="id" columns={columns} dataSource={task} />
      <button
        onClick={() =>
          handleAddTask({
            title: 'title 2',
            description: 'description 2',
            status: false,
          })
        }
      >
        Add Task
      </button>
    </div>
  )
}
export default List
